import './styles/index.scss';

const getCartType = (value) => {
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

  console.log(getCartType(value));

  if (value.length <= 16) {
    if (value.length > oldNumberInput.length) { // add
      for (let i = 0; i < value.length; i++) {
        mask[i].innerHTML = value[i];
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
  const nameField = document.querySelector('.cart-item__holder-item');
  nameField.innerHTML = value;
}

const monthInput = (event) => {
  const value = parseInt(event.target.value);
  const monthField = document.querySelector('.cart-item__expirat-month');
  monthField.innerHTML = ('0' + value).slice(-2);
}

const yearInput = (event) => {
  const value = event.target.value;
  const yearField = document.querySelector('.cart-item__expirat-year');
  yearField.innerHTML = value.slice(2, 4);
}

const mask = document.querySelectorAll('.card-item__number--item');
let oldNumberInput = '';
document.getElementById('cardNumber').addEventListener('input', numberInput);
document.getElementById('cardHolder').addEventListener('input', nameInput);
document.getElementById('cardMonthHolder').addEventListener('change', monthInput);
document.getElementById('cardYearHolder').addEventListener('change', yearInput);