const url = `http://localhost:5000/home`;

const getData = async()=>{
    let res = await fetch(url);
    let data = await res.json();
    let images = data.prod;
    image(images);
    let productImages = data.prod;
    sectionOne(productImages);
     onlyLaptops(productImages);
     onlyTabs(productImages);
     onlyMac(productImages);
     onlyMobiles(productImages);
     onlyCamera(productImages)
    
}

getData()
const imageSlider = document.querySelector(".image-silder");
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const rightButton = document.querySelector("#right");
const leftButton = document.querySelector("#left");
const productsOne = document.querySelector(".products-one");
const productContainer = document.querySelector("#product-container");
const rightTwo = document.querySelector("#right-two");
const leftTwo = document.querySelector("#left-two");
const productContainerTwo = document.querySelector("#product-container-two");
const rightThree = document.querySelector("#right-three");
const leftThree = document.querySelector("#left-three");
const productContainerThree = document.querySelector("#product-container-three");
const rightFour = document.querySelector("#right-four");
const leftFour = document.querySelector("#left-four");
const productContainerFour = document.querySelector("#product-container-four");
const rightFive = document.querySelector("#right-five");
const leftFive = document.querySelector("#left-five");
const productContainerFive = document.querySelector("#product-container-five");
const rightSix = document.querySelector("#right-six");
const leftSix = document.querySelector("#left-six");


