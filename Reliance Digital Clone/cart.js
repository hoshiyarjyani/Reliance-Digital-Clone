

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
  
  let count = localStorage.getItem("countitem") || 0;
  let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
  let p =1;
  //username show
  var userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  
  userDetails.forEach(function (elem, i) {
    document.querySelector(".user").innerHTML = elem.fname;
  });
  

  
  //count show on top
  var displaycartitem = document.querySelector("#cartshow");
  displaycartitem.innerText = "-" + count;
  

if(sum==0){
    count=0;
}
// calculation of price
var sum = 0;

function calculate(data){


for (let i = 0; i < data.length; i++) {
  sum += +data[i].offerprice;
  Math.floor(sum);
}

let offerbtn = document.querySelector("#promobtn");
offerbtn.addEventListener("click", discount);

let offercode = document.querySelector("#promo");
p =1;
function discount(event){
  event.preventDefault();
  if(offercode.value=="masai30" && p==1){
    sum*=0.70;
    sum=Math.floor(sum);
    alert("Hurray...! You Get 30% Discount");
    p++;
  }else{
    sum=sum*1;
  }
  totel.innerText="Totel Amount = "+ sum + " ₹";
}

var totel = document.querySelector("#totel");
totel.innerText="Totel Amount = "+ sum +" ₹";
}


//display data

  function displaycard(data) {
    
    data.forEach((elem,index) => {
     //  append in one div data using flex
 let cardcontainer = document.querySelector("#cardcontainer");


      let card = document.createElement("div");
  
      let image = document.createElement("img");
      image.src = elem.image;
  
      let title = document.createElement("p");
      title.innerText = elem.title;
  
      let brand = document.createElement("h6");
      brand.innerHTML = elem.brand;
  
      let rating = document.createElement("h6");
      rating.innerHTML = "Rating - " + elem.rating + " ⭐";
  
      let offerprice = document.createElement("h5");
      offerprice.innerHTML = "Deal Price - ₹" + elem.offerprice;
  
      let mrp = document.createElement("h6");
      mrp.innerHTML = "M.R.P. - ₹" + elem.mrp;
  
      let discount = document.createElement("h6");
      discount.innerHTML = "You Save - ₹" + Number(elem.mrp - elem.offerprice);
  
      let category = document.createElement("h6");
      category.innerHTML = "Category - " + elem.category;
  
      let plus = document.createElement("button");
      plus.setAttribute("id","plus");
      plus.innerText = "Increase";
      plus.addEventListener("click", function () {
        count++;
        sum=(sum)+Number(elem.offerprice);
        totel.innerText="Totel Amount = "+ sum + " ₹";
        localStorage.setItem("countitem", count);
        displaycartitem.innerText = "-" + count;
      });


      let btn = document.createElement("button");
      btn.innerText = "Remove Item";
      btn.addEventListener("click", function () {
        cartarr.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cartarr));
        count--;
        localStorage.setItem("countitem", count);
        displaycartitem.innerText = "-" + count;
        cardcontainer.innerHTML="";
        displaycard(cartarr);
        calculate(cartarr);
      });

      let minus = document.createElement("button");
      minus.setAttribute("id","minus");
      minus.innerText = "Decrease";
      minus.addEventListener("click", function () {
        count--;
        sum=(sum)-Number(elem.offerprice);
        totel.innerText="Totel Amount = "+ sum + " ₹";
        localStorage.setItem("countitem", count);
        displaycartitem.innerText = "-" + count;
      });
  


      let offerdiv = document.createElement("div");
      offerdiv.classList.add("offerdiv");
      offerdiv.innerText = "OFFERS AVAILABLE";
      card.append(
        image,
        title,
        brand,
        rating,
        offerprice,
        mrp,
        discount,
        category,
        offerdiv,
        plus,
        minus,
        btn
      );
      cardcontainer.append(card);
    });
  }
  displaycard(cartarr);
  calculate(cartarr);