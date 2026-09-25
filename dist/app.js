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
    job: ["选择城市", "筛选第一份工作", "为试用期留证据"],
    money: ["核算城市成本", "比较真实到手收入", "建立初始安全垫"],
    stay: ["拆开四个变量", "访问两座候选城市", "设置复盘日期"],
    skill: ["拆解目标岗位", "补一个短板", "完成一件公开作品"],
    life: ["安排工作边界", "保留一个兴趣", "建立新城市关系网"]
  },
  rookie: {
    job: ["读懂岗位反馈", "记录真实产出", "决定磨合或离开"],
    money: ["算清必要支出", "停止高压负债", "建立选择资金"],
    stay: ["区分问题来源", "做一次外部访谈", "设定离开条件"],
    skill: ["盘点工作样本", "训练可迁移能力", "更新能力证明"],
    life: ["修复基础状态", "恢复固定联系", "安排低成本支线"]
  },
  growth: {
    job: ["盘点选择权", "比较三条路线", "带着筹码跳槽"],
    money: ["计算可停工时间", "控制固定成本", "为试错留预算"],
    stay: ["用周末试走", "验证新路线", "再决定是否切换"],
    skill: ["选择核心能力", "完成真实项目", "形成个人定位"],
    life: ["找到缺失支线", "安排固定投入", "三个月后复盘"]
  },
  crossroad: {
    job: ["看清五年后的角色", "评估路线天花板", "选择深耕或换轨"],
    money: ["重算家庭责任", "降低不可动开支", "增加收入选择"],
    stay: ["搭建第二条曲线", "取得外部反馈", "选择切换窗口"],
    skill: ["组合已有经验", "提炼解决的问题", "建立可信案例"],
    life: ["补回长期关系", "恢复身体账户", "安排非工作目标"]
  }
};

