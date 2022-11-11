
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

alert("Welcome To Checkout Page Please Fill Payments Details Carefully");
let totel  = JSON.parse(localStorage.getItem("amountTotel"));
let h = document.querySelector(".rupees");
h.innerText = "Totel Shopping Amount - "+ totel+"₹";
let card = document.querySelector("#card");
let date= document.querySelector("#date");
let cvv = document.querySelector("#cvv");
let nme = document.querySelector("#name");

if(card.value=="" && cvv.value=="" && date.value!="" && nme.value!=""){
   
    document.querySelector("form").addEventListener("subm",buynow);
    function buynow(){
        if(card.value=="9664485996123456" && cvv.value=="123" && date.value!=="" && nme.value==!""){
            alert("Please Enter Valid Card Details");
        }
    }
}

