# Hogwarts

一个基于 Astro 7 的哈利波特主题静态站点，适合用作魔法学院风格的博客、影评站、角色档案或世界观资料库起点。

## 功能

- 首页首屏、主题预览、文章入口、学院卡片和咒语目录。
- 文章归档页与文章详情页，演示内容集中维护在 `src/data/theme.ts`。
- 四大学院主题色切换，按钮位于导航栏，并使用 `localStorage` 记住用户选择。
- 学院专题页支持点击学院名称或整张卡片打开弹窗，展示学院介绍和主要人物。
- 学院卡片使用官方风格垂挂旗徽图片，资源放在 `public/assets/house-badges/`。
- 响应式布局，适配桌面和移动端。

## 技术栈

- Astro 7
- TypeScript
- 原生 CSS
- 静态构建输出

## 快速开始

```bash
npm install
npm run dev
```

默认开发地址通常为：

```text
http://localhost:4321/
```

如果需要指定端口：

```bash
npm run dev -- --host 127.0.0.1 --port 4322
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`：启动本地开发服务器。
- `npm run build`：生成静态站点到 `dist/`。
- `npm run preview`：预览构建后的静态站点。

## 页面

- `/`：首页，包含 Hero、主题预览、最新文章、学院入口和咒语列表。
- `/blog/`：文章归档页。
- `/blog/[slug]/`：文章详情页，由 `posts` 数据静态生成。
- `/houses/`：学院专题页，支持卡片弹窗。
- `/spells/`：咒语目录页。

## 目录结构

```text
.
├── astro.config.mjs
├── package.json
├── public
│   ├── favicon.svg
│   └── assets
│       ├── magical-hall-hero.png
│       └── house-badges
│           ├── gryffindor-official-banner.png
│           ├── hufflepuff-official-banner.png
│           ├── ravenclaw-official-banner.png
│           └── slytherin-official-banner.png
└── src
    ├── components
    ├── data
    ├── layouts
    ├── pages
    └── styles
```

## 内容修改

主要演示数据位于 `src/data/theme.ts`：

- `site`：站点标题、描述和导航。
- `themeOptions`：四大学院主题按钮和颜色。
- `posts`：文章列表和文章详情内容。
- `houses`：学院名称、配色、旗徽、介绍和主要人物。
- `spells`：咒语目录条目。

修改这里的数据后，首页、文章页、学院页和咒语页会自动同步更新。

## 样式修改

全站样式集中在 `src/styles/global.css`。常用调整位置：

- `:root` 和 `html[data-theme="..."]`：全站色彩变量与学院主题色。
- `.site-header`：顶部导航和主题切换按钮。
- `.hero`：首页首屏背景和排版。
- `.house-card`、`.house-dialog`：学院卡片与弹窗。
- `.post-card`：文章卡片。

## 资源说明

- `public/assets/magical-hall-hero.png`：首页和内页 Hero 背景。
- `public/assets/house-badges/*.png`：四大学院垂挂旗徽图片。

学院旗徽素材来自 HarryPotter.com 官方页面资源，仅作为主题演示使用；正式发布或商业使用前请确认素材授权边界。

## 构建

```bash
npm run build
```

构建完成后，静态文件会输出到 `dist/`。
