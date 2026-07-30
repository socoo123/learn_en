# 英语学习笔记本 · 首页堆叠块 + 学习打卡改造计划

> 本文是改造计划，供用户审阅优化后再实施。现状内容提取自 `CLAUDE.md`，
> 交互与存储设计模仿 `~/ai_web_page/algorithm_pratices_web`（算法刷题网站）。

---

## 一、现状提取（来自 CLAUDE.md，改造前确认）

| 项 | 现状 |
|----|------|
| 技术栈 | React + Vite 纯前端，无后端；样式在 `src/styles.css`（CSS 变量主题） |
| 数据 | 全部课程在 `src/data/lessons.js` 的 `LESSONS` 数组，前端按 `date` 倒序排 |
| 布局 | 左侧 `Sidebar.jsx` 年/月/日树形目录 + 中间 `LessonView.jsx` 阅读区 + 右侧 `Annotations.jsx` 标注栏 |
| 持久化 | localStorage `en_reader_v2`：只存 UI 偏好（当前课程、主题、中文展开、侧栏开关），**没有学习进度概念** |
| 动画 | 已装 `framer-motion`，侧栏展开/收起、课程切换都在用 |
| 界面偏好 | 浅色主题为主、高对比、科技感、电光蓝主色、等宽字体标签 |

**要解决的痛点**：课程越积越多后，无法一眼看出"哪些学过了、这个月还差几篇"，也没有完成正向反馈。

---

## 二、改造目标（用户原话拆解）

1. **首页 = 堆叠的块，依次展开**：默认进入首页，月与月堆叠成卡片块（如「2026年7月」），点开块看到当月每一天的文章列表。
2. **localStorage 存一个进度文件**：模仿 algorithm_pratices_web 的 `progress.json` 设计——版本化 JSON、逐条带时间戳、可导出/导入。
3. **当天内容学完可勾选**：每篇文章一个 ✓ 勾选框，代表"已完成"。
4. **整月勾完 = 月完成**：该月块显示完成态，**默认不再展开**（仍可手动点开回看）。

---

## 三、进度数据模型（模仿 algorithm_pratices_web）

参考 `algorithm_pratices_web/src/lib/progress-store.ts` 与 `src/hooks/useProgress.tsx`，做 English Reader 的简化版（每课只有一个 done 标记，没有三遍打卡和笔记）。

### 3.1 存储结构

新增独立 key，与现有 UI 偏好（`en_reader_v2`）分开：

```
localStorage["en_reader_progress"] = {
  "version": 1,
  "updatedAt": "2026-07-30T12:00:00.000Z",
  "lessons": {
    "2026-07-26": { "done": true, "updatedAt": "2026-07-30T12:00:00.000Z" }
  }
}
```

设计要点（全部沿用算法项目的模式）：

- **`version: 1`**：结构升级时做迁移判断，版本不符就丢弃回退空进度。
- **按 lesson `id` 记录**（不是 date，因为同一天可能有多篇 `日期-2`）。
- **取消勾选 = 删除该 key**（等价于算法项目的 `hasContent` 检查），保持文件最小；未记录的课程默认未完成。
- **每条带 `updatedAt`**：合并时逐条 last-write-wins（`mergeProgress` 同款逻辑）。
- **读写全部 try/catch**：localStorage 损坏/满时回退空进度，不让白屏。

### 3.2 导出 / 导入（进度跟文件走）

沿用算法项目的 `downloadProgress` / `parseImportedProgress`：

- 首页右上角放「导出进度」「导入进度」两个按钮，下载/上传 `en-progress.json`。
- 导入时用 `mergeProgress(local, imported)` 按 `updatedAt` 逐条合并，不会覆盖掉更新的记录。
- 目的：换浏览器/换电脑/清缓存后进度可恢复（这是长期学习工具，进度比 UI 偏好值钱）。

### 3.3 React 封装

新增 `src/hooks/useProgress.jsx`（Context + Provider，结构照抄算法项目）：

