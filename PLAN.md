# 英语学习笔记本 · 运营与改造手册（PLAN）

> **给下次会话的 Agent / 自己**：先读 `CLAUDE.md`，再读本文「现状清单 + 日常任务」。  
> 本文是当前真实方案与待续工作的单一事实来源（SoT），不是过期草稿。

**最后更新**：2026-08-06

---

## 0. 一句话产品形态

双区英语笔记本：

1. **尚雯婕学习法** — 长听力拆成 ~1 分钟/份，精听精读打卡（每分钟材料用户会练 1 小时+）。
2. **每日英语阅读** — 短文 + 生词 + 练习 + 难度/文字反馈，按反馈抬难度；首页只显示近 3 个月。

目标水平：当前约 **B1～B1+** → 稳 **B2**（粗估每天有效 2 小时、约 4～8 个月）。

---

## 1. 现状清单（已落地）

### 1.1 首页与视图（带 URL）

| URL | 说明 |
|------|------|
| `/` | 双区首页 |
| `/lesson/:id` | 课时阅读（可收藏 / 浏览器后退） |
| `/series/:id` | 系列分析详情 |
| `/assessment` | 个人评估 + CEFR 对照 |

- 使用 `react-router-dom`（BrowserRouter）；点击导航会改地址栏，浏览器前进/后退正常。
- 已去掉首页「总进度」；评估在 `/assessment`。
- 选择题答案：`answer` 为选项下标或选项字符串均可（`Quiz.jsx` 兼容）。

### 1.2 已有内容

| 类型 | 内容 |
|------|------|
| shadow 系列 | **库克斯坦福演讲** `cook-stanford-2019`：17 份，视频约 00:04–17:38，预计 30 天学完 |
| 数据文件 | `src/data/shadow/cook-stanford-2019.js` + `series.js` 中 analysis |
| reading | 示例 1 篇：`2026-08-06 how to learn Claude Code` |

每份精听课带 **`timeRange`**（首页与课文页均展示「视频 mm:ss–mm:ss」）。

### 1.3 反馈与评估

- 阅读文末：好读 / 刚好 / 难读 + 文字备注 →「提交反馈」→ `en_reader_progress`。
- 评估页可「复制近期反馈」；用户说「今天的反馈你看看」→ 更新 `assessment.js`（含 `cefr`）并调选材。
- CEFR 说明表：`src/data/cefr-levels.js`（A1 / A2 / B1 / B1+ / B2 / C1 / C2）。

### 1.4 关键数据文件

```
src/data/
  lessons.js              # 合并 COOK_STANFORD_LESSONS + reading
  series.js               # 系列元数据 + analysis
  assessment.js           # 当前水平评估（Agent 维护）
  cefr-levels.js          # 等级对照文案
  shadow/
    cook-stanford-2019.js # 17 份精听
```

---

## 2. 日常任务清单（按用户指令执行）

### 2.1 「生成今日阅读」

1. 从选题池随机一类（IT / 商务 / 生活 / 体育 / 经济 / 名人·推特 / 名著）。
2. 写 `kind:"reading"`，约 400–700 词，`stats` + vocab + quiz。
3. 看近期反馈调难度；必要时清理 3 个月前的 reading。

### 2.2 「拆这段精听 / 给了 .srt」

1. 解析字幕，按 ~1 分钟切分；修正 ASR。
2. 每份填 `timeRange`、中英 `passage`、core/vocab/quiz。
3. 更新 `series.js`（含 analysis）+ `shadow/<id>.js`，并在 `lessons.js` import。
4. 告知用户：系列名、份数、时间范围、预计学完周期。

### 2.3 「今天的反馈你看看」

1. 根据用户粘贴的反馈 / 备注更新判断。
2. 改 `assessment.js`（`cefr` / `level` / `summary` / `strengths` / `focus` / `basedOn` / `updatedAt`）。
3. 简短回复新评估；记下选材偏好供下次阅读使用。

### 2.4 用户贴生词

补进对应课 vocab（默认最近一课）；不要新建一课。

### 2.5 「我现在什么水平 / 多久到 B2」

对照评估页与反馈诚实回答；B2 粗估见 CLAUDE 画像（勿空泛鼓励）。

---

## 3. 数据模型（速查）

### shadow

```
kind: "shadow"
seriesId, part: "01", timeRange: "00:04–01:11", durationMin: 1
passage, core, vocab, grammar, quiz
```

### reading

```
kind: "reading"
stats: { words, newWords, minutes }
passage, core, vocab, grammar, quiz
# 文末 DifficultySurvey：difficulty + note
```

### series.analysis

`suitableFor` · `totalWords` · `newWordsEst` · `gains[]` · `summary` · `sections[{heading,body}]`

### progress（localStorage `en_reader_progress` v2）

```
lessons[id]: { done?, difficulty?, note?, updatedAt }
feedback.reading: { easy, ok, hard, recent[{id,difficulty,note?,at}] }
assessment?: 可选覆盖 assessment.js
```

---

## 4. 首页结构（目标 UI）

```
[个人评估]  [主题] [导出] [导入]     ← 右上角

尚雯婕学习法
  目标：…
  ▸ 2026-08-06 库克斯坦福演讲（18分，预计一个月学完）  n/17
       □ … 01    视频 00:04–01:11
       …                              | 右侧：材料分析 → 详情

每日英语阅读
  目标：…
  ▸ 2026-08
       □ 2026-08-06 title（词汇x，生词y，预计z分钟）
```

---

## 5. 组件与持久化

| 文件 | 职责 |
|------|------|
| `Home.jsx` | 双区首页 |
| `AssessmentView.jsx` | 个人评估 + 等级表 |
| `SeriesAnalysisView.jsx` | 系列分析详情 |
| `DifficultySurvey.jsx` | 阅读反馈提交 |
| `LessonView.jsx` | 阅读区；展示 timeRange |
| `useProgress.jsx` / `progress-store.js` | 进度与反馈 |

- `en_reader_v2`：currentId, seriesId, theme, zhMode, view  
- `en_reader_progress`：打卡 + 难度备注 + feedback  

启动：`npm run dev` → http://127.0.0.1:5850  

---

## 6. 已知待续 / 可演进（未做也可先记）

- [ ] 更多精听系列（用户再给字幕时按 §2.2 追加）
- [ ] 阅读选题按反馈**加权随机**（现在是均匀随机 + 人工调难度）
- [ ] 精听课也可选加「跟读检查」类练习（若用户要求）
- [ ] README 用户向导与本 PLAN 同步（见 README）
- [ ] 可选：挂音频/视频链接到 timeRange（用户若需要再做）

---

## 7. 变更摘要（本轮已完成的改造）

1. 双区首页 + shadow/reading 数据模型  
2. 阅读难度三档 + 文字备注 + 复制反馈  
3. 个人评估独立页 + CEFR 全表  
4. 系列右侧分析 + 详情页  
5. 库克演讲 17 段精听 + 视频时间戳  
6. 三月滚动清理规则（reading）  

清空上下文后：**读 CLAUDE.md → 读本 PLAN §1–§2 → 按用户最新一句话执行。**
