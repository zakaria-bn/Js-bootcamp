/*
If Challenge
*/

let a = 50;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log(" > 40");
} else {
  console.log("Unknown");
}
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log(`10 To 40`) : a > 40 ? console.log( " > 40 ") : console.log(`unkmown`);


let st = "Elzero Web School";

if (st.charAt(st.indexOf("W")).toLowerCase()=== "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}