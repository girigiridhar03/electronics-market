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


const url = "http://localhost:5000/laptop"

const getData = async()=>{
     let res = await fetch(url);
     let data = await res.json();
     laptopsProd(data.prod)
     laptopProducts(data.prod)
}



function laptopsProd(prod){
     
     prod.map(item=>{
      
        if(item.title === "Laptop"){
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
     let singleLaptop = single._id;
       localStorage.setItem("lapSingle",JSON.stringify(singleLaptop));
       window.location.href = "../html/laptop-single-product.html";
   
}

function laptopProducts(laptop){

     check.forEach(checkBox=>{
         checkBox.addEventListener("click",(e)=>{
          if(checkBox.checked){
               const val = e.target.name;
               laptop.filter(lap=>{
               if(lap.brand === val){
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = lap.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = lap.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = lap.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(lap)

         })
          }
          else{
                    productCard.forEach(card=>{
                         card.classList.add('hide-content')
                    })
               }

               
               if(lap.title === val){
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = lap.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = lap.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = lap.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(lap)

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


 getData()