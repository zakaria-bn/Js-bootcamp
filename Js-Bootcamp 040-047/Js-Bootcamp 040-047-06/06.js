let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr2
  .concat(arr1)
  .sort()
  .slice(arr2.indexOf("Y") + arr2.indexOf("E"))
  .join("")
  .toLowerCase();
console.log(allArrs); // fxy
