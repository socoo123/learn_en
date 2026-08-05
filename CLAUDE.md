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

选词与选材偏向：**会议 / 邮件 / 跨文化 / 短语动词 / 地道表达**，不是考试词。

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

1. 从选题池**随机抽一类**（见下），约 400–700 词、预计 2–5 分钟。
2. 追加 `kind:"reading"` + `stats: { words, newWords, minutes }`。
3. 完整 vocab + quiz；文末有难度反馈 UI。
4. **三月清理**：删掉早于「当前月 − 3」的 reading；shadow **不删**。

选题池：① IT/数码 ② 商务英语 ③ 生活常识 ④ 运动比赛 ⑤ 经济 ⑥ 名人采访/演讲/推特风 ⑦ 名著短摘。

### C. 难度反馈 → 调选材 + 更新评估

- 文末：好读 / 刚好 / 难读 + **文字备注** → 存 localStorage。
- 用户点「复制近期反馈」并说「今天的反馈你看看」→ 读备注与难度，然后：
  1. 调整后续阅读难度/类别
  2. 更新 `src/data/assessment.js`（含 `cefr`: A1|A2|B1|B1+|B2|C1|C2）
- 难读偏多 → 降难度；好读偏多 → 升难度；结合备注里的主题偏好。

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
- 数据：`lessons.js`（合并 shadow 模块 + reading）· `series.js` · `assessment.js` · `cefr-levels.js` · `shadow/*.js`。
- **URL 路由**（浏览器前进/后退可用）：
  - `/` 首页
  - `/lesson/:id` 课时（如 `/lesson/2026-08-06-reading`）
  - `/series/:id` 系列分析
  - `/assessment` 个人评估
- localStorage：`en_reader_v2`（theme/zhMode）· `en_reader_progress` v2（done / difficulty / note / feedback）。
- 上下课只在同一 `kind` 内切换，并更新 URL。
- 选择题 `answer` 可以是**选项下标**（推荐）或选项原文；`Quiz.jsx` 两种都认。
- 细则：**`PLAN.md`**。用户向导：**`README.md`**。
