
const menuBar = document.querySelector("#icon");
const xmark = document.querySelector("#xmark");
const navTwo = document.querySelector(".nav-two");
const plus = document.querySelector("#plus");
const drop = document.querySelectorAll(".drop");
const mobiles = document.querySelector(".mobiles");
const laptops = document.querySelector(".laptops");
const cameras = document.querySelector(".cameras");
const airConditioners = document.querySelector(".air-conditioners");


menuBar.addEventListener("click",()=>{
    navTwo.style.display = "block"
    xmark.addEventListener("click",()=>{
       navTwo.style.display = "none"
    })
});

drop.forEach(item=>{
   item.addEventListener("click",(e)=>{
       if(e.target.innerText === "MOBILES & TABLETS"){
          if(mobiles.classList.contains("mobiles")){
           mobiles.classList.add("drop-active");
           mobiles.classList.remove("mobiles");
          }
          else{
              mobiles.classList.add("mobiles")
              mobiles.classList.remove("drop-active");
              
          }
       }
       if(e.target.innerText === "LAPTOP"){
          if(laptops.classList.contains("laptops")){
           laptops.classList.add("drop-active");
           laptops.classList.remove("laptops");
          }
          else{
              laptops.classList.add("laptops")
              laptops.classList.remove("drop-active");
          }
       }
       if(e.target.innerText === "CAMERA"){
          if(cameras.classList.contains("cameras")){
           cameras.classList.add("drop-active");
           cameras.classList.remove("cameras")
          }
          else{
              cameras.classList.add("cameras")
              cameras.classList.remove("drop-active");
          }
       }
       if(e.target.innerText === "AIR CONDITIONERS"){
          if(airConditioners.classList.contains("airConditioners")){
           airConditioners.classList.add("drop-active");
           airConditioners.classList.remove("airConditioners")
          }
          else{
           airConditioners.classList.add("airConditioners")
           airConditioners.classList.remove("drop-active");
          }
       }
   })
})