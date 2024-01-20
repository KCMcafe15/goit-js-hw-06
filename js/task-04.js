const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let value = 0;

decrementEl.addEventListener('click', function () {
  value--;
  counterValue.textContent = value;
});

incrementEl.addEventListener('click', function () {
  value++;
  counterValue.textContent = value;
});