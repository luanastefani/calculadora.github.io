let currentInput = '';
let result = '';


function appendToDisplay(value){
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay(){
  currentInput = '';
  document.getElementById('display').value = currentInput;
}

function calculateResult(){
  try{
    result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();

  }catch(error){
    document.getElementById('display').value = 'Erro';
  }
  
}