const routeDescriptions = {
  "选择城市": "比较机会、生活成本、支持网络和退出难度。",
  "筛选第一份工作": "先看每天做什么、谁带你、能留下什么。",
  "为试用期留证据": "提前确认标准，并持续记录完成的工作。",
  "核算城市成本": "把房租、通勤、吃饭和回家成本写成数字。",
  "比较真实到手收入": "别只看月薪，把时间和隐性支出一起算。",
  "建立初始安全垫": "先攒出一段不会被迫立即答应的时间。",
  "拆开四个变量": "分别评估城市、公司、岗位和直接领导。",
  "访问两座候选城市": "用真实的一天代替脑内想象。",
  "设置复盘日期": "给选择一个观察期，不必当天决定一辈子。",
  "拆解目标岗位": "收集职位描述，找出反复出现的要求。",
  "补一个短板": "只补会影响入场的那一项。",
  "完成一件公开作品": "让能力有一个别人看得见的载体。",
  "安排工作边界": "先决定哪些晚上和周末不被工作占用。",
  "保留一个兴趣": "选择不用证明价值也愿意做的事情。",
  "建立新城市关系网": "主动留下三个可以联系的人。",
  "读懂岗位反馈": "把情绪化评价翻译成可观察的工作要求。",
  "记录真实产出": "每周留下一条结果、一次反馈和一项学会的东西。",
  "决定磨合或离开": "设定继续投入的条件和停止等待的日期。",
  "算清必要支出": "知道自己一个月维持生活需要多少钱。",
  "停止高压负债": "优先处理会迅速压缩选择权的支出。",
  "建立选择资金": "按自己的责任和风险设置缓冲，不照抄固定数字。",
  "区分问题来源": "公司、岗位、领导、城市，可能只坏了其中一个。",
  "做一次外部访谈": "找真实从业者核对你对另一条路线的想象。",
  "设定离开条件": "明确出现哪些信号时，你就会行动。",
  "盘点工作样本": "列出真正由你完成、可以复述的项目。",
  "训练可迁移能力": "选择能跨公司、跨工具继续使用的能力。",
  "更新能力证明": "把结果整理成作品、案例或清楚的故事。",
  "修复基础状态": "先检查睡眠、吃饭、运动和持续疲惫。",
  "恢复固定联系": "把朋友和家人的联系写进日程。",
  "安排低成本支线": "给自己一个不靠工作反馈的小目标。",
  "盘点选择权": "列出你现在能去的岗位、行业和城市。",
  "比较三条路线": "继续、换岗、换行业，同时放到纸面上。",
  "带着筹码跳槽": "先准备案例、推荐人和可验证的结果。",
  "计算可停工时间": "用现金和必要支出估算自己能停多久。",
  "控制固定成本": "让房租和长期付款不要绑住所有选择。",
  "为试错留预算": "给学习、搬家或短暂停工留出明确额度。",
  "用周末试走": "先用小项目体验新路线的真实日常。",
  "验证新路线": "用交付、面试或付费结果代替自我感觉。",
  "再决定是否切换": "有了真实反馈，再选择投入规模。",
  "选择核心能力": "确定一项愿意连续积累两年的能力。",
  "完成真实项目": "解决一个真实问题，而不是只刷课程。",
  "形成个人定位": "让别人知道什么问题可以来找你。",
  "找到缺失支线": "判断你缺的是关系、身体、创造还是探索。",
  "安排固定投入": "每周给这条支线留出具体时段。",
  "三个月后复盘": "用感受和实际变化判断是否继续。",
  "看清五年后的角色": "观察这条路线继续走下去的日常，而非职位名。",
  "评估路线天花板": "看成长、收入、健康和自主性的交换关系。",
  "选择深耕或换轨": "确定未来一年主要积累在哪条线上。",
  "重算家庭责任": "把父母、伴侣、住房等责任放进现金计划。",
  "降低不可动开支": "减少让你无法暂停或迁移的长期承诺。",
  "增加收入选择": "培养不依赖当前公司的能力或客户来源。",
  "搭建第二条曲线": "在不辞职的情况下做一个小规模版本。",
  "取得外部反馈": "让市场、客户或真实招聘者给出信号。",
  "选择切换窗口": "根据资金、机会和身体状态决定时间。",
  "组合已有经验": "把行业知识、工具能力和沟通方式拼成组合。",
  "提炼解决的问题": "不要只报技能名，说清楚你能改变什么结果。",
  "建立可信案例": "用前后变化、过程和边界证明能力。",
  "补回长期关系": "为重要的人安排稳定而非临时的时间。",
  "恢复身体账户": "把体力和注意力当作长期资产管理。",
  "安排非工作目标": "让下一年不只有绩效和工资目标。"
};

