import { navbar } from "./script.js";
import { navbarTwo } from "./script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav-two");
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
import { footer } from "./script.js";
const footerSection = document.querySelector(".footer-section");
footerSection.innerHTML = footer();


const accordiance = document.querySelectorAll(".accordiance");
const mobileContainer = document.querySelector(".mobile-container")
const check = document.querySelectorAll("#check");
const productCard = []
const filterIcon = document.querySelector("#filter-icon");
const brandContainer = document.querySelector(".brand-container");
const applyBtn = document.querySelector(".apply");

accordiance.forEach(accordian=>{
     const types = accordian.querySelector(".types");
     const angleDown = accordian.querySelector("#angle-down");
     const subHeading = accordian.querySelector(".sub-heading")
     angleDown.addEventListener("click",()=>{
          if(angleDown.classList.contains('active')){
               angleDown.classList.remove('active');
               types.style.maxHeight = null
               subHeading.style.color = "black"
          }
          else{
               angleDown.classList.add('active');
               types.style.maxHeight = types.scrollHeight + 'px'
               subHeading.style.color = "red"
          }
     })
})

const url = "http://localhost:5000/mobile";

const mobiles = async()=>{
     let res = await fetch(url);
     let data = await res.json();
    let store = data.prod
    mobilesProd(store)
    mobileProducts(store)
}



function mobilesProd(prod){
    prod.map(item=>{
     
       if(item.title === "mobile"){
         const card = document.createElement("div");
         card.classList.add("card")
       
         const img = document.createElement("img");
         img.src = item.image[0];
         const div = document.createElement("div");
         div.classList.add("img-price-details");
         const h6 = document.createElement("h6");
         h6.innerHTML = item.desc;
         const p = document.createElement("p");
         p.innerHTML = "MRP : ";
         const span = document.createElement("span");
         span.innerHTML = item.price
         p.append(span);
         div.append(h6,p);
         card.append(img,div)
         mobileContainer.append(card)
         productCard.push(card)

         card.addEventListener("click",()=>{
               singleProduct(item)

         })
        
        }     
    })
}



function singleProduct(single){
     let singleMobile = single._id;
       localStorage.setItem("mobileSingle",JSON.stringify(singleMobile));
       window.location.href = "../html/mobile-single-product.html";
   
}




function mobileProducts(mob){

     check.forEach(checkBox=>{
         checkBox.addEventListener("click",(e)=>{
          if(checkBox.checked){
               const val = e.target.name;
               mob.filter(phn=>{
               if(phn.brand === val){
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = phn.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = phn.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = phn.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(phn)

         })
          }
          else{
                    productCard.forEach(card=>{
                         card.classList.add('hide-content')
                    })
               }

               
               if(phn.title === val){
                  console.log(phn)
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = phn.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = phn.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = phn.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(phn)

         })
               }
               else{
                    productCard.forEach(card=>{
                         card.classList.add('hide-content')
                    })
               }
               })
          }
          else{
               location.reload()
          }
         })
     })
}

filterIcon.addEventListener("click",()=>{
    brandContainer.style.display = "block"
})

applyBtn.addEventListener("click",()=>{
     brandContainer.style.display = "none";
})
























mobiles()