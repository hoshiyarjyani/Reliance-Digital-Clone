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

document.querySelector("#signn").addEventListener("click", function () {
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
