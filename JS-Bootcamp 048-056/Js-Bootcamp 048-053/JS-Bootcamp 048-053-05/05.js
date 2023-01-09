let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
Number = letter.length;
for (let i = letter.length - letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${Number} => ${friends[i]}`);
  Number++;
}

// Output
