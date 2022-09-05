let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// Method 1
if (needle === haystack[1]) {
  console.log("found");
}
// Method 2
if (haystack.includes(needle)) {
  console.log("found");
}
// Method 3
if (haystack.indexOf(needle)) {
  console.log("found");
}
