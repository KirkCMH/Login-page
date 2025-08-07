const passwordInput = document.getElementById('password');
const lengthRule = document.getElementById('lengthRule');
const numberRule = document.getElementById('numberRule');
const form = document.getElementById('signupForm');
const errorMsg = document.getElementById('errorMsg');

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
    const requiredFields = document.querySelectorAll('.require');
    let allValid = true;

    requiredFields.forEach((field) => {
      const isEmpty = !field.value.trim();
      if (isEmpty) {
        field.style.border = '2px solid red'; // 加紅框
        allValid = false;
      } else {
        field.style.border = ''; // 移除紅框
      }
    });

    if (!allValid && !isValid) {
      e.preventDefault(); // 阻止送出
      document.getElementById('errorMsg').style.display = 'flex';
    } else {
      document.getElementById('errorMsg').style.display = 'none';
    }
  });

  const eye =  document.getElementById('toggleEye');
  const rules = document.querySelector(".rules");
  document.getElementById('toggleEye').addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    if(type === 'text') rules.style.display = 'flex';
    if(type === 'password') rules.style.display = 'none';
  });