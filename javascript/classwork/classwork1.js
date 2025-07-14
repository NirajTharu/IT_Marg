{

// Q.Create a simple JavaScript program that:

// Declares variables for a student's name and marks in three subjects (Math, Science, English).

// Calculates the total marks, average, and percentage.

// Displays the student's name, total marks, average, and percentage in the console.

// Use appropriate data types and operators.

// Add one condition: If the percentage is 40 or more, show "Pass", otherwise show "Fail".
//   // Assuming the full mark of one subject is 100;
  var studentName = "Niraj";
  var math = 80,
    science = 80,
    english = 80;
  var total = math + science + english;
  var avg = total / 3;
  var per = (total / 300) * 100;
  console.log(studentName);
  console.log(total);
  console.log(avg);
  console.log(per);
  if (per > 40) {
    console.log("Pass");
  } else {
    console.lgo("fail");
  }
}
