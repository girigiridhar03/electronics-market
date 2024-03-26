const urlHome = "http://localhost:5000/home";
const urlMobile = "http://localhost:5000/mobile";
const urlLaptop = "http://localhost:5000/laptop";
const urlCamera = "http://localhost:5000/camera";
const urlAc = "http://localhost:5000/ac";
const searchProducts = document.querySelector("#search-prod")
const searchProductContainer = document.querySelector(".search-product-container");
const productImageContainer = document.querySelector(".product-image-container");

const getHome = async()=>{
      let res = await fetch(urlHome);
      let data = await res.json();
     
      homeproducts(data.prod)
}
getHome()

const getMobile = async()=>{
    let res = await fetch(urlMobile);
    let data = await res.json();
    mobileproducts(data.prod)
    
}

getMobile()

const getLaptop = async()=>{
  let res = await fetch(urlLaptop);
  let data = await res.json();
  laptopProducts(data.prod)
}
getLaptop();


const getCamera = async()=>{
  let res = await fetch(urlCamera);
  let data = await res.json();
  cameraProducts(data.prod)
}
getCamera();


const getAc = async()=>{
  let res = await fetch(urlAc);
  let data = await res.json();
  acProducts(data.prod)
}
getAc();



function homeproducts(prod){
    searchProducts.addEventListener("input",()=>{
       let val = searchProducts.value;
       if(val.length > 0){
       searchProductContainer.style.display = "block";
        prod.filter(item=>{
        if(item.desc.toLowerCase().includes(val.toLowerCase())){
           const div = document.createElement("div");
           div.classList.add("search-images")

           const div2 = document.createElement("div");
           const img = document.createElement("img");
           img.src = item.image[0];
           const p1 = document.createElement("p");
           p1.innerHTML = item.desc;
           div2.append(img,p1);
           const div3 = document.createElement("div");
           div3.classList.add('search-price');
           const p2 = document.createElement("p");
           p2.innerHTML = "MRP : ";
           const span = document.createElement("span");
           span.innerHTML = item.price;
           p2.append(span);
           div3.append(p2)
           div.append(div2,div3)
           productImageContainer.append(div)
           div.addEventListener("click",()=>{
           
            singleProduct(item);
       })
      
        }
        })
       }
       else{
        searchProductContainer.style.display = "none"
       }
    })

}
function mobileproducts(prod){
    searchProducts.addEventListener("keyup",()=>{
       let val = searchProducts.value;
       if(val.length > 0){
       searchProductContainer.style.display = "block";
        prod.filter(item=>{
           
        if(item.desc.toLowerCase().includes(val.toLowerCase())){
           const div = document.createElement("div");
           div.classList.add("search-images")

           const div2 = document.createElement("div");
           const img = document.createElement("img");
           img.src = item.image[0];
           const p1 = document.createElement("p");
           p1.innerHTML = item.desc;
           div2.append(img,p1);
           const div3 = document.createElement("div");
           div3.classList.add('search-price');
           const p2 = document.createElement("p");
           p2.innerHTML = "MRP : ";
           const span = document.createElement("span");
           span.innerHTML = item.price;
           p2.append(span);
           div3.append(p2)
           div.append(div2,div3)
           productImageContainer.append(div)

          
         div.addEventListener("click",()=>{
            mobile(item)

      })
      
        }

        })
       }
       else{
        searchProductContainer.style.display = "none"
       }
    })

}
function laptopProducts(prod){
  searchProducts.addEventListener("keyup",()=>{
     let val = searchProducts.value;
     if(val.length > 0){
     searchProductContainer.style.display = "block";
      prod.filter(item=>{
         
      if(item.desc.toLowerCase().includes(val.toLowerCase())){
         const div = document.createElement("div");
         div.classList.add("search-images")

         const div2 = document.createElement("div");
         const img = document.createElement("img");
         img.src = item.image[0];
         const p1 = document.createElement("p");
         p1.innerHTML = item.desc;
         div2.append(img,p1);
         const div3 = document.createElement("div");
         div3.classList.add('search-price');
         const p2 = document.createElement("p");
         p2.innerHTML = "MRP : ";
         const span = document.createElement("span");
         span.innerHTML = item.price;
         p2.append(span);
         div3.append(p2)
         div.append(div2,div3)
         productImageContainer.append(div)

        
       div.addEventListener("click",()=>{
          laptop(item)

    })
    
      }

      })
     }
     else{
      searchProductContainer.style.display = "none"
     }
  })

}


function cameraProducts(prod){
  searchProducts.addEventListener("keyup",()=>{
     let val = searchProducts.value;
     if(val.length > 0){
     searchProductContainer.style.display = "block";
      prod.filter(item=>{
         
      if(item.desc.toLowerCase().includes(val.toLowerCase())){
         const div = document.createElement("div");
         div.classList.add("search-images")

         const div2 = document.createElement("div");
         const img = document.createElement("img");
         img.src = item.image[0];
         const p1 = document.createElement("p");
         p1.innerHTML = item.desc;
         div2.append(img,p1);
         const div3 = document.createElement("div");
         div3.classList.add('search-price');
         const p2 = document.createElement("p");
         p2.innerHTML = "MRP : ";
         const span = document.createElement("span");
         span.innerHTML = item.price;
         p2.append(span);
         div3.append(p2)
         div.append(div2,div3)
         productImageContainer.append(div)

        
       div.addEventListener("click",()=>{
          camera(item)

    })
    
      }

      })
     }
     else{
      searchProductContainer.style.display = "none"
     }
  })

}


function acProducts(prod){
  searchProducts.addEventListener("keyup",()=>{
     let val = searchProducts.value;
     if(val.length > 0){
     searchProductContainer.style.display = "block";
      prod.filter(item=>{
         
      if(item.desc.toLowerCase().includes(val.toLowerCase())){
         const div = document.createElement("div");
         div.classList.add("search-images")

         const div2 = document.createElement("div");
         const img = document.createElement("img");
         img.src = item.image[0];
         const p1 = document.createElement("p");
         p1.innerHTML = item.desc;
         div2.append(img,p1);
         const div3 = document.createElement("div");
         div3.classList.add('search-price');
         const p2 = document.createElement("p");
         p2.innerHTML = "MRP : ";
         const span = document.createElement("span");
         span.innerHTML = item.price;
         p2.append(span);
         div3.append(p2)
         div.append(div2,div3)
         productImageContainer.append(div)

        
       div.addEventListener("click",()=>{
          ac(item)

    })
    
      }

      })
     }
     else{
      searchProductContainer.style.display = "none"
     }
  })

}


function singleProduct(prod){
    let singleProd = prod._id;
      localStorage.setItem("mobile",JSON.stringify(singleProd));
      window.location.href = "../html/single-product.html";
  
}


function mobile(single){
    let singleMobile = single._id;
      localStorage.setItem("mobileSingle",JSON.stringify(singleMobile));
      window.location.href = "../html/mobile-single-product.html";
  
}

function laptop(single){
    let singleMobile = single._id;
      localStorage.setItem("mobileSingle",JSON.stringify(singleMobile));
      window.location.href = "../html/laptop-single-product.html";
  
}
function camera(single){
    let singleMobile = single._id;
      localStorage.setItem("mobileSingle",JSON.stringify(singleMobile));
      window.location.href = "../html/camera-single-product.html";
  
}
function ac(single){
    let singleMobile = single._id;
      localStorage.setItem("mobileSingle",JSON.stringify(singleMobile));
      window.location.href = "../html/ac-single-product.html";
  
}
