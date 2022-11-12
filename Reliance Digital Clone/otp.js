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
    alert("Hurray!...Payment Successful. Order Confirmed! Your Order Id- #58H5P96");
    window.location.href = "/index.html";
  } else {
    alert("Wrong OTP");
  }
}


//div as button btn
document.querySelector("#brandlogo").addEventListener("click",function(){
    window.location.href = "/index.html";
  });
  
  document.querySelector("#topbigbanner").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });
  document.querySelector(".carousel-item").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });
  document.querySelector("#procra1").addEventListener("click",function(){
    window.location.href = "/earphone.html";
  });
  document.querySelector("#procra2").addEventListener("click",function(){
    window.location.href = "/earphone.html";
  });
  document.querySelector("#crousalproductTelivision").addEventListener("click",function(){
    window.location.href = "/tv.html";
  });
  
  document.querySelector("#categorypics").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });
  document.querySelector("#crousaliphone").addEventListener("click",function(){
    window.location.href = "/mobile.html";
  });
  document.querySelector("#monitor").addEventListener("click",function(){
    window.location.href = "/monitor.html";
  });
  document.querySelector("#iphone14").addEventListener("click",function(){
    window.location.href = "/mobile.html";
  });
  document.querySelector("#dailyuse").addEventListener("click",function(){
    window.location.href = "/dailyuse.html";
  });
  document.querySelector("#watch").addEventListener("click",function(){
    window.location.href = "/watch.html";
  });
  document.querySelector("#tv").addEventListener("click",function(){
    window.location.href = "/tv.html";
  });
  document.querySelector("#range1").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });
  document.querySelector("#range2").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });
  document.querySelector(".viewall").addEventListener("click",function(){
    window.location.href = "/allproduct.html";
  });