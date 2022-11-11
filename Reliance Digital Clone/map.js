var city;
 

// annomius Function by button pressing

document.querySelector("#ms").addEventListener("click", function () {
  local = document.querySelector("#cityname").value;

      // map url of particular city
      let map = document.querySelector("#gmap_canvas");
      map.src =
        "https://maps.google.com/maps?q=reliance digital" +
        local +
        "&t=&z=13&ie=UTF8&iwloc=&output=embed";
    });

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