const quests = [
  {
    id: "city",
    type: "main",
    level: "毕业前—第 2 年",
    title: "选择城市，不只比较工资",
    summary: "机会、房租、通勤、朋友和回家距离，会共同决定一份工作的真实体验。",
    lead: "城市不是工作地址，而是一套生活成本和机会结构。先拆开比较，再决定你愿意交换什么。",
    questions: ["这座城市能提供哪些下一步机会？", "扣除住房和通勤后，还剩多少可支配空间？", "如果工作不合适，你在这里还有没有支持网络？"],
    action: "选两座候选城市，各写一张“普通工作日账单”：住哪里、几点出门、花多少钱、晚上和谁见面。",
    source: "内容类型：决策框架 + 真实生活账本。后续将补充城市公共数据来源。"
  },
  {
    id: "first-job",
    type: "main",
    level: "毕业前—第 1 年",
    title: "筛选第一份工作的含金量",
    summary: "公司名字只是标签。每天做什么、谁反馈你、能留下什么，才会进入下一份简历。",
    lead: "第一份工作的价值，可以从工作内容、带教反馈、结果归属和市场认可四个方面判断。",
    questions: ["入职三个月后，你能独立完成什么？", "谁会看你的工作并给出具体反馈？", "如果一年后离开，你能带走哪些案例和能力？"],
    action: "把目标岗位的面试问题改成一张核对表，下次面试时至少问清工作内容、反馈方式和结果归属。",
    source: "内容类型：过来人经验。需要结合岗位、行业和个人条件判断。"
  },
  {
    id: "probation",
    type: "main",
    level: "第 0—1 年",
    title: "度过试用期，并留下证据",
    summary: "别等转正前才知道标准。主动确认预期，记录产出和反馈，也是在保护自己。",
    lead: "试用期既是公司观察你，也是你观察岗位。清楚标准、保存记录、及时复盘，比单纯加班更有用。",
    questions: ["转正由谁决定，依据是什么？", "目前哪些结果已经得到明确认可？", "这份工作与面试时描述是否一致？"],
    action: "写一封简短周报：本周完成什么、结果如何、下周做什么、需要谁确认。",
    source: "内容类型：工作方法。劳动规则部分将在正式版中引用当前官方信息。"
  },
  {
    id: "buffer",
    type: "main",
    level: "第 0—2 年",
    title: "建立属于你的安全垫",
    summary: "安全垫的意义不是一个统一数字，而是让你遇到变化时还有选择时间。",
    lead: "有人需要承担房租，有人需要照顾家人。安全垫应该根据必要开支、家庭支持和工作稳定性来设定。",
    questions: ["不工作时，你每月不可减少的支出是多少？", "遇到搬家、生病或失业，谁能提供支持？", "哪些长期付款正在压缩你的选择？"],
    action: "只做一件事：算出你过去三个月的平均必要支出，不急着给自己定一个漂亮目标。",
    source: "内容类型：个人财务整理框架，不构成投资建议。"
  },
  {
    id: "portable-skill",
    type: "main",
    level: "第 1—3 年",
    title: "获得一项可迁移能力",
    summary: "离开某个领导、工具或公司后仍然能用的能力，才会持续增加选择权。",
    lead: "工具会换，公司会变。可迁移能力通常表现为解决问题、理解行业、交付结果和与人协作。",
    questions: ["哪些能力换一家公司仍然有用？", "你能否拿出一个真实项目证明它？", "市场是否愿意为这项能力付钱？"],
    action: "从过去一年挑一个项目，用“问题—动作—结果—复盘”写成一页案例。",
    source: "内容类型：职业发展框架 + 个人案例整理。"
  },
  {
    id: "job-change",
    type: "main",
    level: "第 2—4 年",
    title: "完成一次有目的的跳槽",
    summary: "下一份工作应该增加一种选择权，而不只是换一个办公地点。",
    lead: "跳槽前先明确这次要换什么：收入、工作内容、行业机会、生活状态，还是成长速度。",
    questions: ["你想离开的到底是什么？", "下一份工作至少要增加哪一种选择权？", "如果新工作失败，你是否有退路？"],
    action: "写出三个“必须改变”和三个“可以妥协”，用它们筛选机会。",
    source: "内容类型：职业决策框架。"
  },
  {
    id: "life-system",
    type: "main",
    level: "第 0—5 年",
    title: "搭建工作之外的生活",
    summary: "如果所有反馈都来自工作，一次绩效变化就会像整个人生都失败了。",
    lead: "朋友、身体、兴趣和家庭不是等工作稳定后才开始的奖励，它们本身就是生活结构。",
    questions: ["除了同事，你现在固定联系的人有几个？", "有什么事即使没有成绩也愿意继续？", "目前的身体状态能否支撑三年后的工作？"],
    action: "选一条被搁置的生活支线，在日历上放进一个每周固定时段。",
    source: "内容类型：生活结构自查。"
  },
  {
    id: "ai",
    type: "side",
    level: "持续开放",
    title: "AI 工具支线",
    summary: "从一件重复工作开始，把AI变成能力放大器，而不是再学一套抽象术语。",
    lead: "先选择一个真实任务，再观察AI能否减少搜集、整理、制作或检查的时间。",
    questions: ["哪项工作每周都会重复？", "哪些步骤需要你的行业判断？", "怎样检查AI给出的结果？"],
    action: "挑一项本周肯定会发生的任务，记录原来用时，再让AI完成一次并比较。",
    source: "内容类型：工具实验。不同模型和软件能力会持续变化。"
  },
  {
    id: "side-project",
    type: "side",
    level: "第 1—5 年",
    title: "低成本副业试验",
    summary: "先验证有没有人需要，再决定要不要辞职、注册公司或投入大笔资金。",
    lead: "副业初期的目标不是把故事讲大，而是完成一次真实交付并收到外部反馈。",
    questions: ["你解决的是谁的什么问题？", "用户愿意用时间、推荐还是金钱表达需要？", "一次交付需要你投入多少时间？"],
    action: "把想法缩成一个七天内能交付的小版本，找到一个真实用户试用。",
    source: "内容类型：小规模验证方法。"
  },
  {
    id: "travel",
    type: "side",
    level: "随时开放",
    title: "旅行与探索支线",
    summary: "旅行不一定解决问题，但可以让你暂时离开原来的坐标系，看见别的生活方式。",
    lead: "不把旅行包装成逃离，也不要求它改变人生。它可以只是一段有边界的探索。",
    questions: ["你想休息、探索，还是验证一座城市？", "回来以后最需要处理的事情是什么？", "预算和时间的边界在哪里？"],
    action: "设计一次两天的小旅行，只安排一个主题，其余时间留白。",
    source: "内容类型：生活实验。"
  },
  {
    id: "portfolio",
    type: "side",
    level: "第 0—5 年",
    title: "个人作品与公开记录",
    summary: "简历只说你做过什么，作品能让别人直接看见你怎样思考和完成。",
    lead: "作品不只属于设计师和程序员。复盘、方案、研究、流程改进都可以变成可信案例。",
    questions: ["什么成果可以在不泄密的前提下展示？", "别人看完能理解你的作用吗？", "它是否证明了目标岗位需要的能力？"],
    action: "选择一项不涉密的工作，隐去公司信息，整理成一张过程图或一页复盘。",
    source: "内容类型：能力证明方法。"
  },
  {
    id: "family",
    type: "side",
    level: "第 2—5 年",
    title: "父母开始变老",
    summary: "从偶尔关心，慢慢转向了解他们的健康、数字安全和真实生活安排。",
    lead: "不必一次处理所有问题，可以先从信息整理和稳定联系开始。",
    questions: ["家人遇到紧急情况时应该联系谁？", "常用药、就诊信息和重要证件在哪里？", "父母会不会识别常见的支付和通信骗局？"],
    action: "和父母完成一次信息盘点，只记录紧急联系人、常用药和常去医院。",
    source: "内容类型：家庭信息整理。医疗事项需咨询专业人员。"
  },
  {
    id: "layoff",
    type: "boss",
    level: "突发事件",
    title: "突然被裁员",
    summary: "先处理现金、材料和节奏，再决定下一段人生，不需要当天证明自己没失败。",
    lead: "把突发事件拆成短期生存、权利确认、求职准备和状态恢复四部分。",
    questions: ["现有资金能支撑多久？", "合同、工资、工作记录是否已经保存？", "接下来两周哪些动作真正影响结果？"],
    action: "建立一个单独文件夹，保存合同、工资记录、沟通材料和个人工作成果证明。",
    source: "内容类型：应急整理框架。劳动权益以所在地当前官方规则为准。"
  },
  {
    id: "bad-manager",
    type: "boss",
    level: "高频关卡",
    title: "遇到持续打压的领导",
    summary: "不要只问自己够不够努力，先观察要求是否清楚、反馈是否稳定、环境是否允许改善。",
    lead: "判断重点不是给对方贴标签，而是确认具体行为、影响和你能够采取的边界。",
    questions: ["对方的要求是否具体并且前后一致？", "问题是否影响健康、评价或工作安全？", "内部转岗、上级沟通或外部机会是否存在？"],
    action: "连续两周只记录具体事件：时间、要求、你的回应和结果，暂时不写情绪结论。",
    source: "内容类型：工作环境记录与决策准备。"
  },
  {
    id: "unpaid",
    type: "boss",
    level: "紧急关卡",
    title: "工资延迟或被拖欠",
    summary: "先保存劳动关系和工资约定的证据，再通过所在地正规渠道了解处理方式。",
    lead: "这类问题需要尽快从口头催促转为材料整理，并核对当前所在地的官方办理渠道。",
    questions: ["劳动关系和工资标准能否被证明？", "拖欠涉及哪些月份和金额？", "所在地官方咨询与办理入口是什么？"],
    action: "整理劳动合同、工资流水、考勤、工作沟通和公司主体信息，保留原始文件。",
    source: "内容类型：材料整理提示，不替代法律意见。具体程序以官方信息为准。"
  },
  {
    id: "burnout",
    type: "boss",
    level: "慢性关卡",
    title: "对工作持续失去力气",
    summary: "疲惫可能来自工作量、失控感、价值冲突或身体状态，需要分别判断。",
    lead: "先停止把所有疲惫都解释成不够自律。观察它持续多久、出现在哪些场景、休息后是否缓解。",
    questions: ["休息以后是否明显恢复？", "哪些具体任务或关系消耗更大？", "这种状态是否已经影响睡眠、饮食和日常功能？"],
    action: "连续七天记录睡眠、体力和情绪变化。如果持续影响日常生活，考虑寻求专业帮助。",
    source: "内容类型：状态观察，不提供医学诊断。"
  },
  {
    id: "industry",
    type: "boss",
    level: "长期关卡",
    title: "所在行业开始收缩",
    summary: "别只判断行业会不会消失，先看你的能力还能迁移到哪些相邻问题。",
    lead: "行业变化时，可以分别处理现金流、现岗位风险、能力迁移和新路线验证。",
    questions: ["哪些客户需求仍然存在？", "你的能力能解决哪些相邻行业的问题？", "能否在不离职的情况下完成一次试验？"],
    action: "找三个已经从本行业转出的人，记录他们带走了什么能力、又补了什么。",
    source: "内容类型：职业迁移访谈框架。"
  },
  {
    id: "rent-scam",
    type: "boss",
    level: "生活关卡",
    title: "租房出现异常",
    summary: "对方催促付款、身份和房源关系不清、合同口头变动时，先暂停转账并核验。",
    lead: "租房问题往往发生在时间紧张时。越被催促，越需要核对身份、权属、合同和付款对象。",
    questions: ["出租人、收款人和房屋权利人是否一致？", "合同中的费用、期限和退租条件是否清楚？", "重要承诺是否写进合同或留有记录？"],
    action: "在付款前把房源关系、对方身份、收款账户和合同关键条款逐项核对。",
    source: "内容类型：风险检查清单。具体争议处理以所在地官方渠道为准。"
  }
];

