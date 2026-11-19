# CS329Z Engineering AI Agents 自学教学网站

**在线访问**：<https://zeroright.github.io/cs329z-learn/>

纯静态站点：用浏览器打开 `index.html`，或在仓库根目录起一个静态服务器。讲次正文在 `data/lectures/L01.js` … `L20.js`，每个讲次页只加载自己的那一篇。

## 本地运行

```bash
cd cs329z-learn
python -m http.server 8765
# 访问 http://127.0.0.1:8765/
```

## 学习体验

- 首页集中显示继续学习与全部讲次；学习路径页选择系统学习 / 工程实践 / 产品与交付三条路线。
- 实践中心进入课程作业、综合项目、机制实验与源码对照；论文、术语和搜索在资源菜单中。
- `learning-lab.html` 提供采样与验证、工具反馈、GRPO 优势三个自编交互实验，无需 API。
- 讲次页通过学习指南进入阅读、实验、自测和实践；阅读进度与阶段交付物分别记录在浏览器中。

## 资料源

- 官方课程站与课表来源：<https://www.cs329z.stanford.edu>
- 中文讲义素材仓库：<https://github.com/xbsheng/cmu-agents>
- YouTube Playlist：<https://www.youtube.com/playlist?list=PLSN0qpDfUvTM>
- 自编练习/自测/闪卡/综合项目均标注「自编」
- Pyodide 代码运行需能访问 jsDelivr CDN（本地 server 模式）

## 幻灯配图来源与版权

本站讲次页中的幻灯缩略图来自 **CS329Z AI Agents** 官方公开幻灯（PDF 逐页渲染为 ≤1344px WebP），仅供个人学习与复习。

- 版权归原作者 / 授课方（CS329Z / Diyi Yang / Michael Ryan）。
- 每张配图附信用语「CS329Z 课程幻灯 · 版权归原作者」，并链回官方 slides PDF。
- 请勿二次分发为商业素材；如需正式课件请以官方渠道为准。
## OpenMAIC / DeepTutor 思路补充（2026-11-17）

新增三个模块，全部本地存储，无需 Docker：

- `classroom.html` — 互动课堂：每讲 4 幕（讲→问→做→回忆），借鉴 OpenMAIC 的课堂节奏；可切换讲次，作答与选择存 localStorage。
- `mastery.html` — 掌握度面板：28 个知识点按讲分组，0-4 级自评，间隔复习（1/3/7/21 天）与待补强清单，借鉴 DeepTutor 的 mastery path。
- `notion-pack/` — 15 讲 Markdown 补充页 + `plan.md` 总览，可直接复制/导入 Notion；每讲含互动课堂脚本、知识点自评表、引导问题、复习待办。

数据文件：`data/tutor.js`（知识点图谱 + 掌握度模型）、`data/classroom.js`（课堂场景）。导航已加入「互动课堂」「掌握度」。

未运行 OpenMAIC / DeepTutor 本体：本机无 Docker，本模块仅借鉴其产品逻辑，在静态站内实现等效学习闭环。
