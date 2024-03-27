

const token = JSON.parse(localStorage.getItem("userToken"));
const signin = document.querySelector(".sign-in");

const buyBtn = document.querySelector(".buy-btn");



buyBtn.addEventListener('click',()=>{
   
    if(signin.innerHTML == "Hi,Sign in"){
       token.splice(0)
    }
    else{
        if(token){
            window.location.href = "../html/orderPlaced.html";
        }
        else{
            console.log("please Login")
        }
    }
})
