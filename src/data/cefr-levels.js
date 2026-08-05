/**
 * CEFR 等级说明（自评对照）
 * 面向外企工作场景：听会 / 读材料 / 说与写，而不是考试分数。
 */
export const CEFR_LEVELS = [
  {
    id: 'A1',
    name: '入门',
    title: 'A1 · 入门',
    canDo: [
      '认识极常见单词和简单招呼',
      '能看懂非常短的标识、表格字段',
      '口语只能蹦单词或背过的短句',
    ],
    workScene: '外企场景几乎无法独立跟会；需要全程中文或翻译。',
  },
  {
    id: 'A2',
    name: '初级',
    title: 'A2 · 初级',
    canDo: [
      '能听懂极慢、极简单的日常对话大意',
      '能读短邮件里最直白的一句请求',
      '能做自我介绍、约时间等固定表达',
    ],
    workScene: '会议基本听不懂；邮件只能处理模板句。',
  },
  {
    id: 'B1',
    name: '中阶',
    title: 'B1 · 中阶（工作英语入门可用）',
    canDo: [
      '带字幕时能跟上常规会议大意，但仍常卡词',
      '能读懂中等长度工作邮件 / 短文的主旨',
      '能做简单汇报，但表达偏生硬、词汇不够用',
    ],
    workScene:
      '「能应付」但不上不下：听靠字幕，说靠准备，写要反复查词。本站当前默认评估落在这一档附近。',
  },
  {
    id: 'B1+',
    name: '中阶偏上',
    title: 'B1+ · 中阶偏上',
    canDo: [
      '无字幕也能抓到会议主线，细节仍会漏',
      '能较顺畅读 IT / 商务短文，生词可控',
      '能在会上插话补充观点，但不够地道',
    ],
    workScene: '日常协作基本能扛；公开演讲、快语速讨论仍吃力。',
  },
  {
    id: 'B2',
    name: '中高阶',
    title: 'B2 · 中高阶（独立工作英语）',
    canDo: [
      '多数工作会议可无字幕跟进，偶发术语需确认',
      '能读较长文章与文档，抓住论点与隐含态度',
      '能主持小会、写结构清晰的邮件与简报',
    ],
    workScene: '跨团队协作较稳；复杂谈判、幽默/文化梗仍可能丢分。',
  },
  {
    id: 'C1',
    name: '高阶',
    title: 'C1 · 高阶',
    canDo: [
      '能跟上快语速、多口音讨论，并做准确复述',
      '能读专业长文、名著节选，抓住语气与修辞',
      '表达灵活：能辩论、说服、即兴调整说法',
    ],
    workScene: '接近「工作母语使用者」体验；细微语域差异仍可精进。',
  },
  {
    id: 'C2',
    name: '接近母语',
    title: 'C2 · 接近母语',
    canDo: [
      '几乎任意真实材料都能轻松理解',
      '能欣赏文体差异，主动使用地道习语与幽默',
      '听说读写在专业与日常场景都很少受限',
    ],
    workScene: '外企场景完全自如；本站目标通常不必追到这一档。',
  },
]

/** Map assessment.cefr / range text → level id for highlight */
export function resolveCefrId(assessment) {
  if (!assessment) return null
  if (assessment.cefr) return assessment.cefr
  const text = `${assessment.level || ''} ${assessment.range || ''}`
  const order = ['C2', 'C1', 'B2', 'B1+', 'B1', 'A2', 'A1']
  for (const id of order) {
    if (text.includes(id)) return id
  }
  return null
}
