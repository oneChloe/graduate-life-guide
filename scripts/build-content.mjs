import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const isCheck = process.argv.includes("--check");
const groups = [["main", "主线"], ["side", "支线"], ["boss", "Boss 战"]];

function sectionMap(markdown, level = 2) {
  const marker = "#".repeat(level);
  const expression = new RegExp(`^${marker} (.+)$`, "gm");
  const matches = [...markdown.matchAll(expression)];
  const result = new Map();
  matches.forEach((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    result.set(match[1].trim(), markdown.slice(start, end).trim());
  });
  return result;
}

function requireSection(sections, title, file) {
  const value = sections.get(title);
  if (!value) throw new Error(`${file}: 缺少“${title}”章节`);
  return value;
}

function paragraphs(value) {
  return value.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);
}

function bullets(value) {
  return [...value.matchAll(/^- (.+)$/gm)].map((match) => match[1].trim());
}

function field(value, label, file) {
  const match = value.match(new RegExp(`^- ${label}：(.+)$`, "m"));
  if (!match) throw new Error(`${file}: 缺少字段“${label}”`);
  return match[1].trim();
}

function parseQuest(file) {
  const markdown = readFileSync(file, "utf8");
  const frontmatter = markdown.match(/^---\n(\{.*\})\n---\n/);
  if (!frontmatter) throw new Error(`${file}: 文件开头需要 JSON frontmatter`);
  const meta = JSON.parse(frontmatter[1]);
  const body = markdown.slice(frontmatter[0].length);
  const sections = sectionMap(body, 2);

  const diagnosis = [...sectionMap(requireSection(sections, "怎么判断自己卡在哪", file), 3)]
    .map(([title, detail]) => ({ title, detail: paragraphs(detail).join("\n\n") }));

  const options = [...sectionMap(requireSection(sections, "常见的三条路线", file), 3)]
    .map(([name, value]) => ({
      name,
      fit: field(value, "适合", file),
      cost: field(value, "代价", file),
      warning: field(value, "提醒", file)
    }));

  const plan = [...sectionMap(requireSection(sections, "三阶段行动路线", file), 3)]
    .map(([when, value]) => ({
      when,
      action: field(value, "动作", file),
      done: field(value, "完成标准", file)
    }));

  const ledgerSection = requireSection(sections, "决策账本", file);

  return {
    ...meta,
    contentPath: file,
    lead: requireSection(sections, "导语", file),
    scope: requireSection(sections, "适用范围", file),
    veteran: requireSection(sections, "过来人先说", file),
    story: paragraphs(requireSection(sections, "为什么很多人会卡在这里", file)),
    scenario: paragraphs(requireSection(sections, "一个典型场景", file)),
    diagnosis,
    options,
    questions: bullets(requireSection(sections, "这一关先想清楚", file)),
    ledger: {
      facts: field(ledgerSection, "已知事实", file),
      guesses: field(ledgerSection, "仍在猜测", file),
      irreversible: field(ledgerSection, "不可逆成本", file),
      experiment: field(ledgerSection, "最小实验", file)
    },
    scripts: bullets(requireSection(sections, "怎么跟关键人开口", file)),
    pitfalls: bullets(requireSection(sections, "过来人见过的坑", file)),
    checklist: bullets(requireSection(sections, "离开这一关以前", file)),
    pause: bullets(requireSection(sections, "如果暂时不做决定", file)),
    plan,
    review: bullets(requireSection(sections, "三十天后怎么复盘", file)),
    action: requireSection(sections, "可以今天完成", file),
    counterpoint: requireSection(sections, "另一面", file),
    source: requireSection(sections, "内容边界", file)
  };
}

const filesByGroup = new Map();
const quests = [];

for (const [directory] of groups) {
  const files = readdirSync(join("content", directory))
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => join("content", directory, name));
  filesByGroup.set(directory, files);
  quests.push(...files.map(parseQuest));
}

const guideOutput = `window.GUIDE_CONTENT = ${JSON.stringify(quests, null, 2)};\n`;
const summary = ["# 关卡目录", "", "正文是网页内容的唯一来源。修改后运行 `node scripts/build-content.mjs` 生成网页数据。", ""];

for (const [directory, label] of groups) {
  summary.push(`## ${label}`, "");
  for (const file of filesByGroup.get(directory)) {
    const quest = parseQuest(file);
    summary.push(`- [${quest.title}](./${directory}/${file.split("/").at(-1)})`);
  }
  summary.push("");
}

const summaryOutput = `${summary.join("\n")}\n`;
const targets = [["dist/guide-content.js", guideOutput], ["content/SUMMARY.md", summaryOutput]];

if (isCheck) {
  const changed = targets.filter(([path, output]) => readFileSync(path, "utf8") !== output).map(([path]) => path);
  if (changed.length) {
    console.error(`生成文件没有同步：${changed.join("、")}。请运行 node scripts/build-content.mjs`);
    process.exit(1);
  }
  console.log(`Markdown 与网页数据一致：${quests.length} 关。`);
} else {
  targets.forEach(([path, output]) => writeFileSync(path, output, "utf8"));
  console.log(`已从 Markdown 生成 ${quests.length} 关网页数据。`);
}
