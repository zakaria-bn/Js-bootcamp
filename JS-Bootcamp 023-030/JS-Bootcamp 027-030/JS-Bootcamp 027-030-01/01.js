let userName = "Elzero";
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName.substr(-6, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(
  userName.substring(userName.length - 6, userName.length - 5).toLowerCase()
); // e
console.log(userName.slice(-6, -5).toLowerCase().repeat(3)); // eee
