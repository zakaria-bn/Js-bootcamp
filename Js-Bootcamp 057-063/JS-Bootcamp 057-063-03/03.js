
function ageInTime(theAge) {
if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range")
  } else {
    console.log(`the Age with years ${theAge}`);
    console.log(`the Age with months ${theAge * 12} `);
    console.log(`the Age with weaks ${theAge * 12 * 4} `);
    console.log(`the Age with days ${theAge * 12 * 4 * 7} `);
    console.log(`the Age with hours ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`the Age with seconds ${theAge * 12 * 4 * 7 * 24 * 60 * 60} `)
  }
}

// Needed Output
ageInTime(500); // Age Out Of Range
ageInTime(30); // Months Example => 456 Months