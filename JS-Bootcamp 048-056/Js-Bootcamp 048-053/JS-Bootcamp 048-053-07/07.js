let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start + mix.indexOf(2); i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}
// Output
