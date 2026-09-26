# 毕业五年人生通关指南

[![内容检查](https://github.com/oneChloe/graduate-life-guide/actions/workflows/validate.yml/badge.svg)](https://github.com/oneChloe/graduate-life-guide/actions/workflows/validate.yml)
[![代码许可：MIT](https://img.shields.io/badge/代码许可-MIT-2f6f5e.svg)](./LICENSE)
[![文字许可：CC BY 4.0](https://img.shields.io/badge/文字许可-CC%20BY%204.0-d79a35.svg)](./LICENSE-CONTENT)

写给即将毕业，以及离开校园零到五年的年轻人。

它不是一份标准答案，也不是把人生做成升级打怪的待办清单。它更像一张由过来人共同补完的地图：当你站在找工作、选城市、跳槽、转行、裁员、租房、关系和家庭这些路口时，可以先看看别人走过什么弯路、付出过什么代价，再决定自己的下一步。

在线阅读：<https://graduate-five-year-guide.blitezero.chatgpt.site>

## 现在有什么

- 4 个职业阶段存档与 5 类当前困境
- 16 条主线、10 条生活支线和 11 场突发 Boss 战
- 37 篇可以独立阅读、引用与投稿补充的 Markdown 关卡
- 关卡搜索、路线推荐、独立分享链接和前后翻页
- 长关卡内目录、阅读进度，以及直达 Markdown 原文和单关纠错入口
- 只保存在当前浏览器的收藏、已读进度与继续阅读
- 劳动、社保、租房和心理援助等高风险主题的官方核验入口
- 投稿、纠错、自动检查、更新记录和公开治理规则

每个关卡不只给结论，而是尽量回答十三个问题：

1. 这段经验适合谁，又不适合谁？
2. 为什么很多人会卡在这里？
3. 怎样判断自己真正卡在什么地方？
4. 常见路线分别适合谁？
5. 每条路线需要付出什么？
6. 过来人见过哪些坑？
7. 今天、七天内和三十天内可以分别做什么？
8. 哪些反例或另一面容易被忽略？
9. 哪些内容是个人经验，哪些事实需要官方来源？
10. 一个真实场景里，这些问题通常怎样发生？
11. 已知事实、主观猜测和不可逆成本分别是什么？
12. 怎样跟关键人开口，以及三十天后怎样复盘？
13. 如果现在不适合做大决定，怎样安全地等待并观察？

## 怎样阅读

如果你正在一个明确路口，可以直接搜索“Offer”“转行”“裁员”或“租房”。如果你只是感到混乱，可以在首页选择毕业阶段和当前困境，让页面先给出一条起步路线。

读任何一关时，建议先看“适用范围”和“怎么判断自己卡在哪”，再比较路线。清单不是作业，三阶段行动也不是标准进度；它们只是帮你从抽象焦虑里多拿回一点可验证的信息。

## 内容原则

这个项目受到[《上海交通大学学生生存手册》](https://github.com/SurviveSJTU/SurviveSJTUManual)和[《高性价比人生指南》](https://github.com/eternity4719/HowToLiveBetter)的启发，但不复制它们的正文或条目。

我们借鉴的是两种编辑方法：

- 过来人把自己的背景、偏见、弯路和后来改变的判断讲清楚。
- 把投入、可能得到的结果、证据强弱、适用条件与反例分开写。

这里不会把某一种人生包装成正确答案。每篇内容都应该写明适用条件、现实代价、停止信号和可能的退出方式。涉及劳动、社保、医疗、法律和金融时，个人经验不能替代当前规则或专业意见。完整标准见[内容规范](./docs/内容规范.md)和[资料来源与核验记录](./docs/资料来源.md)。

## 项目结构

```text
content/
├── main/                 16 条职业主线，Markdown 原稿
├── side/                 10 条生活支线，Markdown 原稿
├── boss/                 11 场突发关卡，Markdown 原稿
└── SUMMARY.md            自动生成的全书目录

dist/
├── index.html            页面结构
├── styles.css            视觉样式
├── app.js                搜索、路线、收藏与阅读交互
├── guide-content.js      由 Markdown 自动生成，不直接修改
└── guide-sources.js      官方资料与核验日期

docs/                     投稿模板、内容规范与资料记录
scripts/
├── build-content.mjs     把 Markdown 生成网页数据与目录
└── validate-content.mjs  检查关卡结构、链接和资料完整性
```

这是一个不依赖后端的静态网页。本地查看：

```bash
python3 -m http.server 4173 --directory dist
```

然后访问 `http://127.0.0.1:4173/`。

修改 `content/` 里的关卡后，依次运行：

```bash
node scripts/build-content.mjs
node scripts/validate-content.mjs
```

提交前还可以用 `node scripts/build-content.mjs --check` 确认网页数据与 Markdown 原稿完全同步。

## 怎样参与

不会 GitHub 也可以参与。直接使用仓库里的[经验投稿](https://github.com/oneChloe/graduate-life-guide/issues/new?template=experience.yml)或[纠错](https://github.com/oneChloe/graduate-life-guide/issues/new?template=correction.yml)表单，维护者会协助匿名整理。

如果你愿意直接修改内容，请阅读[参与共建](./CONTRIBUTING.md)和[投稿模板](./docs/投稿模板.md)。我们尤其需要：

- 不同城市、行业、教育背景和家庭责任下的真实经历
- 看起来不光鲜，却对后来很有帮助的选择
- 一条路线失败、停止或撤回时发生了什么
- 能帮助后来者判断的具体问题、数字、信号和检查清单
- 对过时规则、失效链接与不准确概括的纠正

所有贡献都会经过隐私、事实和适用边界检查。项目如何决策、如何成为维护者以及分歧如何处理，见[治理规则](./GOVERNANCE.md)。敏感的隐私或安全问题请按[安全报告说明](./SECURITY.md)私下提交，不要放进公开 Issue。

## 开源许可

这是一个“代码与内容双许可”的开源项目：

- 网页代码、脚本和配置采用 [MIT License](./LICENSE)。
- `content/`、`docs/`、README 与网页中的原创文字采用 [CC BY 4.0](./LICENSE-CONTENT)。转载或改编时请注明项目名称、仓库链接和是否做过修改。
- 第三方链接、项目名称及被引用材料仍归各自权利人所有，详见 [NOTICE](./NOTICE.md)。

提交贡献即表示你有权提交这些内容，并同意按对应许可公开。请勿复制没有授权的书籍、课程、帖子或其他项目正文。

## 版本状态

当前版本为 **0.4.0**。这是可公开共建的手册与静态网页，不是咨询服务。收藏和已读数据只存放在用户当前浏览器，不上传服务器。章节仍会继续加入署名或匿名贡献者的行业、城市、毕业年限和路线结果，让读者更容易判断一段经验是否适合自己。

版本变化见 [CHANGELOG](./CHANGELOG.md)；研究、课程或公共项目引用方式见 [CITATION.cff](./CITATION.cff)。
