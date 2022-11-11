let count = localStorage.getItem("countitem") || 0;
let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
//username show
var userDetails = JSON.parse(localStorage.getItem("userData")) || [];
userDetails.forEach(function (elem, i) {
    document.querySelector(".user").innerHTML = elem.fname;
  });
  //count show on top
var displaycartitem = document.querySelector("#cartshow");
displaycartitem.innerText = "-" + count;

alert("Please Enter Otp for proceed the Payment");
let otp = document.querySelector("#otp");

let btn = document.querySelector("#validate");
btn.addEventListener("click", validate);

function validate() {
  if (otp.value == "123456") {
    alert("Hurray!...payment Successful");
    window.location.href = "/dailyuse.html";
  } else {
    alert("wrong OTP");
  }
}