```js
const { isDone, setDone, monthStats, totalStats, exportProgress, importProgress } = useProgress()
// isDone(lessonId) -> boolean
// setDone(lessonId, checked) -> 立即写 localStorage
// monthStats -> { "2026-07": { done: 3, total: 10, complete: false }, ... }
// totalStats -> { done, total }
```

- `commit` 时同步 `setState` + 写 localStorage（算法项目还有 400ms 防抖写服务器，我们纯前端，直接同步写即可）。
- `monthStats` 由 `LESSONS` 按 `date.slice(0, 7)` 分组派生，**不单独存月状态**——月完成永远是计算结果，不会出现数据不一致。

---

## 四、首页设计：堆叠月块

### 4.1 整体结构（两视图架构）

```
App
├── view = "home"   → <Home/>          首页：堆叠块（默认）
└── view = "lesson" → 现有三栏阅读布局   点某天进入
```

- 首次打开默认进首页；阅读页工具栏的「☰ 目录」按钮改为「返回首页」。
- 记住上次 view 与 currentId（写进现有 `en_reader_v2`），刷新后回到上次位置。

### 4.2 首页布局

顶部：标题区（沿用现在的品牌「📖 英语笔记本」）+ 总进度条（`totalStats.done/total`）+ 导出/导入按钮 + 搜索框（吸收现有侧栏搜索能力，搜索时跨月过滤并自动展开命中的块）。

主体：居中单列（约 720px），**按年分组、月块堆叠**，新的在上：

```
2026
┌────────────────────────────────────┐
│ ▸ 2026年7月 · JUL        3/10 ▓▓░░ │  ← 月块（未完成，默认展开）
│   ├─ ✓ 07-26  会议英语：推迟会议…   │
│   ├─ □ 07-27  邮件：跟进项目进展…   │
│   └─ □ 07-28  TED：如何学会…       │
├────────────────────────────────────┤
│ ✓ 2026年6月 · JUN       12/12 ▓▓▓▓ │  ← 已完成月：默认收起 + 绿色✓徽章
└────────────────────────────────────┘
```

**月块头部**：chevron + `2026年7月 · JUL`（等宽字体英文标签，沿用现有 `MONTH_EN` 风格）+ 进度 `done/total` + 迷你进度条。
**日条目**：勾选框 + `07-26` 日期 + 中文标题 + 来源 tag（会议/TED/邮件…），已完成的标题变灰加删除线弱化。

### 4.3 展开/收起规则（核心逻辑）

| 情况 | 默认状态 |
|------|----------|
| 当前月未完成 | **展开** |
| 已完成的月（当月全部勾完） | **收起**，头部显示 ✓ 完成徽章 |
| 当前月刚好全部完成 | 自动收起，并展开**最近一个未完成的月** |
| 用户手动点开/收起某月 | 会话内记住手动状态，**手动优先于默认规则** |
| 全部课程都完成 | 所有月收起，顶部显示 🎉 全部完成态 |

- 展开/收起动画复用 `framer-motion` 的 `AnimatePresence`（高度 0→auto），和现在侧栏一致。
- 新课程加进一个"已完成"的月 → 该月自动变回未完成、恢复默认展开（因为月完成态是实时计算的，天然正确）。

### 4.4 视觉风格

遵循 CLAUDE.md 偏好：浅色底、电光蓝主色、高对比。月块 = 圆角卡片 + 细边框，hover 轻微上浮 + 蓝色辉光（算法项目 dark 卡的浅色版）。勾选框定制样式：蓝色描边、勾上后蓝底白 ✓、放大 1.1 倍弹跳（参考 `RoundCheckboxes.tsx` 的 peer-checked 做法，用 CSS 变量实现）。

---

## 五、勾选完成的三个入口

1. **首页日条目勾选框**：点 ✓ 切换完成（`stopPropagation`，不跳转进课程）。
2. **阅读页工具栏**：加「✓ 完成本课 / 已完成 ↩」切换按钮——读到文末觉得学完了顺手勾，不用回首页。
3. **日条目点击**：进入该课阅读视图（勾选与跳转是两个独立热区）。

