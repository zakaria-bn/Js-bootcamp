/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+]
  [++a]
  - Value:11
  - Explain:preincrement
  [+]
  - Explain: add operator

[+b++] [+]
  [+b++]
  - Value:20
  - Explain:postincrement

  [+c++] [-]
  [+c++]
  - Value:80
  - Explain:postincrement

  [+a++]
  [+a++]
  - Value:11
  - Explain:postincrement
*/

console.log(++a + -b + +c++ - -a++ + +a);
/*
  [++a] [+]
  [++a]
  - Value:13
  - Explain:preincrement
  [+]
  - Explain: add operator

[-b] [+]
  [-b]
  - Value:-21
  - Explain: no increment

  [+c++] [-]
  [+c++]
  - Value:81
  - Explain:postincrement

  [-a++] [+]
  [-a++]
  - Value:-13
  - Explain:postincrement

  [+a]
  - Value:14
  - Explain:no increment
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
  [--c] [+]
  [--c]
  - Value:81
  - Explain:decrement
  [+]
  - Explain: add operator

[+b] [+]
  [+b]
  - Value:21
  - Explain:no increment

[--a] [*]
  [--a]
  - Value:13
  - Explain: decrement

  [+b++] [-]
  [+b++]
  - Value:21
  - Explain:postincrement

  [+b] [*]
  [+b]
  - Value:22
  - Explain:postincrement

  [a] [+]
  - Value:13
  - Explain:postincrement

  [--a] [-]
  [--a]
  - Value:12
  - Explain: no increment

[true]
  - Value:1
  - Explain: no increment
  */

