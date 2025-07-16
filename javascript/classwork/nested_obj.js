// Nested object in the javascript

let parents = {
  Father_Name: "Mahi Narayan Chaudahray",
  age: 65,
  child: {
    first_name: "Niraj Chaudhary",
    occupation: "Student",
  },
};
console.log(parents.child.first_name, "is", parents.child.occupation);
console.log(parents.Father_Name, parents.age);
