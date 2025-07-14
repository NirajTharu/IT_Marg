{
  // Assuming the full mark of one subject is 100;
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
