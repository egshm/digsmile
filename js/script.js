// ハンバーガーメニュー
//--------------------------------------------

// ハンバーガーメニューボタン
const hamburger = document.getElementById('js-hamburger');
// ハンバーガーメニュー
const menu = document.querySelector('.js-menu');
// 各メニュー項目
const menuItems = document.querySelectorAll('.js-menuItem');

// ハンバーガーメニューボタンがクリックされた時
hamburger.addEventListener('click', function() {

  const expanded = this.getAttribute('aria-expanded');

  // メニューが開くとき
  if (expanded === 'false') {
    this.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }
  // メニューが閉じるとき
  else {
    this.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }
});

// メニュー項目がクリックされた時
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // ハンバーガーメニューを閉じる
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
    menu.setAttribute('aria-hidden', 'true');
  });
});


// スティッキーヘッダー
//--------------------------------------------

// ヘッダー
const header = document.getElementById('js-header');

// ファーストビュー
const firstView = document.getElementById('js-firstView');

// スクロールされた時
window.addEventListener('scroll', function() {
  stickyHeader();
});

// ページを読み込んだ時
window.addEventListener('load', function() {
  stickyHeader();
});

function stickyHeader() {
  const headerHeight = header.offsetHeight;
  const firstViewHeight = firstView.offsetHeight;
  const scrollY = window.scrollY || window.pageYOffset;
  // 縦スクロール位置がファーストビューを越えたらヘッダースタイルを変更
  header.classList.toggle('is-sticky', scrollY >= (firstViewHeight - headerHeight));
}


// スムーススクロール
//--------------------------------------------

// ページ内スムーススクロール
document.querySelectorAll('a[href^="#"]:not([href^="#!"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(event) {
    // デフォルトのイベント動作をキャンセル
    event.preventDefault();

    const id = anchor.getAttribute("href");
    const target = document.querySelector(id === "#" || id === "" ? "html" : id);

    if (target) {
      const headerHeight = header.offsetHeight;
      // ターゲット要素のドキュメント全体における絶対位置からヘッダー高さを引いた位置を算出
      const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      // ターゲット位置までスムーススクロール
      window.scrollTo({
        top: position,
        behavior: "smooth"
      });
    }
  });
});

// ページ外スムーススクロール
urlHash = window.location.hash;
if (urlHash) {
  history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);
  setTimeout(function() {
    const target = document.querySelector(urlHash);

    if (target) {
      const headerHeight = header.offsetHeight;
      // ターゲット要素のドキュメント全体における絶対位置からヘッダー高さを引いた位置を算出
      const position = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      // ターゲット位置までスムーススクロール
      window.scrollTo({
        top: position,
        behavior: "smooth"
      });
    }
  }, 50);
}
