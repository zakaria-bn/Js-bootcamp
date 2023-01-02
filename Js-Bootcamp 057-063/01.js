function calc(...numbers) {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `The Result Is ${result}`;
}
console.log(calc(10, 20, 10, 20, 30));


