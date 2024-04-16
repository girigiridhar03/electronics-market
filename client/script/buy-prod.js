

const token = JSON.parse(localStorage.getItem("userToken"));
const signin = document.querySelector(".sign-in");

const buyBtn = document.querySelector(".buy-btn");



buyBtn.addEventListener('click',()=>{
   
        if(token == token[0]){
          
            window.location.href = "../html/orderPlaced.html";
        }
        else{
            window.location.href = "../html/login-signup.html";
          
        }
    
})
