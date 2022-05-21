bookingList = [];

class booking {
  constructor(name, email, time) {
    this.name = name;
    this.email = email;
    this.time = time;
    bookingList.push(this);
  }
}
function Book() {
  var input = document.getElementsByTagName("input");
  let name;
  let email;
  let time;
  for (var i = 0; i < input.length; i++) {
    var a = input[i];

    if (a.id === "name") {
      name = a.value;
    }
    if (a.id === "email") {
      email = a.value;
    }
    if (a.id === "time") {
      time = a.value;
    }
  }
  new booking(name, email, time);
  // console.log(a.name + ": " + a.value);
  console.log(bookingList);
}