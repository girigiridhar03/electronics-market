import { navbar } from "./script.js";
import { navbarTwo } from "./script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav-two");
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
import { footer } from "./script.js";
const footerSection = document.querySelector(".footer-section");
footerSection.innerHTML = footer();


const singleMobileProd = JSON.parse(localStorage.getItem("single"))
const getData = async(prod)=>{
    let res = await fetch(`http://localhost:5000/home/${prod}`,{
        method:"GET",
    });
    let data = await res.json();
   getProduct(data)
} 
getData(singleMobileProd)


const leftScrollImages = document.querySelector(".left-scroll-images");
const scrollImage = document.querySelectorAll(".scrollImage");
const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");
const rightBigImage = document.querySelector(".right-big-image");
const rightSepcContainer = document.querySelector(".right-sepc-container");
const cart = document.querySelector("#cart");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");





arrowUp.addEventListener("click",()=>{
    leftScrollImages.style.scrollBehavior = "smooth"
    leftScrollImages.scrollTop -= 400; 
})
arrowDown.addEventListener("click",()=>{
    leftScrollImages.style.scrollBehavior = "smooth"
    leftScrollImages.scrollTop += 400
     
})




function getProduct(product){
    let prodImage = product.image;
     prodImage.map((item)=>{
         const img = document.createElement("img");
         img.src = item;
         img.classList.add("scrollImage");
          leftScrollImages.append(img)
         img.addEventListener("click",(e)=>{
            bigImage.src = img.src
            
        
         })
     })
     
     let bigImage = document.createElement("img");
     bigImage.src = product.image[0];
     rightBigImage.append(bigImage)
    
     const h2 = document.createElement("h2");
     h2.innerHTML = product.desc;
     const p = document.createElement("p");
     p.innerHTML = "MRP:";
     const span = document.createElement("span");
     span.innerHTML = product.price;
     p.append(span);
   
     const div = document.createElement("div");
     div.classList.add("highlights");
     const h4 = document.createElement("h4");
     h4.innerHTML = "HIGHLIGHTS";
     const ul = document.createElement("ul");
     ul.innerHTML = ` <li>Lorem ipsum dolor sit amet.</li>
     <li>Lorem ipsum dolor sit amet.</li>
     <li>Lorem ipsum dolor sit amet.</li>
     <li>Lorem ipsum dolor sit amet.</li>
     <li>Lorem ipsum dolor sit amet.</li>
     <li>Lorem ipsum dolor sit amet.</li>`;

     div.append(h4,ul);
   rightSepcContainer.append(h2,p,div);
   cartDetails(product)

}


arrowRight.addEventListener("click",()=>{
    leftScrollImages.style.scrollBehavior = "smooth";
     leftScrollImages.scrollLeft += 320
})


arrowLeft.addEventListener("click",()=>{
    leftScrollImages.style.scrollBehavior = "smooth";
    leftScrollImages.scrollLeft -= 320;
    console.log("left")
})


function cartDetails(cartProd){
    cart.addEventListener("click",()=>{
      let data = JSON.parse(localStorage.getItem("cartItem"));
      if(data === null){
        data = [];
      }
      data.push(cartProd);
      localStorage.setItem("cartItem",JSON.stringify(data));
      window.location.reload()
})

}

