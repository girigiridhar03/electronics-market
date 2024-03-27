import { navbar } from "./script.js";
import { navbarTwo } from "./script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav-two");
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
import { footer } from "./script.js";
const footerSection = document.querySelector(".footer-section");
footerSection.innerHTML = footer();

const userDetailsUrl = "http://localhost:5000/users";

const loginBtn = document.querySelector(".login-btn");
const nameSpan = document.querySelector(".name-span");
const inputName = document.querySelector(".input-name");
const loginSideHeading = document.querySelector(".login-side-heading");
const caption = document.querySelector(".caption");
const continueBtn = document.querySelector(".continue-btn");
const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const userPassword = document.querySelector("#user-password");
const messageBox = document.querySelector(".message-box");
const passwordEye = document.querySelector("#password-eye");


loginBtn.addEventListener("click",()=>{
    if(loginBtn.innerHTML == "LOGIN"){
      loginSideHeading.innerHTML = "LOGIN"
      loginBtn.innerHTML = "SIGN UP";
      caption.innerHTML = "With your Email ID to get started";
      nameSpan.style.display = "none";
      inputName.style.display = "none"
    }
    else{
        loginSideHeading.innerHTML = "SIGN UP"
        loginBtn.innerHTML = "LOGIN";
        caption.innerHTML = "Get access to your account";
        nameSpan.style.display = "block";
        inputName.style.display = "block"
    }
});


const  getUserDetails = async()=>{
    let res = await fetch(userDetailsUrl,{
       method:"GET"
    });
    let data = await res.json();
};

getUserDetails();



        continueBtn.addEventListener("click",(e)=>{
            e.preventDefault();
           if(loginSideHeading.innerHTML == "SIGN UP"){
               if(userName.value == "" || userEmail.value == "" || userPassword.value == "" ){
                   messageBox.style.display = "block";
                   setTimeout(() => {
                       messageBox.style.display = "none"
                   }, 2000);
               }
               else{
                   let userDetails = 
                       {
                           "name": userName.value,
                           "email": userEmail.value,
                           "password": userPassword.value
                       }
                   
                   registerUserDetails(userDetails);
               }
             
           }
           else{
            if(userEmail.value == "" || userPassword.value == ""){
                messageBox.style.display = "block";
                setTimeout(() => {
                    messageBox.style.display = "none"
                }, 2000);
            }
            else{
                let userLoginDetails = 
                    {
                        "email": userEmail.value,
                        "password": userPassword.value
                    }
                
                    loginUserDetails(userLoginDetails);
                   
            }
           }

           userName.value = "";
           userEmail.value = "";
           userPassword.value = "";
          
        });
        




const registerUserDetails = async(details)=>{ 
    let res = await fetch(`http://localhost:5000/users/register`,{
        method:"POST",
        body : JSON.stringify(details),
        headers:{
            "Content-Type":"Application/json"
        }
        
    });
    let data = await res.json();

   if(res.status == "200"){
    messageBox.innerHTML = data.message;
    messageBox.style.display = "block";
    messageBox.style.color = "green";
    setTimeout(() => {
        messageBox.style.display = "none"
    }, 2000);
   }
   else if(res.status == "400"){
      messageBox.innerHTML = data.message;
      messageBox.style.display = "block";
      setTimeout(() => {
        messageBox.style.display = "none"
    }, 2000);
   }

}


const loginUserDetails = async(details)=>{ 
    try {
        let res = await fetch(`http://localhost:5000/users/login`,{
            method:"POST",
            body : JSON.stringify(details),
            headers:{
                "Content-Type":"Application/json"
            }
        });
        let data = await res.json();
        let userNameId = [];
        userNameId.push(data.user);
        localStorage.setItem("userName",JSON.stringify(userNameId));
       if(res.status == "200"){
        messageBox.style.display = "block";
        messageBox.innerHTML = data.message;
        messageBox.style.color = "green";
        setTimeout(() => {
            messageBox.style.display = "none"
        }, 2000);
        let token = [];
        token.push(data.token)
        localStorage.setItem("userToken",JSON.stringify(token));
        location.href = "../html/index.html";
       } 
       else if(res.status == "500"){
        messageBox.style.display = "block";
        messageBox.innerHTML = data.message;
        messageBox.style.color = "red";
        setTimeout(() => {
            messageBox.style.display = "none"
        }, 2000);
       }
    } catch (error) {
        console.log(error)
    }
       
}


passwordEye.addEventListener("click",()=>{
    if(userPassword.value == ""){
        passwordEye.classList.add("fa-eye-slash");
    }
    else{
        if(userPassword.type == "password"){
            userPassword.type = "text";
            passwordEye.classList.add("fa-eye");
        }
        else{
            userPassword.type = "password";
            passwordEye.classList.add("fa-eye-slash");
        }
    }
})


