// 獲取當前完整路徑
const fullPath = window.location.pathname;

// 計算基礎路徑
// 如果是 index.html，則使用當前路徑
// 如果是子目錄中的頁面，則需要回到上一層
const isIndex = fullPath.endsWith("index.html");
const basePath = isIndex ? "./" : "../";

// 定義導覽列的 HTML 結構
const navHtml = `<nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-secondary">
      <div class="container-fluid">
        <!-- 網站標題連結 -->
        <a class="navbar-brand" href="${basePath}index.html">React 練習手冊</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- 導覽選單項目 -->
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="${basePath}intro/createApp.html">認識 React</a></li>
            <li class="nav-item"><a class="nav-link" href="${basePath}es6/shorthand.html">JS 必備觀念</a></li>
            <li class="nav-item"><a class="nav-link" href="${basePath}components/intro.html">元件基礎</a></li>
            <li class="nav-item"><a class="nav-link" href="${basePath}hooks/startHooks.html">Hooks</a></li>
            <li class="nav-item"><a class="nav-link" href="${basePath}form/basicForm.html">表單</a></li>
            <li class="nav-item"><a class="nav-link" href="${basePath}hooksAdv/lifeCycle.html">Hooks 進階</a></li>
          </ul>
        </div>
      </div>
    </nav>`;

// 將導覽列 HTML 插入到 body 標籤的開始位置
document.body.insertAdjacentHTML("afterbegin", navHtml);

// 獲取所有導覽連結元素
const links = document.querySelectorAll(".nav-link");
// 獲取當前頁面的路徑
const currentPath = window.location.pathname;

// 遍歷所有連結，檢查是否為當前頁面
// 如果是當前頁面，添加 "active" 類來突顯當前位置
links.forEach((link) => {
  const href = link.getAttribute("href");
  // 比對當前路徑，添加 active 類別
  if (currentPath.includes(href.replace("./", ""))) {
    link.classList.add("active");
  }
});
