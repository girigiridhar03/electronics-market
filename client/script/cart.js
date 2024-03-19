import { navbar } from "./script.js";
import { navbarTwo } from "./script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav-two");
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
import { footer } from "./script.js";
const footerSection = document.querySelector(".footer-section");
footerSection.innerHTML = footer();

const cartContainer = document.querySelector(".cart-container");
const cartItems = document.querySelector(".cart-length");
const empty = document.querySelector('.empty');
const conShop = document.querySelector('.con-shop');
const paymentPrice = document.querySelector(".payment-price");
const cartTotal = document.querySelector(".cart-total");
const cartItemTotal = document.querySelector(".cart-item-total");
 const getCart = JSON.parse(localStorage.getItem("cartItem")) || [];
const cartLength = getCart.length;


const total = getCart.reduce((index,elem)=>{
    return index + Number(elem.price)
},0)

if(cartLength === 0){
    cartItemTotal.innerHTML = 0;
}
else{
    cartItemTotal.innerHTML = cartLength;
}

if(cartLength <= 1){
    cartItems.innerHTML = `(${cartLength} item)`
    paymentPrice.innerHTML = `(${cartLength} item)`
}
else{
    cartItems.innerHTML = `(${cartLength} items)`
    paymentPrice.innerHTML = `(${cartLength} item)`
}
cartTotal.innerHTML = total
if(getCart.length === 0){
  empty.style.display = "block";
  conShop.style.display = "block";
  cartContainer.style.display = "none"
}
else{
    
    getCart.map((item,index)=>{
      const cartDetails = document.querySelector(".cart-details")
       const div = document.createElement("div");
       div.classList.add('cart-image');
       const div1 = document.createElement("div");
       div1.classList.add('img-title');
       const img = document.createElement("img");
       img.src = item.image[0];
       const div2 = document.createElement("div");
       div1.classList.add('title-price');
       const p1 = document.createElement("p");
       p1.innerHTML = item.desc;
       const p2 = document.createElement("p");
       p2.innerHTML = item.price
       div2.append(p1,p2);
       div1.append(img,div2);
       const div3 = document.createElement("div");
       div3.classList.add("quantity");
       const div5 = document.createElement('div');
       div5.classList.add('delete-product');
       div5.innerHTML = ` <i class="fa-solid fa-trash" id="delete-icon"></i>`;
       div3.append(div5)
    
       div.append(div1,div3);
       cartDetails.append(div);
  
       div5.addEventListener("click",()=>{
         removeElem(item,index)
       })
       
    })
    

}

function removeElem(item,index){
    console.log(getCart.splice(index,1))
    localStorage.setItem("cartItem",JSON.stringify(getCart));
    window.location.reload()

}