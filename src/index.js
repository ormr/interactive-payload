import './styles/index.scss';

const getCardType = (value) => {
  let re = new RegExp('^4');
  if (value.match(re) != null) return 'visa';
  re = new RegExp('^(34|37)');
  if (value.match(re) != null) return 'amex';
  re = new RegExp('^6011');
  if (value.match(re) != null) return 'discover';
  re = new RegExp('^9792');
  if (value.match(re) != null) return 'troy';

  return 'visa';
};

const numberInput = (event) => {
  const value = event.target.value;
  const logo = document.querySelector('.card-item__logo-item');
  const cardType = getCardType(value);

  if (cardType !== logo.classList[1]) {
    if (cardType === 'amex') {
      document.querySelector('.card-number-mask').classList.remove('default-mask');
      document.querySelector('.card-number-mask').classList.add('apex-mask');
    } else {
      if (cardType !== 'default-mask') {
        document.querySelector('.card-number-mask').classList.remove('apex-mask');
        document.querySelector('.card-number-mask').classList.add('default-mask');
      }
    }
    logo.classList.remove(logo.classList[1]);
    logo.classList.add(cardType);
  }

  if (value.length <= 16) {
    if (value.length > oldNumberInput.length) { // add
      for (let i = 0; i < value.length; i++) {
        if (i >= 4 && i < 12) {
          mask[i].innerHTML = '*'
        } else {
          mask[i].innerHTML = value[i];
        }
      }
      oldNumberInput = value;
    } else if (value.length < oldNumberInput.length) { // delete
      for (let i = oldNumberInput.length - 1; i >= value.length; i--) {
        mask[i].innerHTML = '#'
      }
      oldNumberInput = value;
    }
  }
}

const nameInput = (event) => {
  const value = event.target.value;
  const nameField = document.querySelector('.card-item__holder-item');
  if (!value) {
    return nameField.innerHTML = 'full name';
  }
  nameField.innerHTML = value;
}

const monthInput = (event) => {
  const value = parseInt(event.target.value);
  const monthField = document.querySelector('.card-item__expirat-month');
  monthField.innerHTML = ('0' + value).slice(-2);
}

const yearInput = (event) => {
  const value = event.target.value;
  const yearField = document.querySelector('.card-item__expirat-year');
  yearField.innerHTML = value.slice(2, 4);
}

const cvvInput = (event) => {
  const value = event.target.value;
  const mask = document.querySelector('.card-item-cvv-output');

  // debugger;

  if (value.length <= 4) {
    if (value.length > oldMaskInput.length) { // add
      mask.innerHTML += '*';
      oldMaskInput = value;
    } else if (value.length < oldMaskInput.length) { // delete
      for (let i = oldMaskInput.length - 1; i >= value.length; i--) {
        mask.innerHTML = mask.innerHTML.slice(0, value.length)
      }
      oldMaskInput = value;
    }
  }
}

const cvvInputFocused = (event) => {

  document.querySelector('.card-item-side-front').classList.add('disabled');
  document.querySelector('.card-item-side-back').classList.remove('disabled');
  document.querySelector('#cardCvv').addEventListener('input', cvvInput);
}

const cvvInputUnfocused = (event) => {
  document.querySelector('.card-item-side-front').classList.remove('disabled');
  document.querySelector('.card-item-side-back').classList.add('disabled');
  document.querySelector('#cardCvv').removeEventListener('input', cvvInput);
}

const mask = document.querySelectorAll('.card-item__number--item');
let oldNumberInput = '';
document.getElementById('cardNumber').addEventListener('input', numberInput);
document.getElementById('cardHolder').addEventListener('input', nameInput);
document.getElementById('cardMonthHolder').addEventListener('change', monthInput);
document.getElementById('cardYearHolder').addEventListener('change', yearInput);
let oldMaskInput = '';
document.getElementById('cardCvv').addEventListener('focus', cvvInputFocused);
document.getElementById('cardCvv').addEventListener('blur', cvvInputUnfocused);