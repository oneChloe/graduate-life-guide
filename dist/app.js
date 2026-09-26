const stages = {
  pregrad: {
    label: "即将毕业",
    summaries: {
      job: "先把“去哪”和“做什么”拆开，不要在一次选择里同时解决整个人生。",
      money: "先算生存成本，再比较工资。到手收入只有放进具体城市才有意义。",
      stay: "把城市、行业和岗位分别评分，你可能不是真的讨厌这座城市。",
      skill: "先找到岗位会反复使用的能力，再决定该补课、实习还是做项目。",
      life: "毕业不是生活暂停键。先给工作之外的时间留一个固定位置。"
    }
  },
  rookie: {
    label: "工作 0—1 年",
    summaries: {
      job: "先确认岗位是否在积累东西，再判断是磨合问题，还是路线本身不合适。",
      money: "这一阶段先建立可喘息的空间，让一次意外不至于立刻打乱所有选择。",
      stay: "区分公司、岗位、领导和城市，别把四个问题混成一句“我想走”。",
      skill: "把做过的工作变成可以展示、可以复用、可以带走的能力证明。",
      life: "先恢复睡眠、饮食和关系，再判断工作是否真的占据了全部生活。"
    }
  },
  growth: {
    label: "工作 1—3 年",
    summaries: {
      job: "比较下一份工作能否增加选择权，不要只比较工资和公司名字。",
      money: "让积蓄服务于选择：能不能辞职、休息、搬家或学习一段时间。",
      stay: "先做一次低成本试走，再决定转行、换城还是继续积累。",
      skill: "这一阶段需要一项别人能识别、市场愿意付钱的核心能力。",
      life: "如果工作稳定却越来越空，可能该补的是生活支线，而不是立刻推倒重来。"
    }
  },
  crossroad: {
    label: "工作 3—5 年",
    summaries: {
      job: "从“能不能胜任”转向“这条路线会把我带到哪里”。",
      money: "重新审视收入结构、固定开支和家庭责任，看看自己还有多少机动空间。",
      stay: "用真实项目验证第二条路线，避免只在脑内反复比较。",
      skill: "把零散经验组合成定位，让别人能一句话理解你能解决什么问题。",
      life: "职业开始定型时，更需要主动建设朋友、健康、兴趣和家庭关系。"
    }
  }
};

const routes = {
  pregrad: {
    job: [["选择城市", "比较机会、成本、支持网络和退出难度。", "city"], ["筛选第一份工作", "先看每天做什么、谁带你、能留下什么。", "first-job"], ["为试用期留证据", "提前确认标准，并持续记录完成的工作。", "probation"]],
    money: [["核算城市成本", "把房租、通勤、吃饭和回家成本写成数字。", "city"], ["比较真实到手收入", "别只看月薪，把时间和隐性支出一起算。", "offer"], ["建立初始安全垫", "先攒出一段不会被迫立即答应的时间。", "buffer"]],
    stay: [["拆开四个变量", "分别评估城市、公司、岗位和直接领导。", "career-fork"], ["体验候选城市", "用真实的一天代替脑内想象。", "city"], ["把居住成本算完整", "把通勤时间也放进租房选择。", "housing-commute"]],
    skill: [["拆解目标岗位", "收集职位描述，找出反复出现的要求。", "first-job"], ["补一项可迁移能力", "只补会影响入场的那一项。", "portable-skill"], ["完成一件公开作品", "让能力有一个别人看得见的载体。", "portfolio"]],
    life: [["安排工作边界", "先决定哪些晚上和周末不被工作占用。", "life-system"], ["保留一个兴趣", "选择不用证明价值也愿意做的事情。", "creative-work"], ["建立新城市关系网", "主动留下三个可以联系的人。", "friends"]]
  },
  rookie: {
    job: [["先读懂团队系统", "把任务、关系和反馈方式画成地图。", "first-90-days"], ["记录真实产出", "每周留下一条结果、一次反馈和一项学会的东西。", "reporting"], ["决定磨合或离开", "设定继续投入的条件和停止等待的日期。", "job-change"]],
    money: [["算清必要支出", "知道自己一个月维持生活需要多少钱。", "buffer"], ["核对制度账户", "确认社保、公积金和个税记录。", "social-security"], ["停止高压负债", "优先处理会迅速压缩选择权的支出。", "debt-pressure"]],
    stay: [["区分问题来源", "公司、岗位、领导、城市，可能只坏了其中一个。", "bad-manager"], ["准备一次外部比较", "让其他团队和市场给出真实反馈。", "job-change"], ["看清路线分岔", "判断是换环境、换岗位，还是换方向。", "career-fork"]],
    skill: [["盘点工作样本", "列出真正由你完成、可以复述的项目。", "portfolio"], ["训练可迁移能力", "选择能跨公司、跨工具继续使用的能力。", "portable-skill"], ["让结果被准确看见", "把工作变成可信而不过度包装的表达。", "reporting"]],
    life: [["修复基础状态", "先检查睡眠、吃饭、运动和持续疲惫。", "health"], ["恢复固定联系", "把朋友和家人的联系写进日程。", "friends"], ["安排低成本支线", "给自己一个不靠工作反馈的小目标。", "life-system"]]
  },
  growth: {
    job: [["盘点选择权", "列出你现在能去的岗位、行业和城市。", "job-change"], ["整理能力证据", "把项目、结果和判断过程整理出来。", "portfolio"], ["看清路线分岔", "比较专业、管理与换轨的真实日常。", "career-fork"]],
    money: [["计算可停工时间", "用现金和必要支出估算自己能停多久。", "buffer"], ["控制高压负债", "让长期付款不要绑住所有选择。", "debt-pressure"], ["做一次低成本试验", "先用小规模副业验证需求和能力。", "side-project"]],
    stay: [["用周末试走", "先用小项目体验新路线的真实日常。", "side-project"], ["验证新路线", "用交付、面试或真实反馈代替想象。", "career-fork"], ["再决定是否切换", "有了真实反馈，再选择投入规模。", "job-change"]],
    skill: [["选择核心能力", "确定一项愿意连续积累两年的能力。", "portable-skill"], ["完成真实项目", "解决一个真实问题，而不是只刷课程。", "portfolio"], ["把 AI 变成放大器", "从一个真实工作任务开始试用。", "ai"]],
    life: [["找到缺失支线", "判断你缺的是关系、身体、创造还是探索。", "life-system"], ["安排固定投入", "做一件不靠公司批准的作品。", "creative-work"], ["离开熟悉地图", "通过旅行恢复观察力和选择感。", "travel"]]
  },
  crossroad: {
    job: [["看清五年后的角色", "观察这条路线继续走下去的日常，而非职位名。", "career-fork"], ["评估外部变化", "把行业收缩与个人能力问题分开。", "industry"], ["选择深耕或换轨", "带着证据完成下一次职业移动。", "job-change"]],
    money: [["重算家庭责任", "把父母、伴侣、住房等责任放进现金计划。", "family"], ["降低不可动开支", "减少让你无法暂停或迁移的长期承诺。", "debt-pressure"], ["增加收入选择", "用低成本试验培养第二种收入能力。", "side-project"]],
    stay: [["搭建第二条曲线", "在不辞职的情况下做一个小规模版本。", "side-project"], ["判断环境变化", "确认是短期震荡，还是行业结构已经改变。", "industry"], ["为中断留下回程票", "照护、生病或休息时也保留职业连接。", "career-break"]],
    skill: [["组合已有经验", "把行业知识、工具能力和沟通方式拼成组合。", "portable-skill"], ["建立自己的作品", "不等公司提供机会，也能积累可信案例。", "creative-work"], ["借助 AI 扩大能力", "把工具放进已经熟悉的业务场景。", "ai"]],
    life: [["补回长期关系", "为重要的人安排稳定而非临时的时间。", "family"], ["恢复身体账户", "把体力和注意力当作长期资产管理。", "health"], ["安排非工作目标", "让下一年不只有绩效和工资目标。", "life-system"]]
  }
};

