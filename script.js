const passwordInput = document.getElementById('password');
const lengthRule = document.getElementById('lengthRule');
const numberRule = document.getElementById('numberRule');
const form = document.getElementById('signupForm');

const checkIcon = './images/checked.svg';
const uncheckIcon = './images/un-check.svg';

function validatePassword() {
    const val = passwordInput.value;
    const lengthImg = lengthRule.querySelector('img');
    const numberImg = numberRule.querySelector('img');

    // 條件 1：長度
    if (val.length >= 8) {
      lengthRule.classList.add('valid');
      lengthImg.src = checkIcon;
    } else {
      lengthRule.classList.remove('valid');
      lengthImg.src = uncheckIcon;
    }

    // 條件 2：至少一個數字
    if (/\d/.test(val)) {
      numberRule.classList.add('valid');
      numberImg.src = checkIcon;
    } else {
      numberRule.classList.remove('valid');
      numberImg.src = uncheckIcon;
    }
  }
  passwordInput.addEventListener('input', validatePassword);

  form.addEventListener('submit', function (e) {
    validatePassword(); // 確保即時更新
    const isValid = lengthRule.classList.contains('valid') && numberRule.classList.contains('valid');
    if (!isValid) {
      e.preventDefault();
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
      alert('Form submitted!');
    }
  });

  const eye =  document.getElementById('toggleEye');
  document.getElementById('toggleEye').addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });