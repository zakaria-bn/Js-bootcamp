let day = "   tuesday  ";

day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
  // You Need To Remove Spaces And Make First Letter Capital => Friday
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
   // Output => "No Appointments Available"

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  // Output => "From 10:00 AM To 5:00 PM"

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
  // Output => "From 10:00 AM To 6:00 PM"

    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  // Output => "From 10:00 AM To 7:00 PM"

  default:
    console.log("Its Not A Valid Day");
   // Output => "Its Not A Valid Day"
}
