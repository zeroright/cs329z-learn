# CS329Z 自学站 — iOS App Store 上架指南

## 方案

Capacitor 8 + WKWebView，整站打包进 `ios/App/App/public/`，本地运行、离线可用，进度/笔记/掌握度仍走 localStorage。

## 本机已生成内容

- `capacitor.config.json` — appId `com.zeroright.CS329Zlearn`，webDir `www`
- `ios/` — Xcode 工程（`ios/App/App.xcodeproj`）
- `www/` — 站点镜像（sync 时自动更新）

## 在 Mac 上打包步骤

1. 安装 Xcode 16+ 与 CocoaPods/SPM 依赖。
2. `cd E:\ai_product\projects\cs329z-learn`
3. `npm ci && npx cap sync ios`（把 `www/` 最新内容拷进 `ios/App/App/public/`）
4. `npx cap open ios` 或 `open ios/App/App.xcodeproj`
5. Xcode → App target → Signing & Capabilities → 选你的 Team（Personal Team 可免费装到本机；上架需付费开发者账号 $99/年）
6. Bundle ID 已设 `com.zeroright.CS329Zlearn`；改版本号 `MARKETING_VERSION` 与 `CURRENT_PROJECT_VERSION`
7. 模拟器选 iPhone 16 Pro 跑一遍验证首页/讲次/课堂/掌握度
8. Product → Archive → Distribute App → App Store Connect → 上传

## App Store Connect 元数据（可直接填）

- **名称**：CS329Z 自学站
- **副标题**：CS329Z AI Agents 自学
- **关键词**：AI agents,CMU,LLM,自学,强化学习,coding agent
- **类别**：教育（Education）
- **年龄分级**：4+（含网页链接与课程资料，需在问卷中如实勾选）
- **支持 URL**：`https://github.com/zeroright/cs329z-learn`
- **隐私政策 URL**：见 `appstore/privacy.html`（需托管到 GitHub Pages 或你的域名后填链接）

## 截图建议（6.7"/6.5"/5.5" 各 3-5 张）

1. 学习总览首页（继续学习 + 讲次）
2. 某讲讲义页（L01，含幻灯卡片）
3. 互动课堂覆盖层（4 幕进度条）
4. 掌握度面板（统计条 + 左表右栏）
5. 学习路径页

## 隐私营养标签（App Privacy）

- **不收集任何数据**（Data Not Collected）
- localStorage 仅本地；无账号、无追踪、无第三方分析
- YouTube 外链点击才离开应用，需在审核说明里写明

## 审核注意点

- 应用含外部 YouTube 链接：在 App Review Information 里说明「课程录像链接，用户主动点击」。
- 首次上传要求填「出口合规」：已设 `ITSAppUsesNonExemption=false`，选「No」即可。
- 免费应用 + 无内购 + 无广告，审核风险低。
- 若被拒因「最低功能」：强调原生课程结构、离线笔记、掌握度追踪、间隔复习，不只是网页壳。

## 打包脚本

`scripts/build-ios.ps1` 一键完成 copy + sync 提示（Windows 侧只能到 sync 这步，Archive 必须在 Mac）。
