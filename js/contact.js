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
  // デフォルトのイベント動作をキャンセル
  event.preventDefault();
  const formData = new FormData(form);
  const endMsg = document.getElementById('js-msgSubmitEnd');
  const delayTime = 300;
  fetch(form.action, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  }).finally(() => {
    submitBtn.classList.remove('is-active');
    submitBtn.classList.add('is-hidden');
    setTimeout(() => {
      endMsg.classList.add('is-active');
    }, delayTime);
  });
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
