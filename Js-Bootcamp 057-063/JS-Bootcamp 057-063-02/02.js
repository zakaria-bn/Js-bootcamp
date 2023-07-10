
function calculate(firstNum, secondNum, operation) {
if (firstNum >= 0 && secondNum >= 0 && operation === `add`) {
  console.log(`${firstNum + secondNum}`);

} else if (firstNum >= 0 && secondNum >= 0 && operation === `subtract`) {
  console.log(`${firstNum - secondNum}`);

} else if (firstNum >= 0 && secondNum >= 0 && operation === `multiply`) {
  console.log(`${firstNum * secondNum}`);

} else if (firstNum >= 0 && secondNum >= 0 ) {
  console.log(`${firstNum + secondNum}`);
  
} else {
  console.log(`Second Number Not Found`);
}

}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
