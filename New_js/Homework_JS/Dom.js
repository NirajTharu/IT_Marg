// function Full_name() {
//   let Name = document.getElementById("Username").value;
//   console.log(Name);
// }

function even_Odd() {
  let Number = document.getElementById("input_number");
  if (Number % 2 === 0) {
    document.getElementById("output").innerText = `${Number} is even number`;
    // console.log("Is even");
  } else {
    document.getElementById("output").innerText = `${Number} is odd number`;
    // console.log("Is odd");
  }
  console.log(Number);
}
