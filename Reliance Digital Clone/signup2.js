// for sticky nav bar
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbarsticky");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var userDetails = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector("#signup").addEventListener("click", function () {
  var fname = document.querySelector("#name").value;
  var lname = document.querySelector("#lastname").value;
  var email = document.querySelector("#email").value;
  var mobile = document.querySelector("#mobile").value;
  var password = document.querySelector("#password").value;
  if (
    fname == "" ||
    lname == "" ||
    email == "" ||
    mobile == "" ||
    password == "" ||
    mobile > 9999999999 ||
    mobile < 1000000000
  ) {
    alert("Please Enter All Valid Details For SignUp");
  } else {
    let obj = {
      fname: fname,
      lname: lname,
      email: email,
      mobile: mobile,
      password: password,
    };
    userDetails.push(obj);

    localStorage.setItem("userData", JSON.stringify(userDetails));
    alert("Hurray...! Sign Up Sucessful Please LOGIN for Shopping");
    window.location.href = "/login.html";
  }
});
