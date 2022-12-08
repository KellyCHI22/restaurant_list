# My Restaurant List 我的餐廳清單

## 💡 Overview 介紹

專屬於你的餐廳清單！使用者可以瀏覽餐廳、查看詳細資訊、甚至連結到地圖

### ⚙️ Features 功能

- 在首頁可查看所有餐廳的資訊，包含餐廳名稱、類別及評分
- 點擊餐廳可看見該餐廳的詳細資訊，例如地址、電話、餐廳描述等資訊
- 點擊餐廳地址旁邊的圖示可打開該餐廳的 Google 地圖頁面
- 在首頁，使用者可用中文、英文以及類別名稱搜尋餐廳
- 若搜尋輸入為空白，會顯示「請輸入正確關鍵字」提示使用者
- 若查無符合關鍵字的結果，會隨機推薦三個餐廳給使用者

### 👀 Screenshots 頁面截圖
#### 首頁
![](public/screenshots/screenshot_index.jpg)
#### 顯示餐廳頁面
![](public/screenshots/screenshot_show.jpg)
#### 隨機推薦餐廳
![](public/screenshots/screenshot_suggestion.jpg)

## 🚀 Getting Started 開始使用

⚠️ **請先確認電腦中已安裝 node.js 與 npm！**

1. 將專案 clone 到本地：

```bash
$ git clone "https://github.com/KellyCHI22/restaurant_list.git"
```
2. 在本地開啟之後，透過終端機進入資料夾，輸入：

```bash
$ npm install
```

3. 安裝完畢後，繼續輸入：

```bash
$ npm run start
```

4. 若看見此訊息代表程式已順利運行，打開瀏覽器輸入網址：`http://localhost:3000` 即可進入網站

```bash
Express is listening on localhost:3000
```

5. 若要暫停使用，可在終端機入入以下指令：

```bash
ctrl + c
```
## ✅ What I learned 學習重點
* 用 Express 建立一個簡單的網路應用程式
* 讀取 JSON 檔案，將種子資料載入應用程式
* 把資料帶入 handlebars 樣板中動態呈現
* 操作 handlebars 中的 each 迴圈呈現出多張餐廳卡片
* 應用 params 打造動態路由
* 用 Query String 打造搜尋功能
* 優化搜尋功能：剔除多餘的空白、搜尋沒有結果時也有對應頁面提示


## 💻 Technologies 開發環境與工具

- Node.js 14.16.0
- Express 4.16.4
- Express-Handlebars 3.0.0
- Nodemon 2.0.20
- Bootstrap 5.1.3
- Font-awesome 5.8.1