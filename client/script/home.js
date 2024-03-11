
const menuBar = document.querySelector("#menu");
const xmark = document.querySelector("#xmark");
const navTwo = document.querySelector(".nav-two");
const plus = document.querySelectorAll("#plus");
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

plus.forEach(item=>{
   item.addEventListener("click",(e)=>{
      if(e.target.classList.contains("one")){
             if(mobiles.classList.contains("mobiles")){
              mobiles.classList.add("drop-active");
              mobiles.classList.remove("mobiles");
             }
             else{
                 mobiles.classList.add("mobiles")
                 mobiles.classList.remove("drop-active");
           
             }
          }
          if(e.target.classList.contains("two")){
             if(laptops.classList.contains("laptops")){
              laptops.classList.add("drop-active");
              laptops.classList.remove("laptops");
             }
             else{
                 laptops.classList.add("laptops")
                 laptops.classList.remove("drop-active");
             }
          }
          if(e.target.classList.contains("three")){
             if(cameras.classList.contains("cameras")){
              cameras.classList.add("drop-active");
              cameras.classList.remove("cameras")
             }
             else{
                 cameras.classList.add("cameras")
                 cameras.classList.remove("drop-active");
             }
          }
          if(e.target.classList.contains("four")){
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



