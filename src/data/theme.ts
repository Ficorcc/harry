export const site = {
  title: "Harry Potter Astro Theme",
  description: "A cinematic Astro 7 theme for wizarding blogs, fan archives, and spellbound reading rooms.",
  nav: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/blog/" },
    { label: "学院", href: "/houses/" },
    { label: "咒语", href: "/spells/" },
  ],
};

export const themeOptions = [
  {
    id: "gryffindor",
    name: "Gryffindor",
    cn: "格兰芬多",
    colors: ["#7f1d1d", "#d8a845"],
  },
  {
    id: "slytherin",
    name: "Slytherin",
    cn: "斯莱特林",
    colors: ["#064e3b", "#c8c8c8"],
  },
  {
    id: "ravenclaw",
    name: "Ravenclaw",
    cn: "拉文克劳",
    colors: ["#1e3a8a", "#b08d57"],
  },
  {
    id: "hufflepuff",
    name: "Hufflepuff",
    cn: "赫奇帕奇",
    colors: ["#d6a21f", "#191714"],
  },
];

export const posts = [
  {
    slug: "first-night-at-the-castle",
    title: "抵达城堡的第一个夜晚",
    date: "2026-08-12",
    category: "校园札记",
    excerpt: "穿过黑湖的雾气之后，灯火、长桌和会自己翻页的旧书一起出现。",
    readingTime: "4 min",
    accent: "emerald",
    body: [
      "午夜的城堡总像一本没有合上的书。走廊里有蜡烛悬着，肖像低声交换消息，石阶偶尔把人送到完全不同的楼层。",
      "这个主题把首页做成一间会发光的阅读室：深色背景负责神秘感，羊皮纸色块负责可读性，少量金色用来提示重点。",
      "你可以把这里替换成真实博客、影评、同人设定集、观影笔记或角色档案。结构保持轻量，方便继续接入 Astro Content Collections。",
    ],
  },
  {
    slug: "daily-prophet-layout-notes",
    title: "把预言家日报做成现代博客",
    date: "2026-08-09",
    category: "主题设计",
    excerpt: "复古报纸气质不等于牺牲可读性，版式应该像魔法一样克制。",
    readingTime: "6 min",
    accent: "burgundy",
    body: [
      "这套版式没有直接复制电影物料，而是提取了几个更可控的设计语言：窄栏文字、旧纸纹理、铜金边线和较高的信息密度。",
      "文章卡片使用清晰的分类、日期和摘要，适合做资讯流、书评归档或角色专题。",
      "如果要做更完整的主题包，可以继续加入标签页、搜索、RSS、分页和多作者信息。",
    ],
  },
  {
    slug: "spellbook-component-system",
    title: "一本咒语书式的组件系统",
    date: "2026-08-04",
    category: "组件",
    excerpt: "按钮、标签、卡片、页脚和英雄区都保持同一种魔法学院语气。",
    readingTime: "5 min",
    accent: "gold",
    body: [
      "主题的组件拆得比较直接：基础布局负责页面框架，数据文件负责演示内容，页面只负责组合。",
      "这样的结构适合主题起步阶段。你可以很快修改色彩、替换图片，或者把演示数据迁移到 Markdown 内容文件。",
      "真正的魔法来自维护性：当一个主题足够好改，它就会被反复使用。",
    ],
  },
];

