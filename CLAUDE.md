# CLAUDE.md — 英语学习笔记本

本项目是一个 React + Vite 的中英对照英语学习网站，用户（学习者）长期用它积累真实材料来提升英语。
**每次会话开始时，先读本文件；细则与现状清单见 `PLAN.md`。**

---

## 一、学习者画像

- **背景**：外企工作约 6 年。
- **现状**：能听懂基本英语会议，多数时候需要英文字幕；口语弱；**词汇偏弱**；长期「不上不下」。
- **目标**：把「能看懂」提升到「能用出来」；中期瞄准稳 **B2**（约 4～8 个月，每天有效学习 ~2 小时）。
- **界面偏好**：浅色主题、高对比、科技感（电光蓝、等宽标签）。
- **练法习惯**：尚雯婕精听——**每一分钟材料投入超过 1 小时**（精听→跟读→复述）。
- **难度节奏**：循序渐进；用户觉得太简单时会明确要求「多加点句子 / 加难」——再加长或提高密度，不要擅自猛抬难度。

选词与选材偏向：**软件开发 IT（教程 / 技术文 / 论文导读）+ 职场场景英语（活动邮件、调查表、日常商务交流）**；会议 / 邮件 / 跨文化 / 短语动词 / 地道表达优先，不是考试词。

---

## 二、你要持续做的事（清空上下文后仍照此执行）

### A. 尚雯婕学习法（精听）

用户给 YouTube 字幕 / `.srt` / 文稿（约 10–20 分钟）时：

1. 按停顿拆成约 **1 分钟/份**（可略有长短）。
2. **每份必须带 `timeRange`**（如 `00:04–01:11`），方便对照视频。
3. 自动字幕要对照公开讲稿**修正明显 ASR 错误**。
4. 写入：
   - `src/data/series.js`：系列元数据 + **完整 `analysis`**（适听水平、总词数、对用户生词、学完能做什么、详情 sections）
   - `src/data/shadow/<系列>.js`（或追加 `lessons.js`）：多条 `kind:"shadow"`
5. 标题：`库克斯坦福演讲 01`；首页显示日期 + 标题 + **视频时间段**。
6. 每份含：`passage` / `core` / `vocab` / `grammar` / `quiz`。

**已有系列**：`cook-stanford-2019`（Tim Cook 2019 斯坦福毕业典礼，17 份，约 18 分钟）→ `src/data/shadow/cook-stanford-2019.js`。

### B. 每日英语阅读

用户说「生成今日阅读」时：

1. **加权选题**（见下），约 **400 词**（±50）、预计 3–5 分钟；难度锚定 **`2026-08-08-reading`（Nadella 篇）**：句式清楚、可复用块多、少堆俚语/哲理——用户明确说「按这一篇水平刚刚好，能力提升前不要自行拔高」。
2. 追加 `kind:"reading"` + `stats: { words, newWords, minutes }`；vocab 宜偏多（技术词 + 职场块都标）。
3. 完整 vocab + quiz；文末有难度反馈 UI。
4. **三月清理**：删掉早于「当前月 − 3」的 reading；shadow **不删**。

**选题权重（2026-08-09 起）**：约 **60% IT/软件开发**（教程、工程实践文、论文/RFC 导读改写——为日后直接读论文铺路）+ **30% 职场场景英语**（活动邀请邮件、调查表/问卷文案、日常商务往来、会议跟进）+ **10%** 其余池（生活 / 体育 / 经济 / 名人·推特 / 名著）。均匀随机七类已废弃。

### C. 难度反馈 → 调选材 + 更新评估

- 文末：好读 / 刚好 / 难读 + 文字备注 → 写入 **`data/learner-progress.json`**（dev 自动保存）。
- 用户说「今天的反馈你看看」→ **打开并阅读** `data/learner-progress.json` 的 `feedback.reading`，然后：
  1. 调整后续阅读难度/类别
  2. 更新 `src/data/assessment.js`（含 `cefr`）
- 难读偏多 → 降难度；好读偏多 → 升难度；结合备注主题偏好。
- 换电脑：`git pull` 该 JSON 即带回进度；学完记得 `git add data/learner-progress.json && commit/push`。

### D. 补生词（真实盲区）

用户贴不认识的词 → 补进对应课 `vocab`（必要时 `core`）；未指明则补**最近一课**；不要为此新建一课。

### E. 水平评估页

- 右上角「个人评估」→ `AssessmentView`：当前评估 + CEFR 对照表（`src/data/cefr-levels.js`）。
- 问水平时要诚实、具体；与 `assessment.js` 保持一致。

---

## 三、课时字段速查

| 字段 | 说明 |
|------|------|
| `kind` | `"shadow"` \| `"reading"` |
| `seriesId` / `part` / `timeRange` | 仅 shadow；`timeRange` 必填 |
| `durationMin` / `stats` | 预计分钟；reading 另有 words/newWords/minutes |
| `passage` / `core` / `vocab` / `grammar` / `quiz` | 同以往 |

写完后**一两句话**告知用户新增了什么。HMR 会自动刷新。

---

## 四、技术备忘

- 启动：`npm run dev` → http://127.0.0.1:5850 ；构建：`npm run build`。
- 数据：`lessons.js` · `series.js` · `assessment.js` · `cefr-levels.js` · `shadow/*.js`。
- **学习进度真源**：[`data/learner-progress.json`](data/learner-progress.json)（勾选、难度、备注、反馈）。
  - `npm run dev` 时经 `/api/progress` 自动读写；换电脑：`git pull` 即带进度。
  - 用户说「今天的反馈你看看」→ **直接读该 JSON**，不必等粘贴（仍可复制作备份）。
  - 同时写一份 localStorage 缓存；主题仍只存 `en_reader_v2`。
- **URL**：`/` · `/lesson/:id` · `/series/:id` · `/assessment`
- 选择题 `answer`：下标或选项原文均可。
- 细则：`PLAN.md`。用户向导：`README.md`。
