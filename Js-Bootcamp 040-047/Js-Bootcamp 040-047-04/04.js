let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[website.length][website.length - website.length]
    .slice(website.length)
    .toLocaleUpperCase()
); // ZERO