const guideQuests = Array.isArray(window.GUIDE_CONTENT) && window.GUIDE_CONTENT.length ? window.GUIDE_CONTENT : quests;

let currentStage = localStorage.getItem("life-guide-stage") || "pregrad";
let currentPriority = localStorage.getItem("life-guide-priority") || "job";
let currentFilter = "main";
let currentSearch = "";

const stageChoices = document.querySelectorAll("[data-stage]");
const priorityChoices = document.querySelectorAll("[data-priority]");
const tabs = document.querySelectorAll("[data-filter]");
const routeSummary = document.querySelector("#routeSummary");
const routeLine = document.querySelector("#routeLine");
const questGrid = document.querySelector("#questGrid");
const questDialog = document.querySelector("#questDialog");
const questSearch = document.querySelector("#questSearch");
const questCount = document.querySelector("#questCount");

function syncChoices() {
  stageChoices.forEach((button) => button.classList.toggle("active", button.dataset.stage === currentStage));
  priorityChoices.forEach((button) => button.classList.toggle("active", button.dataset.priority === currentPriority));
}

function renderRoute() {
  routeSummary.textContent = stages[currentStage].summaries[currentPriority];
  const currentRoute = routes[currentStage][currentPriority];
  routeLine.innerHTML = currentRoute
    .map(
      (title, index) => `
        <article class="route-step">
          <span class="step-number">0${index + 1}</span>
          <h3>${title}</h3>
          <p>${routeDescriptions[title]}</p>
        </article>
      `
    )
    .join("");
}

