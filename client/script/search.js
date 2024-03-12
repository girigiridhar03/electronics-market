const urlHome = "http://localhost:5000/home";
const urlMobile = "http://localhost:5000/mobile";
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

function homeproducts(prod){
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