let ig = []
let counter = 0
function image(img){ 
    
    img.map(item=>{
        if(item.desc === "banner"){
            const div = document.createElement("div");
            const span = document.createElement("span");
            const img = document.createElement("img");
            img.src = item.image;
            span.append(img);
            div.append(span);
            imageSlider.append(div);
            ig.push(img);
        }
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

rightTwo.addEventListener("click",()=>{
    productContainer.style.scrollbehavior = "smooth"
     productContainer.scrollLeft += 900
})
leftTwo.addEventListener("click",()=>{
    productContainer.style.scrollbehavior = "smooth"
     productContainer.scrollLeft -= 900
})

rightThree.addEventListener("click",()=>{
    productContainerTwo.style.scrollbehavior = "smooth"
     productContainerTwo.scrollLeft += 900
})
leftThree.addEventListener("click",()=>{
    productContainerTwo.style.scrollbehavior = "smooth"
     productContainerTwo.scrollLeft -= 900
})
rightFour.addEventListener("click",()=>{
    productContainerThree.style.scrollbehavior = "smooth"
     productContainerThree.scrollLeft += 900
})
leftFour.addEventListener("click",()=>{
    productContainerThree.style.scrollbehavior = "smooth"
     productContainerThree.scrollLeft -= 900
})
rightFive.addEventListener("click",()=>{
    productContainerFour.style.scrollbehavior = "smooth"
     productContainerFour.scrollLeft += 900
})
leftFive.addEventListener("click",()=>{
    productContainerFour.style.scrollbehavior = "smooth"
     productContainerFour.scrollLeft -= 900
})
rightSix.addEventListener("click",()=>{
    productContainerFive.style.scrollbehavior = "smooth"
     productContainerFive.scrollLeft += 900
})
leftSix.addEventListener("click",()=>{
    productContainerFive.style.scrollbehavior = "smooth"
     productContainerFive.scrollLeft -= 900
})
let storedItem = []
function sectionOne(products){
    
   products.map(prod=>{
    if(prod.title === "AC"){
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
 
         div.addEventListener("click",()=>{
              singleProduct(prod);
         })
    }
   })
}



function singleProduct(prod){
     let singleProd = prod._id;
       localStorage.setItem("single",JSON.stringify(singleProd));
       window.location.href = "../html/single-product.html";
}

function onlyLaptops(prod){
    let storeLaptop = [];
    prod.map(item=>{
      if(item.title === "Laptop"){
       storeLaptop.push(item)    
     
      }
    })   
    let homePageLaptops = storeLaptop.slice(0,8);

    homePageLaptops.map(lap=>{
     const div = document.createElement("div");
        div.classList.add("product");
        const prodImage = document.createElement("img")
        prodImage.src = lap.image[0];
        const divTwo = document.createElement("div");
        divTwo.classList.add("desc");
        const h5 = document.createElement("h5");
        h5.innerHTML = lap.desc;
        const p = document.createElement("p");
        p.innerHTML = "MRP:";
        const span = document.createElement("span");
        span.innerHTML = lap.price;       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productContainer.append(div);

        div.addEventListener("click",()=>{ 
            singleProduct(lap);
       })
    })
    
}

function onlyTabs(prod){
    let storeTabs = [];
    prod.map(item=>{
      if(item.title === "mobile tab"){
       storeTabs.push(item)
      }
    })   
    let homePageTabs = storeTabs;

    homePageTabs.map(tab=>{
     const div = document.createElement("div");
        div.classList.add("product");
        const prodImage = document.createElement("img")
        prodImage.src = tab.image[0];
        const divTwo = document.createElement("div");
        divTwo.classList.add("desc");
        const h5 = document.createElement("h5");
        h5.innerHTML = tab.desc;
        const p = document.createElement("p");
        p.innerHTML = "MRP:";
        const span = document.createElement("span");
        span.innerHTML = tab.price;       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productContainerTwo.append(div);

        div.addEventListener("click",()=>{ 
            singleProduct(tab);
       })
    })
    
}


function onlyMac(prod){
    let storeMac = [];
    prod.map(item=>{
      if(item.brand === "Apple MacBook"){
        storeMac.push(item)
      }
    })   
    let homePageMac = storeMac;
   
    homePageMac.map(mac=>{
     const div = document.createElement("div");
        div.classList.add("product");
        const prodImage = document.createElement("img")
        prodImage.src = mac.image[0];
        const divTwo = document.createElement("div");
        divTwo.classList.add("desc");
        const h5 = document.createElement("h5");
        h5.innerHTML = mac.desc;
        const p = document.createElement("p");
        p.innerHTML = "MRP:";
        const span = document.createElement("span");
        span.innerHTML = mac.price;       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productContainerThree.append(div);

        div.addEventListener("click",()=>{ 
            singleProduct(mac);
       })
    })
    
}



function onlyMobiles(prod){
    let storeMobiles = [];
    prod.map(item=>{
      if(item.title === "mobile"){
        storeMobiles.push(item);
      }
    })   
    let homePageMobile = storeMobiles;
   
    homePageMobile.map(mobile=>{
     const div = document.createElement("div");
        div.classList.add("product");
        const prodImage = document.createElement("img")
        prodImage.src = mobile.image[0];
        const divTwo = document.createElement("div");
        divTwo.classList.add("desc");
        const h5 = document.createElement("h5");
        h5.innerHTML = mobile.desc;
        const p = document.createElement("p");
        p.innerHTML = "MRP:";
        const span = document.createElement("span");
        span.innerHTML = mobile.price;       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productContainerFour.append(div);

        div.addEventListener("click",()=>{ 
            singleProduct(mobile);
       })
    })
    
}


function onlyCamera(prod){
    let storeCamera = [];
    prod.map(item=>{
      if(item.brand === "GoPro"){
        storeCamera.push(item);
      }
    })   
    let homePageCamera = storeCamera;
   
    homePageCamera.map(cam=>{
     const div = document.createElement("div");
        div.classList.add("product");
        const prodImage = document.createElement("img")
        prodImage.src = cam.image[0];
        const divTwo = document.createElement("div");
        divTwo.classList.add("desc");
        const h5 = document.createElement("h5");
        h5.innerHTML = cam.desc;
        const p = document.createElement("p");
        p.innerHTML = "MRP:";
        const span = document.createElement("span");
        span.innerHTML = cam.price;       
        p.append(span);
        divTwo.append(h5,p);
        div.append(prodImage,divTwo);
        productContainerFive.append(div);

        div.addEventListener("click",()=>{ 
            singleProduct(cam);
       })
    })
    
}





// const div = document.createElement("div");
//         div.classList.add("product");
//         const prodImage = document.createElement("img")
//         prodImage.src = item.image[0];
//         const divTwo = document.createElement("div");
//         divTwo.classList.add("desc");
//         const h5 = document.createElement("h5");
//         h5.innerHTML = item.desc;
//         const p = document.createElement("p");
//         p.innerHTML = "MRP:";
//         const span = document.createElement("span");
//         span.innerHTML = item.price;       
//         p.append(span);
//         divTwo.append(h5,p);
//         div.append(prodImage,divTwo);
//         productContainer.append(div);