function getTypeMeta(type) {
  if (type === "side") return { label: "SIDE QUEST", color: "var(--cyan)" };
  if (type === "boss") return { label: "BOSS", color: "var(--danger)" };
  return { label: "MAIN QUEST", color: "var(--accent)" };
}

function renderQuests() {
  const keyword = currentSearch.trim().toLowerCase();
  const filtered = guideQuests.filter((quest) => {
    if (quest.type !== currentFilter) return false;
    if (!keyword) return true;
    const searchable = [
      quest.title,
      quest.summary,
      quest.lead,
      quest.veteran,
      ...(quest.questions || []),
      ...(quest.pitfalls || [])
    ]
      .join(" ")
      .toLowerCase();
    return searchable.includes(keyword);
  });

  questCount.textContent = keyword ? `找到 ${filtered.length} 个相关关卡` : `共 ${filtered.length} 个关卡`;
  questGrid.innerHTML = filtered
    .map((quest) => {
      const meta = getTypeMeta(quest.type);
      return `
        <article class="quest-card" tabindex="0" role="button" data-quest-id="${quest.id}" style="--card-color: ${meta.color}">
          <div class="card-top">
            <span class="quest-type">${meta.label}</span>
            <span class="quest-level">${quest.level}</span>
          </div>
          <h3>${quest.title}</h3>
          <p>${quest.summary}</p>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </article>
      `;
    })
    .join("");

  if (!filtered.length) {
    questGrid.innerHTML = `
      <div class="empty-result">
        <strong>这张地图里暂时没有找到相关关卡</strong>
        <p>可以换个关键词，或者切换主线、支线和 Boss 战。</p>
      </div>
    `;
  }
}

