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


// 全img要素の読込み完了を監視
//--------------------------------------------
function onAllImagesLoaded(callback) {
  const images = document.querySelectorAll("img");
  let loadedCount = 0;
  let isCalled = false;

  // callback の重複実行を防ぐ
  function done() {
    if (!isCalled) {
      isCalled = true;
      callback();
    }
  }

  // 画像が無い場合は即実行
  if (images.length === 0) {
    done();
    return;
  }

  images.forEach(image => {
    // すでに読込みが完了している場合
    if (image.complete) {
      loadedCount++;
      if (loadedCount === images.length) done();
      return;
    }

    // 読込みが完了した場合
    image.addEventListener('load', function() {
      loadedCount++;
      if (loadedCount === images.length) done();
    });

    // 読込みエラーの場合
    image.addEventListener('error', function() {
      loadedCount++;
      if (loadedCount === images.length) done();
    });
  });
}


// スムーススクロール
//--------------------------------------------

// スクロールオフセット調整値（px）
const SCROLL_OFFSET_ADJUST = 20;

// ページ遷移後のスクロール待機時間（ms）
const SCROLL_DELAY_TIME = 300;

document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const href = anchor.getAttribute('href');

    // ページ内スクロール
    if (href.startsWith('#')) {

      if (href === '#!') return;

      // 遅延読込み画像を強制的に読込むように設定
      document.querySelectorAll('img[loading="lazy"]').forEach(lazyImage => {
        lazyImage.loading = "eager";
      });

      // 画像の読み込みがすべて完了したら処理を継続
      onAllImagesLoaded(function() {

        const target = document.querySelector(
          href === '#' || href === '' ? 'html' : href
        );
        const offset = header.offsetHeight + SCROLL_OFFSET_ADJUST;
        const position = target.getBoundingClientRect().top + window.pageYOffset;

        // スムーススクロール
        window.scrollTo({
          top: position - offset,
          behavior: 'smooth'
        });

        // URLにハッシュを追加
        history.pushState(null, '', href);
      });
    }
    // ページ外へ遷移
    else {
      // 移動先ページ
      const destPage = anchor.href.split('#')[0];
      // 移動先ハッシュ
      const destHash = anchor.href.split('#')[1];

      // ハッシュを一時保存
      sessionStorage.setItem('scrollTarget', destHash);

      // 移動先ページに遷移
      window.location.href = destPage;
    }
  });
});

// ページ外スムーススクロール
window.addEventListener('load', function() {

  // 遅延読込み画像を強制的に読込むように設定
  document.querySelectorAll('img[loading="lazy"]').forEach(lazyImage => {
    lazyImage.loading = "eager";
  });

  // 画像の読み込みがすべて完了したら処理を継続
  onAllImagesLoaded(function() {

    // スクロール先のハッシュ値を取得
    const urlHash = sessionStorage.getItem('scrollTarget');

    if (urlHash) {
      // ページの先頭に移動
      window.scrollTo(0, 0);
      // 保存情報を破棄
      sessionStorage.removeItem('scrollTarget');
      // 移動先を取得
      const target = document.querySelector('#' + urlHash);

      if (target) {
        const offset = header.offsetHeight + SCROLL_OFFSET_ADJUST;
        const position = target.getBoundingClientRect().top + window.pageYOffset;

        setTimeout(function(){
          // 移動先へスムーススクロール
          window.scrollTo({
            top: position - offset,
            behavior: 'smooth'
          });
          // ハッシュを再設定
          history.replaceState(null, '', window.location.pathname + '#' + urlHash);
        }, SCROLL_DELAY_TIME);
      }
    }
  });
});
