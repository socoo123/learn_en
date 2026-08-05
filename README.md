# 英语学习笔记本 · English Reader

React + Vite 中英对照英语学习站。首页分两块：**尚雯婕精听**（按分钟拆视频）+ **每日短文阅读**（带难度反馈）。

Agent 工作流与清空上下文后的任务清单见：

- **`CLAUDE.md`** — 每次会话必读（画像 + 要做什么）
- **`PLAN.md`** — 现状清单、数据模型、日常任务细则

---

## 学习者画像

- 外企约 6 年；会议常靠英文字幕；口语与词汇偏弱
- 目标：能看懂 → 能用出来；中期瞄准稳 **B2**
- 偏好：浅色、高对比、科技感界面
- 精听习惯：每一分钟材料投入 **1 小时以上**

> **补词**：遇到「不认识但词表没收」的词，直接贴给 Claude，会补进对应课并作为水平信号。

---

## 怎么打开

```bash
cd /Users/zy/ai_learn/learn_en
npm install        # 只第一次
npm run dev        # http://127.0.0.1:5850/
```

加课靠改 `src/data/`，Vite HMR 会自动刷新。构建：`npm run build` → `dist/`。

---

## 界面怎么用

| 入口 | 作用 |
|------|------|
| **尚雯婕学习法** | 按系列展开；每份约 1 分钟；显示 **视频时间段**；右侧有材料分析 |
| **每日英语阅读** | 按月列表；近 3 个月；短文 + 生词 + 练习 |
| **右上角「个人评估」** | 打开 `/assessment`：当前水平 + A1～C2 对照表；可复制近期阅读反馈 |
| **阅读页** | 地址形如 `/lesson/2026-08-06-reading`；中英对照、练习；可用浏览器后退回首页 |
| **勾选 / 导出导入** | 打卡进度存在浏览器；可导出 `en-progress.json` |

键盘：阅读页 `←` `→` 同类型上下课（URL 同步变），`Esc` 回首页。浏览器后退/前进同样可用。

---

## 怎么加材料（跟 Claude 说）

| 你说 | Claude 做 |
|------|-----------|
| 给 `.srt` / 文稿 /「拆这段精听」 | 按 ~1 分钟拆份 + 时间戳 + 系列分析 |
| 「生成今日阅读」 | 从选题池随机一篇短文（IT/商务/生活/体育/经济/名人/名著…） |
| 「今天的反馈你看看」+ 粘贴复制内容 | 更新水平评估、调整以后选材 |
| 贴一个生词 | 补进对应课词表 |

---

## 文件结构（节选）

```
learn_en/
├── CLAUDE.md / PLAN.md / README.md
├── src/
│   ├── App.jsx
│   ├── styles.css
│   ├── data/
│   │   ├── lessons.js              # 合并精听 + 阅读
│   │   ├── series.js               # 系列 + 分析
│   │   ├── assessment.js           # 个人评估
│   │   ├── cefr-levels.js          # 等级说明
│   │   └── shadow/
│   │       └── cook-stanford-2019.js
│   ├── components/                 # Home, LessonView, AssessmentView…
│   ├── hooks/useProgress.jsx
│   └── lib/progress-store.js
└── package.json
```

### 当前已有内容

- **精听**：库克 2019 斯坦福毕业典礼演讲 · 17 份（约 18 分钟）
- **阅读**：示例短文 *how to learn Claude Code*

---

## 进度存在哪

- UI 偏好：`localStorage["en_reader_v2"]`
- 打卡 + 阅读反馈：`localStorage["en_reader_progress"]`（可导出/导入）

---

_下次直接把字幕路径或「生成今日阅读」丢过来即可。_
