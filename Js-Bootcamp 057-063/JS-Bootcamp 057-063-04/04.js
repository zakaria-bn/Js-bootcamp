
function checkStatus(a, b, c) {
a === String ;
b === Number;
if (c === true) {
  c = "Available"
} else if (c === false) {
  c = "Not Available"
}
  console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c} For Hire`);
}



// Needed Output
checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true);