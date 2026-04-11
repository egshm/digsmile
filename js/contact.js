// フォーム送信
//--------------------------------------------

// フォーム
const form = document.getElementById('js-form');

// フォームの全入力項目
const inputs = form.querySelectorAll('input, textarea');

// 送信ボタン
const submitBtn = document.getElementById('js-btnSubmit');

// 同意チェックボックス
const agreeCheckbox = document.getElementById('js-agreeCheckbox');

// 入力チェック対象フィールド
const requiredFields = [
  'entry.1649654856',
  'entry.647904835',
  'entry.900823707',
  'entry.1062457129'
];

// 入力イベントを監視し、必須項目がすべて入力されれば送信ボタンを有効化
inputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// フォーム送信
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const endMsg = form.querySelector('#js-msgSubmitEnd');
  const xhr = new XMLHttpRequest();
  const XHR_STATE_DONE = 4;
  const DELAY_TIME = 300;

  xhr.open('POST', form.action, true);

  // Google FormsはCORSを許可しておらず、ブラウザによってレスポンスがブロックされる。
  // そのため、ステータスコード（status）は常に0となり、成功判定には使えない。
  // したがって、XHRクライアントの状態（readyState）を参照してリクエスト完了だけを監視する。
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XHR_STATE_DONE) {
      submitBtn.classList.remove('is-active');
      submitBtn.classList.add('is-hidden');
      setTimeout(() => {
        endMsg.classList.add('is-active');
      }, DELAY_TIME);

      form.reset();
    }
  }

  // フォームの入力内容を送信
  xhr.send(formData);
});


function validateForm() {
  // 必須項目がすべて入力されたかチェック
  const isFilled = requiredFields.every(name => {
    const field = form.querySelector(`[name="${name}"]`);
    return field && field.value.trim() !== '';
  });
  // 同意チェック
  const isAgreed = agreeCheckbox && agreeCheckbox.checked;

  if (isFilled && isAgreed) {
    submitBtn.disabled = false;
    submitBtn.classList.add('is-active');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove('is-active');
  }
}
