import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const context = { window: {} };

for (const file of ["dist/guide-content.js", "dist/guide-sources.js"]) {
  runInNewContext(readFileSync(file, "utf8"), context, { filename: file });
}

const quests = context.window.GUIDE_CONTENT;
const sources = context.window.GUIDE_SOURCES;
const errors = [];
const allowedTypes = new Set(["main", "side", "boss"]);
const requiredTextFields = ["id", "level", "title", "summary", "contentPath", "lead", "scope", "veteran", "action", "counterpoint", "source"];
const sourceRequiredIds = ["offer", "probation", "social-security", "housing-commute", "layoff", "unpaid", "probation-fail", "burnout", "rent-scam"];
const appSource = readFileSync("dist/app.js", "utf8");

if (!Array.isArray(quests)) {
  errors.push("GUIDE_CONTENT 必须是数组");
} else {
  const ids = new Set();

  for (const [index, quest] of quests.entries()) {
    const label = quest?.id || `第 ${index + 1} 项`;
    for (const field of requiredTextFields) {
      if (typeof quest?.[field] !== "string" || !quest[field].trim()) {
        errors.push(`${label}: 缺少有效字段 ${field}`);
      }
    }
    if (ids.has(quest.id)) errors.push(`${label}: id 重复`);
    ids.add(quest.id);
    if (!/^[a-z0-9-]+$/.test(quest.id || "")) errors.push(`${label}: id 只能使用小写字母、数字和连字符`);
    if (!/^content\/(main|side|boss)\/[^/]+\.md$/.test(quest.contentPath || "")) errors.push(`${label}: contentPath 必须指向对应 Markdown 原文`);
    if (!allowedTypes.has(quest.type)) errors.push(`${label}: type 必须是 main、side 或 boss`);
    if (!Array.isArray(quest.story) || quest.story.length < 2) errors.push(`${label}: story 至少需要 2 段`);
    if (!Array.isArray(quest.scenario) || quest.scenario.length < 2) errors.push(`${label}: scenario 至少需要 2 段`);
    if (!Array.isArray(quest.diagnosis) || quest.diagnosis.length < 3) errors.push(`${label}: diagnosis 至少需要 3 个判断信号`);
    if (!Array.isArray(quest.options) || quest.options.length !== 3) errors.push(`${label}: options 需要 3 条路线`);
    if (!Array.isArray(quest.questions) || quest.questions.length < 3) errors.push(`${label}: questions 至少需要 3 项`);
    if (!quest.ledger || typeof quest.ledger !== "object") errors.push(`${label}: 缺少决策账本`);
    for (const field of ["facts", "guesses", "irreversible", "experiment"]) {
      if (typeof quest.ledger?.[field] !== "string" || !quest.ledger[field].trim()) errors.push(`${label}: 决策账本缺少 ${field}`);
    }
    if (!Array.isArray(quest.scripts) || quest.scripts.length < 2) errors.push(`${label}: scripts 至少需要 2 句`);
    if (!Array.isArray(quest.pitfalls) || quest.pitfalls.length < 3) errors.push(`${label}: pitfalls 至少需要 3 项`);
    if (!Array.isArray(quest.checklist) || quest.checklist.length < 4) errors.push(`${label}: checklist 至少需要 4 项`);
    if (!Array.isArray(quest.pause) || quest.pause.length < 3) errors.push(`${label}: pause 至少需要 3 项`);
    if (!Array.isArray(quest.plan) || quest.plan.length !== 3) errors.push(`${label}: plan 需要 3 个行动阶段`);
    if (!Array.isArray(quest.review) || quest.review.length < 3) errors.push(`${label}: review 至少需要 3 个复盘问题`);

    for (const [diagnosisIndex, diagnosis] of (quest.diagnosis || []).entries()) {
      for (const field of ["title", "detail"]) {
        if (typeof diagnosis?.[field] !== "string" || !diagnosis[field].trim()) {
          errors.push(`${label}: 第 ${diagnosisIndex + 1} 个判断信号缺少 ${field}`);
        }
      }
    }

    for (const [optionIndex, option] of (quest.options || []).entries()) {
      for (const field of ["name", "fit", "cost", "warning"]) {
        if (typeof option?.[field] !== "string" || !option[field].trim()) {
          errors.push(`${label}: 第 ${optionIndex + 1} 条路线缺少 ${field}`);
        }
      }
    }

    for (const [planIndex, step] of (quest.plan || []).entries()) {
      for (const field of ["when", "action", "done"]) {
        if (typeof step?.[field] !== "string" || !step[field].trim()) {
          errors.push(`${label}: 第 ${planIndex + 1} 个行动阶段缺少 ${field}`);
        }
      }
    }
  }

  for (const [questId, source] of Object.entries(sources || {})) {
    if (!ids.has(questId)) errors.push(`资料来源引用了不存在的关卡：${questId}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(source.reviewedAt || "")) errors.push(`${questId}: reviewedAt 格式应为 YYYY-MM-DD`);
    if (!Array.isArray(source.links) || !source.links.length) errors.push(`${questId}: 至少需要一个来源链接`);
    for (const link of source.links || []) {
      if (!link.label || !link.url?.startsWith("https://")) errors.push(`${questId}: 来源需要名称和 HTTPS 链接`);
    }
  }

  for (const questId of sourceRequiredIds) {
    if (!sources?.[questId]?.links?.length) errors.push(`${questId}: 高风险关卡必须保留官方核验入口`);
  }

  const routeBlock = appSource.match(/const routes = ([\s\S]*?);\n\nconst guideQuests/);
  if (!routeBlock) {
    errors.push("无法读取建议路线配置");
  } else {
    const routeIds = [...routeBlock[1].matchAll(/\["[^"]+",\s*"[^"]+",\s*"([^"]+)"\]/g)].map((match) => match[1]);
    if (routeIds.length !== 60) errors.push(`建议路线应有 60 个节点，当前读取到 ${routeIds.length} 个`);
    for (const routeId of routeIds) {
      if (!ids.has(routeId)) errors.push(`建议路线引用了不存在的关卡：${routeId}`);
    }
  }
}

if (errors.length) {
  console.error(`内容检查失败（${errors.length} 项）：`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const counts = quests.reduce((result, quest) => {
  result[quest.type] += 1;
  return result;
}, { main: 0, side: 0, boss: 0 });

console.log(`内容检查通过：${quests.length} 关（主线 ${counts.main}、支线 ${counts.side}、Boss 战 ${counts.boss}），${Object.keys(sources).length} 关已附官方资料。`);