---

## 六、文件改动清单

| 文件 | 动作 | 说明 |
|------|------|------|
| `src/lib/progress-store.js` | **新增** | STORAGE_KEY、load/save、mergeProgress、导出/导入/校验 |
| `src/hooks/useProgress.jsx` | **新增** | ProgressProvider + useProgress()，派生 monthStats/totalStats |
| `src/components/Home.jsx` | **新增** | 首页：年分组 + 月块堆叠 + 日条目 + 搜索 + 总进度 + 导出导入 |
| `src/components/ProgressBits.jsx` | **新增** | DoneCheckbox（✓勾选框）+ MiniBar（迷你进度条）两个小组件 |
| `src/App.jsx` | 改 | 包 ProgressProvider；加 view 状态（home/lesson）切换 |
| `src/components/LessonView.jsx` | 改 | 工具栏：「☰ 目录」→ 返回首页；新增「✓ 完成本课」按钮 |
| `src/components/Sidebar.jsx` | **删除** | 导航职责被首页取代；搜索能力并入首页 |
| `src/styles.css` | 改 | 月块、日条目、勾选框、迷你进度条、完成徽章样式（全部走 CSS 变量，深浅色都适配） |
| `CLAUDE.md` | 改（完成后） | 见 §八 |

> 不做的事：不引入 react-router（两个视图用 state 切换足够）；不加后端写文件中间件（纯前端约束不变，导出/导入 JSON 已覆盖换机需求）。

---

## 七、实施步骤（按序执行）

1. `progress-store.js`：存储读写 + 合并 + 导入导出，纯函数，先写可自测。
2. `useProgress.jsx`：Provider 封装 + 派生统计。
3. `ProgressBits.jsx`：勾选框 + 迷你进度条（纯展示，先做样式）。
4. `Home.jsx`：堆叠块首页 + 展开规则 + 搜索。
5. `App.jsx` 接线：view 切换、Provider、`en_reader_v2` 增加 view 字段。
6. `LessonView.jsx`：返回首页 + 完成本课按钮。
7. 删除 `Sidebar.jsx`，清理引用。
8. `styles.css`：新样式 + 深色主题适配。
9. 自测清单：勾选刷新后还在 / 勾完全月自动收起 / 新课程插入已完成月后该月复活 / 导出→清空→导入进度恢复 / 搜索命中自动展开。
10. 更新 `CLAUDE.md`（§八），收尾。

---

## 八、完成后同步更新 CLAUDE.md 的点（§五 技术备忘）

- 持久化变为两个 key：`en_reader_v2`（UI 偏好 + 当前视图）、`en_reader_progress`（学习进度，结构见本计划 §3.1）。
- 组件清单更新：`Sidebar.jsx` 删除；新增 `Home.jsx`（首页堆叠块）、`ProgressBits.jsx`、`useProgress.jsx`、`progress-store.js`。
- 首页展开规则一句话写进备忘（未完成月默认展开、完成月默认收起、手动状态会话内优先）。
- 「添加新课程流程」不变，仍追加 `LESSONS` 即可（进度按 id 关联，加课无需动进度文件）。

---

## 九、待用户确认的决策点

1. **侧栏去留**：本计划用首页完全取代侧栏（导航 + 搜索都并入首页）。如果想在阅读页保留快速切课的侧栏，可以保留 `Sidebar.jsx` 并给它也加上勾选框——工作量略增。
2. **完成是否需要子项**：目前是"整课一个 ✓"。如果想更细（如 生词✓ 语法✓ 练习✓ 三个子勾，全勾才算完成），数据模型要从 `done: boolean` 升级为 `rounds` 式数组，建议先做单勾跑起来，后续再扩。
3. **完成标准纯手动**：勾选完全由用户手动点，不做"看完练习自动勾"之类的隐式完成——避免进度失真。
