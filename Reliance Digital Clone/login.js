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

document.querySelector("#signin").addEventListener("click", function () {
  var mobile1 = document.querySelector("#mobile").value;
  var password1 = document.querySelector("#password").value;
  if (mobile1 == "" || password1 == "") {
    alert("Please Enter Valid Details For SignIn");
  } else {
    let flag = false;
    userDetails.forEach(function (elem, i) {
      if (mobile1 == elem.mobile && password1 == elem.password) {
        flag = true;
      }
    });
    if (flag) {
      alert("Login Sucessfull");
      window.location.href = "/allproduct.html";
      document.querySelector(".user").innerHTML = elem.fname;
    } else {
      alert("oops! User Does Not Exist ! Try Again");
    }
  }
});
