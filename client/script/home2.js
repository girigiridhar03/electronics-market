const url = `http://localhost:5000/home`;

const getData = async()=>{
    let res = await fetch(url);
    let data = await res.json();
    let images = data.prod.slice(0,5);
    let homeProductsOne = data.prod.slice(5,12);
    image(images);
    sectionOne(homeProductsOne)
}

getData()
const imageSlider = document.querySelector(".image-silder");
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const productsOne = document.querySelector(".products-one");



let ig = []
let counter = 0
function image(img){ 
    img.map(item=>{
        const div = document.createElement("div");
        const span = document.createElement("span");
        const img = document.createElement("img");
        img.src = item.image;
        span.append(img);
        div.append(span);
        imageSlider.append(div);
        ig.push(img);
    })
  
    ig.forEach((slides,index)=>{
       slides.style.left = `${index*100}%`;
    });

    function slideImages(){
        ig.forEach(slide=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        })
    }
    rightBtn.addEventListener("click",()=>{
        if(counter < ig.length-1){
            counter++;
             slideImages()
        }
    })
    leftBtn.addEventListener("click",()=>{
        if(counter !=0){
            counter--;
            slideImages();
        }
    })
}

rightButton.addEventListener("click",()=>{
    productsOne.style.scrollbehavior = "smooth"
     productsOne.scrollLeft += 900
})
leftButton.addEventListener("click",()=>{
    productsOne.style.scrollbehavior = "smooth"
     productsOne.scrollLeft -= 900
})



function sectionOne(products){
   products.map(prod=>{
       const div = document.createElement("div");
       div.classList.add("product");
       const prodImage = document.createElement("img")
       prodImage.src = prod.image[0];
       const divTwo = document.createElement("div");
       divTwo.classList.add("desc");
       const h5 = document.createElement("h5");
       h5.innerHTML = prod.desc;
       const p = document.createElement("p");
       p.innerHTML = "MRP:";
       const span = document.createElement("span");
       span.innerHTML = prod.price
       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productsOne.append(div);
   })
}