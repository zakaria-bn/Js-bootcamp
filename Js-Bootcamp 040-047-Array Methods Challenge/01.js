let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log("====================================== 1");
my = my.reverse().splice(counter - true);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log("====================================== 2");
console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"]

console.log("====================================== 3");
my = my.slice(my.indexOf("Elham"), counter);

console.log(
  my[zero].slice(zero, -counter) + my[counter - my.length].slice(my.length)
); // "Elzero"

console.log("====================================== 4");
my = my[zero].slice(zero, -counter) + my[counter - my.length].slice(my.length);

console.log(my.slice(++counter, -true) + my.slice(-true).toUpperCase()); // "rO"