const guideQuests = Array.isArray(window.GUIDE_CONTENT) ? window.GUIDE_CONTENT : [];
const guideSources = window.GUIDE_SOURCES || {};
const storageKeys = {
  stage: "life-guide-stage",
  priority: "life-guide-priority",
  saved: "life-guide-saved",
  read: "life-guide-read",
  last: "life-guide-last"
};

function readStoredSet(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(value) ? value : []);
  } catch {
    return new Set();
  }
}

function saveSet(key, value) {
  localStorage.setItem(key, JSON.stringify([...value]));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let currentStage = localStorage.getItem(storageKeys.stage) || "pregrad";
let currentPriority = localStorage.getItem(storageKeys.priority) || "job";
let currentFilter = "main";
let currentLibraryFilter = "all";
let currentSearch = "";
let currentQuestId = null;
const savedQuests = readStoredSet(storageKeys.saved);
const readQuests = readStoredSet(storageKeys.read);

if (!stages[currentStage]) currentStage = "pregrad";
if (!routes[currentStage]?.[currentPriority]) currentPriority = "job";

const stageChoices = document.querySelectorAll("[data-stage]");
const priorityChoices = document.querySelectorAll("[data-priority]");
const tabs = document.querySelectorAll("[data-filter]");
const libraryFilters = document.querySelectorAll("[data-library-filter]");
const routeSummary = document.querySelector("#routeSummary");
const routeLine = document.querySelector("#routeLine");
const questGrid = document.querySelector("#questGrid");
const questDialog = document.querySelector("#questDialog");
const questSearch = document.querySelector("#questSearch");
const questCount = document.querySelector("#questCount");
const saveQuestButton = document.querySelector("#saveQuestButton");
const readQuestButton = document.querySelector("#readQuestButton");
const copyLinkButton = document.querySelector("#copyLinkButton");
const previousQuestButton = document.querySelector("#previousQuestButton");
const nextQuestButton = document.querySelector("#nextQuestButton");

function getTypeMeta(type) {
  if (type === "side") return { label: "SIDE QUEST", color: "var(--cyan)" };
  if (type === "boss") return { label: "BOSS", color: "var(--danger)" };
  return { label: "MAIN QUEST", color: "var(--accent)" };
}

function syncChoices() {
  stageChoices.forEach((button) => button.classList.toggle("active", button.dataset.stage === currentStage));
  priorityChoices.forEach((button) => button.classList.toggle("active", button.dataset.priority === currentPriority));
}

function renderRoute() {
  routeSummary.textContent = stages[currentStage].summaries[currentPriority];
  routeLine.innerHTML = routes[currentStage][currentPriority]
    .map(([title, description, questId], index) => `
      <button class="route-step" type="button" data-route-quest-id="${escapeHtml(questId)}" aria-label="打开建议关卡：${escapeHtml(title)}">
        <span class="step-number">0${index + 1}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <span class="route-open">打开关卡 ↗</span>
      </button>
    `)
    .join("");
}

function updateProgress() {
  const total = guideQuests.length;
  const readCount = [...readQuests].filter((id) => guideQuests.some((quest) => quest.id === id)).length;
  const savedCount = [...savedQuests].filter((id) => guideQuests.some((quest) => quest.id === id)).length;
  document.querySelector("#readCount").textContent = readCount;
  document.querySelector("#totalCount").textContent = total;
  document.querySelector("#savedCount").textContent = savedCount;
  document.querySelector("#progressBar").style.width = total ? `${(readCount / total) * 100}%` : "0%";
}

function searchableText(quest) {
  return [
    quest.title,
    quest.summary,
    quest.lead,
    quest.scope,
    quest.veteran,
    ...(quest.story || []),
    ...(quest.diagnosis || []).flatMap((item) => [item.title, item.detail]),
    ...(quest.questions || []),
    ...(quest.pitfalls || []),
    ...(quest.checklist || []),
    ...(quest.pause || []),
    ...(quest.options || []).flatMap((option) => [option.name, option.fit, option.cost, option.warning]),
    ...(quest.plan || []).flatMap((item) => [item.when, item.action, item.done]),
    ...(quest.scenario || []),
    ...Object.values(quest.ledger || {}),
    ...(quest.scripts || []),
    ...(quest.review || []),
    quest.counterpoint
  ].join(" ").toLowerCase();
}

function renderQuests() {
  const keyword = currentSearch.trim().toLowerCase();
  const filtered = guideQuests.filter((quest) => {
    if (currentFilter !== "all" && quest.type !== currentFilter) return false;
    if (currentLibraryFilter === "saved" && !savedQuests.has(quest.id)) return false;
    if (currentLibraryFilter === "read" && !readQuests.has(quest.id)) return false;
    return !keyword || searchableText(quest).includes(keyword);
  });

  const statusLabel = currentLibraryFilter === "saved" ? "收藏" : currentLibraryFilter === "read" ? "已读" : "关卡";
  questCount.textContent = keyword ? `找到 ${filtered.length} 个相关${statusLabel}` : `共 ${filtered.length} 个${statusLabel}`;

  questGrid.innerHTML = filtered.map((quest) => {
    const meta = getTypeMeta(quest.type);
    const states = [
      savedQuests.has(quest.id) ? '<span class="card-state">已收藏</span>' : "",
      readQuests.has(quest.id) ? '<span class="card-state read">已读</span>' : ""
    ].join("");
    return `
      <article class="quest-card" tabindex="0" role="button" data-quest-id="${escapeHtml(quest.id)}" style="--card-color: ${meta.color}" aria-label="打开关卡：${escapeHtml(quest.title)}">
        <div class="card-top">
          <span class="quest-type">${meta.label}</span>
          <span class="quest-level">${escapeHtml(quest.level)}</span>
        </div>
        <div class="card-states">${states}</div>
        <h3>${escapeHtml(quest.title)}</h3>
        <p>${escapeHtml(quest.summary)}</p>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </article>
    `;
  }).join("");

  if (!guideQuests.length) {
    questGrid.innerHTML = '<div class="empty-result"><strong>内容没有成功加载</strong><p>请刷新页面，或到 GitHub 提交问题。</p></div>';
  } else if (!filtered.length) {
    questGrid.innerHTML = '<div class="empty-result"><strong>这里暂时没有相关关卡</strong><p>可以换关键词、分类或阅读状态。</p></div>';
  }
}

function updateDialogActions() {
  if (!currentQuestId) return;
  const isSaved = savedQuests.has(currentQuestId);
  const isRead = readQuests.has(currentQuestId);
  saveQuestButton.textContent = isSaved ? "取消收藏" : "收藏本关";
  readQuestButton.textContent = isRead ? "取消已读" : "标记读完";
  saveQuestButton.classList.toggle("active", isSaved);
  readQuestButton.classList.toggle("active", isRead);
}

function estimateReadingMinutes(quest) {
  const text = [
    quest.lead,
    quest.scope,
    quest.veteran,
    ...(quest.story || []),
    ...(quest.scenario || []),
    ...(quest.diagnosis || []).flatMap((item) => [item.title, item.detail]),
    ...(quest.questions || []),
    ...(quest.pitfalls || []),
    ...(quest.checklist || []),
    ...(quest.pause || []),
    ...(quest.options || []).flatMap((option) => Object.values(option)),
    ...(quest.plan || []).flatMap((item) => [item.when, item.action, item.done]),
    ...Object.values(quest.ledger || {}),
    ...(quest.scripts || []),
    ...(quest.review || []),
    quest.counterpoint
  ].join("");
  return Math.max(2, Math.ceil(text.replace(/\s/g, "").length / 450));
}

function updateDialogNavigation() {
  const index = guideQuests.findIndex((quest) => quest.id === currentQuestId);
  document.querySelector("#dialogPosition").textContent = index >= 0 ? `第 ${index + 1} / ${guideQuests.length} 关` : "";
  previousQuestButton.disabled = index <= 0;
  nextQuestButton.disabled = index < 0 || index >= guideQuests.length - 1;
  previousQuestButton.dataset.questId = guideQuests[index - 1]?.id || "";
  nextQuestButton.dataset.questId = guideQuests[index + 1]?.id || "";
}

function renderSources(quest) {
  const sourceInfo = guideSources[quest.id];
  const container = document.querySelector("#dialogSources");
  if (!sourceInfo?.links?.length) {
    container.innerHTML = '<p class="source-empty">本关暂无制度性引用。若你的决定涉及权益、健康或大额金钱，请按所在地和当前日期再次核验。</p>';
    return;
  }

  container.innerHTML = `
    <p class="source-reviewed">官方资料核验于 ${escapeHtml(sourceInfo.reviewedAt)} · ${escapeHtml(sourceInfo.note)}</p>
    <ul class="source-links">
      ${sourceInfo.links.map((link) => `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ↗</a></li>`).join("")}
    </ul>
  `;
}

function questHash(id) {
  return `#quest=${encodeURIComponent(id)}`;
}

function openQuest(id, syncHash = true) {
  const quest = guideQuests.find((item) => item.id === id);
  if (!quest) return;
  currentQuestId = id;
  const meta = getTypeMeta(quest.type);
  document.querySelector("#dialogMeta").textContent = `${meta.label} · ${quest.level} · 约 ${estimateReadingMinutes(quest)} 分钟`;
  document.querySelector("#dialogTitle").textContent = quest.title;
  document.querySelector("#dialogLead").textContent = quest.lead;
  document.querySelector("#dialogScope").textContent = quest.scope;
  document.querySelector("#dialogVeteran").textContent = quest.veteran || quest.summary;
  document.querySelector("#dialogStory").innerHTML = (quest.story || [quest.lead]).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  document.querySelector("#dialogScenario").innerHTML = (quest.scenario || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  document.querySelector("#dialogDiagnosis").innerHTML = (quest.diagnosis || []).map((item, index) => `
    <article class="diagnosis-card">
      <span>0${index + 1}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `).join("");
  document.querySelector("#dialogOptions").innerHTML = (quest.options || []).map((option) => `
    <article class="option-card">
      <header><h4>${escapeHtml(option.name)}</h4><span>适合：${escapeHtml(option.fit)}</span></header>
      <p><strong>代价：</strong>${escapeHtml(option.cost)}</p>
      <p><strong>提醒：</strong>${escapeHtml(option.warning)}</p>
    </article>
  `).join("");
  document.querySelector("#dialogQuestions").innerHTML = (quest.questions || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const ledger = quest.ledger || {};
  document.querySelector("#dialogLedger").innerHTML = [
    ["已知事实", ledger.facts],
    ["仍在猜测", ledger.guesses],
    ["不可逆成本", ledger.irreversible],
    ["最小实验", ledger.experiment]
  ].map(([label, value]) => `<div><span>${label}</span><p>${escapeHtml(value || "")}</p></div>`).join("");
  document.querySelector("#dialogScripts").innerHTML = (quest.scripts || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialogPitfalls").innerHTML = (quest.pitfalls || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialogChecklist").innerHTML = (quest.checklist || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialogPause").innerHTML = (quest.pause || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialogPlan").innerHTML = (quest.plan || []).map((item, index) => `
    <article class="plan-step">
      <span class="plan-index">0${index + 1}</span>
      <div>
        <strong>${escapeHtml(item.when)}</strong>
        <p>${escapeHtml(item.action)}</p>
        <small>完成标准：${escapeHtml(item.done)}</small>
      </div>
    </article>
  `).join("");
  document.querySelector("#dialogReview").innerHTML = (quest.review || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  document.querySelector("#dialogAction").textContent = quest.action;
  document.querySelector("#dialogCounterpoint").textContent = quest.counterpoint;
  document.querySelector("#dialogSource").textContent = quest.source;
  renderSources(quest);
  updateDialogActions();
  updateDialogNavigation();
  localStorage.setItem(storageKeys.last, id);
  if (syncHash && location.hash !== questHash(id)) {
    const method = questDialog.open ? "replaceState" : "pushState";
    history[method](null, "", questHash(id));
  }
  if (!questDialog.open) questDialog.showModal();
}

function parseQuestHash() {
  const match = location.hash.match(/^#quest=(.+)$/);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

function refreshSavedState() {
  updateProgress();
  updateDialogActions();
  renderQuests();
}

stageChoices.forEach((button) => {
  button.addEventListener("click", () => {
    currentStage = button.dataset.stage;
    localStorage.setItem(storageKeys.stage, currentStage);
    syncChoices();
    renderRoute();
  });
});

priorityChoices.forEach((button) => {
  button.addEventListener("click", () => {
    currentPriority = button.dataset.priority;
    localStorage.setItem(storageKeys.priority, currentPriority);
    syncChoices();
    renderRoute();
  });
});

routeLine.addEventListener("click", (event) => {
  const step = event.target.closest("[data-route-quest-id]");
  if (step) openQuest(step.dataset.routeQuestId);
});

tabs.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    tabs.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });
    renderQuests();
  });
});

libraryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    currentLibraryFilter = button.dataset.libraryFilter;
    libraryFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderQuests();
  });
});

questSearch.addEventListener("input", (event) => {
  currentSearch = event.target.value;
  renderQuests();
});

questGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-quest-id]");
  if (card) openQuest(card.dataset.questId);
});

questGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-quest-id]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openQuest(card.dataset.questId);
  }
});

saveQuestButton.addEventListener("click", () => {
  if (!currentQuestId) return;
  savedQuests.has(currentQuestId) ? savedQuests.delete(currentQuestId) : savedQuests.add(currentQuestId);
  saveSet(storageKeys.saved, savedQuests);
  refreshSavedState();
});

readQuestButton.addEventListener("click", () => {
  if (!currentQuestId) return;
  readQuests.has(currentQuestId) ? readQuests.delete(currentQuestId) : readQuests.add(currentQuestId);
  saveSet(storageKeys.read, readQuests);
  refreshSavedState();
});

copyLinkButton.addEventListener("click", async () => {
  if (!currentQuestId) return;
  const url = `${location.origin}${location.pathname}${questHash(currentQuestId)}`;
  try {
    await navigator.clipboard.writeText(url);
    copyLinkButton.textContent = "链接已复制";
  } catch {
    window.prompt("复制这个关卡链接", url);
  }
  window.setTimeout(() => { copyLinkButton.textContent = "复制关卡链接"; }, 1600);
});

