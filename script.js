const initialValueInput = document.getElementById('initialValue');
const valueDisplay = document.getElementById('value');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

let counterValue = 0;

function updateValueDisplay() {
  valueDisplay.textContent = counterValue;
}

function handleIncrement() {
  counterValue++;
  updateValueDisplay();
}

function handleDecrement() {
  counterValue--;
  updateValueDisplay();
}

function handleReset() {
  counterValue = 0;
  updateValueDisplay();
}

function handleInitialValueChange() {
  counterValue = Number(initialValueInput.value);
  updateValueDisplay();
}

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);
resetBtn.addEventListener('click',handleReset);
