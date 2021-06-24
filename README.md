## 簡介 Brief Introduction
偵測伺服器收到請求狀態的紀錄middleware。


## 功能說明 Functions 
- 伺服器收到請求時，會在server log上印出收到需求的時間、HTTP的請求方法以及執行耗時(從需求到回覆需求的時間長度，單位為毫秒)。

## 環境建置與需求 Prerequisites
- 開發環境 Visual Studio Code v1.56.2
- 執行環境 Node.js v10.15.0
- 框架 Express.js v4.17.1

## 安裝與執行步驟 Installation and Execution
1.在本機電腦備妥欲存放的資料夾，在該資料夾開啟 Terminal執行clone複製指令
```
git clone https://github.com/dbw-studio/AC_S2-3_Middleware.git
```

2.進入專案資料夾
```
cd AC_S2-3_Middleware
```

3.安裝套件
```
npm i -y
```

4.啟動伺服器執行
```
npm run dev
```

5.當Terminal出現提示 `App running on port 3000`，表示伺服器已啟動，請用瀏覽器開啟 http://localhost:3000 ，即可開始使用程式
