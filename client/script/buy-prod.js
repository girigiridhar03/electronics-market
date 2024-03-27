

const token = JSON.parse(localStorage.getItem("userToken"));
const buyBtn = document.querySelector(".buy-btn");
buyBtn.addEventListener('click',()=>{
    if(token){
        window.location.href = "../html/orderPlaced.html";
    }
    else{
        console.log("please Login")
    }
})
