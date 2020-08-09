import './styles/index.scss';

const numberInput = (event) => {
  const value = event.target.value;/* ? event.target.value[event.target.value.length - 1]: '';*/

  console.log(value.length, oldNumberInput.length);
  if (value.length <= 16) {
    if (value.length > oldNumberInput.length) {
      for (let i = 0; i < value.length; i++) {
        mask[i].innerHTML = value[i];
      }
      oldNumberInput = value;
    } else if (value.length < oldNumberInput.length) {
      oldNumberInput = value;
      for (let i = oldNumberInput.length; i >= value.length; i--) {
        mask[i].innerHTML = '#'
      }
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