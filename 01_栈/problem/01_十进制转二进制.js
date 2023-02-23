const Stack = require('../stack')
function decimalToBinary(decNumber){
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while(number > 0){
    rem = number % 2;
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  }
  
  return binaryString;
}

console.log(decimalToBinary(20));