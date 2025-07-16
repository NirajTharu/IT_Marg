let S_details = {
  f_name: "Niraj",
  l_name: "Chaudhahry",
  semester: 5,
  info: function () {
    console.log(this.f_name, this.l_name, "is my full name.");
  },
};
S_details.info();