export const houses = [
  {
    id: "gryffindor",
    name: "Gryffindor",
    cn: "格兰芬多",
    motto: "勇气、胆识与热烈的心",
    colors: ["#7f1d1d", "#d8a845"],
    emblemUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/gryffindor-shield.jpg",
    sourceUrl: "https://www.hp-lexicon.org/thing/gryffindor-house/shield_01-5b1-5d/",
    summary:
      "格兰芬多由戈德里克·格兰芬多创立，重视勇气、胆识、决心与骑士精神。学院颜色是猩红与金色，象征动物是狮子，公共休息室位于格兰芬多塔楼。",
    details: [
      "这个学院适合敢于站出来、愿意保护他人、遇到困难时先行动起来的人。",
      "格兰芬多与斯莱特林长期保持强烈竞争关系，但也与其他学院有大量合作与友谊。",
    ],
    people: [
      { name: "Harry Potter", role: "以勇气和选择定义自己的学生，后来成为对抗伏地魔的核心人物。" },
      { name: "Hermione Granger", role: "聪慧、勤奋且极有原则，是格兰芬多勇气与理性的结合。" },
      { name: "Ron Weasley", role: "忠诚、幽默，在关键时刻总会回到朋友身边。" },
      { name: "Albus Dumbledore", role: "格兰芬多出身的传奇巫师，曾任霍格沃茨校长。" },
    ],
  },
  {
    id: "slytherin",
    name: "Slytherin",
    cn: "斯莱特林",
    motto: "野心、策略与清醒的目标感",
    colors: ["#064e3b", "#c8c8c8"],
    emblemUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/slytherin-shield.jpg",
    sourceUrl: "https://www.hp-lexicon.org/thing/slytherin-house/shield_sly/",
    summary:
      "斯莱特林由萨拉查·斯莱特林创立，重视野心、机敏、资源整合与自我证明。学院颜色是绿色与银色，象征动物是蛇，公共休息室位于城堡地下湖附近的地牢区域。",
    details: [
      "斯莱特林常被误解，但它真正突出的气质是目标感、策略意识和对成就的渴望。",
      "这个学院的人往往懂得审时度势，也更在意声望、传统和长远利益。",
    ],
    people: [
      { name: "Severus Snape", role: "斯莱特林院长之一，复杂、克制，人生选择充满矛盾与牺牲。" },
      { name: "Draco Malfoy", role: "出身纯血家族，骄傲而敏感，是学院声望压力的代表。" },
      { name: "Merlin", role: "传说中的伟大巫师，也被列为著名斯莱特林。" },
      { name: "Horace Slughorn", role: "擅长经营人脉的魔药课教授，曾多次担任斯莱特林院长。" },
    ],
  },
  {
    id: "ravenclaw",
    name: "Ravenclaw",
    cn: "拉文克劳",
    motto: "智慧、好奇心与锋利的审美",
    colors: ["#1e3a8a", "#b08d57"],
    emblemUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/shield_rav.jpg",
    sourceUrl: "https://www.hp-lexicon.org/thing/ravenclaw-house/shield_rav/",
    summary:
      "拉文克劳由罗伊纳·拉文克劳创立，重视智慧、学习、机智与独立思考。学院颜色是蓝色与青铜色，象征动物是鹰，公共休息室位于拉文克劳塔楼。",
    details: [
      "拉文克劳鼓励学生保持好奇心，也允许他们拥有古怪、独立甚至不合群的一面。",
      "学院入口以谜题代替口令，正好体现它对思考能力的偏爱。",
    ],
    people: [
      { name: "Luna Lovegood", role: "独特、敏锐且忠于自我，是拉文克劳式自由精神的代表。" },
      { name: "Filius Flitwick", role: "霍格沃茨魔咒课教授与拉文克劳院长，温和而学识深厚。" },
      { name: "Cho Chang", role: "拉文克劳学生与魁地奇找球手，曾加入邓布利多军。" },
      { name: "Gilderoy Lockhart", role: "曾任黑魔法防御术教授，以名声和记忆咒闻名。" },
    ],
  },
  {
    id: "hufflepuff",
    name: "Hufflepuff",
    cn: "赫奇帕奇",
    motto: "忠诚、耐心与可靠的温柔",
    colors: ["#d6a21f", "#191714"],
    emblemUrl: "https://www.hp-lexicon.org/wp-content/uploads/2015/08/hufflepuff-shield.jpg",
    sourceUrl: "https://www.hp-lexicon.org/thing/hufflepuff-house/shield_huf/",
    summary:
      "赫奇帕奇由赫尔加·赫奇帕奇创立，重视勤劳、耐心、忠诚与公平。学院颜色是黄色与黑色，象征动物是獾，公共休息室靠近霍格沃茨厨房。",
    details: [
      "这个学院看重可靠、善良和脚踏实地，不需要用锋芒来证明自己。",
      "赫奇帕奇也以较少产生黑巫师而闻名，整体气质更偏温暖、稳定和包容。",
    ],
    people: [
      { name: "Cedric Diggory", role: "三强争霸赛勇士，正直、受欢迎，也体现了学院的公平精神。" },
      { name: "Newt Scamander", role: "神奇动物学家，以温柔、耐心和对生命的尊重闻名。" },
      { name: "Nymphadora Tonks", role: "傲罗与易容马格斯，活泼、勇敢，是凤凰社成员。" },
      { name: "Pomona Sprout", role: "草药课教授与赫奇帕奇院长，务实且照顾学生。" },
    ],
  },
];

export const spells = [
  { incantation: "Lumos", cn: "荧光闪烁", use: "用于点亮页面里的关键行动按钮。" },
  { incantation: "Accio", cn: "飞来咒", use: "用于快速召唤文章、分类和归档入口。" },
  { incantation: "Alohomora", cn: "阿拉霍洞开", use: "用于打开隐藏导航、专题页面和阅读空间。" },
  { incantation: "Protego", cn: "盔甲护身", use: "用于保护布局在移动端不崩掉。" },
];
