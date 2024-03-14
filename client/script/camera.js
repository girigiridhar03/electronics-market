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


const url = "http://localhost:5000/camera"

const getData = async()=>{
     let res = await fetch(url);
     let data = await res.json();
     cameraProd(data.prod)
     cameraProducts(data.prod)
}



function cameraProd(prod){
     
     prod.map(item=>{
      
        if(item.title === "Camera"){
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
     let singleCamera = single._id;
       localStorage.setItem("cameraSingle",JSON.stringify(singleCamera));
       window.location.href = "../html/camera-single-product.html";
   
}

function cameraProducts(camera){

     check.forEach(checkBox=>{
         checkBox.addEventListener("click",(e)=>{
          if(checkBox.checked){
               const val = e.target.name;
               camera.filter(cam=>{
               if(cam.brand === val){
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = cam.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = cam.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = cam.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(cam)

         })
          }
          else{
                    productCard.forEach(card=>{
                         card.classList.add('hide-content')
                    })
               }

               
               if(cam.title === val){
                    const card = document.createElement("div");
              card.classList.add("card")
            
              const img = document.createElement("img");
              img.src = cam.image[0];
              const div = document.createElement("div");
              div.classList.add("img-price-details");
              const h6 = document.createElement("h6");
              h6.innerHTML = cam.desc;
              const p = document.createElement("p");
              p.innerHTML = "MRP : ";
              const span = document.createElement("span");
              span.innerHTML = cam.price
              p.append(span);
              div.append(h6,p);
              card.append(img,div)
              mobileContainer.append(card);

              card.addEventListener("click",()=>{
               singleProduct(cam)

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