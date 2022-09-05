let day = "   friday  ";
switch (day) {
  case "   friday  ":
    console.log(day.trim().substring(day.length - 6));
    break;
  // You Need To Remove Spaces And Make First Letter Capital => Friday

  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  // // Output => "No Appointments Available"

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  // // Output => "From 10:00 AM To 5:00 PM"

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    // // Output => "From 10:00 AM To 6:00 PM"

    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  // // Output => "From 10:00 AM To 7:00 PM"

  case "World":
    console.log("Its Not A Valid Day");
    break;
  // // Output => "Its Not A Valid Day"
}