document.querySelector("#continueButton").addEventListener("click", () => {
  const routeIds = routes[currentStage][currentPriority].map(([, , id]) => id);
  const lastId = localStorage.getItem(storageKeys.last);
  const nextQuest = guideQuests.find((quest) => routeIds.includes(quest.id) && !readQuests.has(quest.id))
    || guideQuests.find((quest) => quest.id === lastId && !readQuests.has(quest.id))
    || guideQuests.find((quest) => !readQuests.has(quest.id))
    || guideQuests[0];
  if (nextQuest) openQuest(nextQuest.id);
});

[previousQuestButton, nextQuestButton].forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.questId) openQuest(button.dataset.questId);
  });
});

questDialog.addEventListener("click", (event) => {
  if (event.target === questDialog) questDialog.close();
});

questDialog.addEventListener("close", () => {
  currentQuestId = null;
  if (parseQuestHash()) history.replaceState(null, "", `${location.pathname}${location.search}`);
});

window.addEventListener("hashchange", () => {
  const id = parseQuestHash();
  if (id) openQuest(id, false);
  else if (questDialog.open) questDialog.close();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  currentStage = "pregrad";
  currentPriority = "job";
  localStorage.removeItem(storageKeys.stage);
  localStorage.removeItem(storageKeys.priority);
  syncChoices();
  renderRoute();
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
});

syncChoices();
renderRoute();
renderQuests();
updateProgress();

const initialQuest = parseQuestHash();
if (initialQuest) openQuest(initialQuest, false);
