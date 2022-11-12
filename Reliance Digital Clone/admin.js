let adminarr =JSON.parse(localStorage.getItem("newData")) || [];

document.querySelector(".user").innerHTML = "Admin";
document.querySelector("#publishdata").addEventListener("click",function(){
   let id = document.querySelector("#productid").value;
   let image = document.querySelector("#productimage").value;
   let title = document.querySelector("#producttitle").value;
   let brand = document.querySelector("#productbrand").value;
   let rating = document.querySelector("#productrating").value;
   let offerprice = document.querySelector("#productoffer").value;
   let mrp = document.querySelector("#productmrp").value;
   let category = document.querySelector("#productcategory").value;
   
   let adminobj = {"id":id,"image":image,"title":title,"brand":brand,"rating":rating,"offerprice":offerprice,"mrp":mrp,"category":category};
   adminarr.push(adminobj);
   localStorage.setItem("newData",JSON.stringify(adminarr));
});

document.querySelector("#seedata").addEventListener("click",function(){
    window.location.href = "/newproduct.html";
  });
  