function openQuest(id) {
  const quest = guideQuests.find((item) => item.id === id);
  if (!quest) return;
  const meta = getTypeMeta(quest.type);
  document.querySelector("#dialogMeta").textContent = `${meta.label} · ${quest.level}`;
  document.querySelector("#dialogTitle").textContent = quest.title;
  document.querySelector("#dialogLead").textContent = quest.lead;
  document.querySelector("#dialogVeteran").textContent = quest.veteran || quest.summary;
  document.querySelector("#dialogStory").innerHTML = (quest.story || [quest.lead])
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  document.querySelector("#dialogOptions").innerHTML = (quest.options || [])
    .map(
      (option) => `
        <article class="option-card">
          <header><h4>${option.name}</h4><span>适合：${option.fit}</span></header>
          <p><strong>代价：</strong>${option.cost}</p>
          <p><strong>提醒：</strong>${option.warning}</p>
        </article>
      `
    )
    .join("");
  document.querySelector("#dialogQuestions").innerHTML = (quest.questions || []).map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#dialogPitfalls").innerHTML = (quest.pitfalls || []).map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#dialogChecklist").innerHTML = (quest.checklist || []).map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#dialogAction").textContent = quest.action;
  document.querySelector("#dialogSource").textContent = quest.source;
  questDialog.showModal();
}

stageChoices.forEach((button) => {
  button.addEventListener("click", () => {
    currentStage = button.dataset.stage;
    localStorage.setItem("life-guide-stage", currentStage);
    syncChoices();
    renderRoute();
  });
});

priorityChoices.forEach((button) => {
  button.addEventListener("click", () => {
    currentPriority = button.dataset.priority;
    localStorage.setItem("life-guide-priority", currentPriority);
    syncChoices();
    renderRoute();
  });
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

questDialog.addEventListener("click", (event) => {
  if (event.target === questDialog) questDialog.close();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  currentStage = "pregrad";
  currentPriority = "job";
  localStorage.removeItem("life-guide-stage");
  localStorage.removeItem("life-guide-priority");
  syncChoices();
  renderRoute();
  document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
});

syncChoices();
renderRoute();
renderQuests();
