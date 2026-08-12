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
    name: "Gryffindor",
    cn: "格兰芬多",
    motto: "勇气、胆识与热烈的心",
    colors: ["#7f1d1d", "#d8a845"],
  },
  {
    name: "Slytherin",
    cn: "斯莱特林",
    motto: "野心、策略与清醒的目标感",
    colors: ["#064e3b", "#c8c8c8"],
  },
  {
    name: "Ravenclaw",
    cn: "拉文克劳",
    motto: "智慧、好奇心与锋利的审美",
    colors: ["#1e3a8a", "#b08d57"],
  },
  {
    name: "Hufflepuff",
    cn: "赫奇帕奇",
    motto: "忠诚、耐心与可靠的温柔",
    colors: ["#d6a21f", "#191714"],
  },
];

export const spells = [
  { incantation: "Lumos", cn: "荧光闪烁", use: "用于点亮页面里的关键行动按钮。" },
  { incantation: "Accio", cn: "飞来咒", use: "用于快速召唤文章、分类和归档入口。" },
  { incantation: "Alohomora", cn: "阿拉霍洞开", use: "用于打开隐藏导航、专题页面和阅读空间。" },
  { incantation: "Protego", cn: "盔甲护身", use: "用于保护布局在移动端不崩掉。" },
];
