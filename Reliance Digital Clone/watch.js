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

//username show
var userDetails = JSON.parse(localStorage.getItem("userData")) || [];

userDetails.forEach(function (elem, i) {
  document.querySelector(".user").innerHTML = elem.fname;
});

//  append in one div tvdata using flex
let card = document.querySelector("#cardcontainer");

// data fatching from json file
let x = fetch("./alldata.json")
  .then((res) => res.json())
  .then((data) => {
    //apply filter method during data fetch

    var newData = data.filter(function (elem) {
      return elem.category == "Watch";
    });
    displaycard(newData, card);
  });

//count show on top
var displaycartitem = document.querySelector("#cartshow");
displaycartitem.innerText = "-" + count;

function displaycard(data, box) {
  data.filter((elem) => {
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

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.addEventListener("click", function () {
      cartarr.push(elem);
      localStorage.setItem("cart", JSON.stringify(cartarr));
      count++;
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
      btn
    );
    box.append(card);
  });
}
