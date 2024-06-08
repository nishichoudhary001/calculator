let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';

}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}
function deleteLastCharacter(){
  let displayValue= document.getElementById('display').value;

  document.getElementById('display').value=displayValue.slice(0, -1)
}