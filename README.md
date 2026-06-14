# Sound Vessel 展示網頁

一個為「聲紋食器-敲肉排聲音視覺化」影片量身打造的高質感展示網頁，採用極簡暗黑美學與自適應響應式設計，非常適合直接託管在 GitHub Pages 上供他人瀏覽。

## 專案功能與設計更動
- **極致影片壓縮**：原始影片 `visualizedCirle02.mov` (約 217MB) 已成功轉換並壓縮為相容網頁的 `visualizedCirle02_compressed.mp4` (約 29.9MB)，在維持高品質 960x960 圓形視覺的同時，降低了 86% 以上的檔案大小，確保順暢的網路載入體驗。
- **無邊框自適應排版 (Borderless Responsive Layout)**：移除影片的外框，並使用 CSS 視窗比例單位 `vmin` 設計。播放器會自動感應螢幕的寬度與高度，並自動調整為最合適的尺寸展示，在大螢幕或手機直式螢幕上皆能置中完美呈現。
- **背景自動循環播放**：啟用 `autoplay`、`muted`、`loop` 與 `playsinline` 屬性，讓影片在進入網頁時即可自動開始無縫循環播放。
- **頁面右下角點擊靜音切換**：將聲音開關鍵改至網頁視窗右下角（亦可直接點擊影片），點擊即可在「靜音 / 有聲」之間自由切換。
- **呼吸感環境背光**：播放時，影片背景會帶有微微擴散、脈動的霓虹氛圍燈效果，提升視覺深度。

## 檔案說明
- `visualizedCirle02_compressed.mp4`: 壓縮後的網頁相容 MP4 影片檔案。
- `index.html`: 語意化 HTML5 架構，專注於極簡自適應影片展示。
- `styles.css`: 包含全自適應排版、背景脈動氛圍燈及懸浮靜音按鈕的樣式設計。
- `script.js`: 控制點擊影片或按鈕進行「播放靜音切換」的極簡互動邏輯。

---

## 如何部署至 GitHub Pages 🚀

請按照以下簡單步驟將此網頁發佈到網路上：

1. **建立 GitHub 儲存庫 (Repository)**：
   - 前往 [GitHub](https://github.com/) 登入您的帳號。
   - 點擊右上角 **+** 號並選擇 **New repository**。
   - 將儲存庫命名（例如：`visualized-circle`），設為 **Public**，然後點擊 **Create repository**。

2. **上傳檔案**：
   - 在您的本機目錄中開啟終端機，執行以下 Git 指令：
     ```bash
     git init
     git add .
     git commit -m "Initial commit with compressed video and player"
     git branch -M main
     git remote add origin https://github.com/您的帳號名稱/您的儲存庫名稱.git
     git push -u origin main
     ```
   - *或者，您也可以直接在 GitHub 網頁上選擇 **uploading an existing file**，並將資料夾內的所有檔案（`index.html`、`styles.css`、`script.js`、`visualizedCirle02_compressed.mp4`）拖曳上傳。*

3. **啟用 GitHub Pages**：
   - 進入 GitHub 專案頁面，點選右上角的 **Settings** (設定)。
   - 在左側選單中尋找並點選 **Pages**。
   - 在 **Build and deployment** 下方的 **Branch**，選擇 `main` 分支並將資料夾設為 `/ (root)`。
   - 點選右側的 **Save** 儲存。

4. **完成發佈**：
   - 稍等約 1~2 分鐘，重新整理該頁面，您會在上方看到一條綠色提示：`Your site is live at https://您的帳號名稱.github.io/您的儲存庫名稱/`。
   - 點擊該連結即可線上瀏覽並分享您的影片展示網頁！
