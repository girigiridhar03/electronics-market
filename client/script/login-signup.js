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


loginBtn.addEventListener("click",()=>{
    if(loginBtn.innerHTML == "LOGIN"){
     loginSideHeading.innerHTML = "SIGN UP"
      loginBtn.innerHTML = "SIGN UP";
      caption.innerHTML = "With your Email ID to get started";
      nameSpan.style.display = "none";
      inputName.style.display = "none"
    }
    else{
        loginSideHeading.innerHTML = "LOGIN"
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
     console.log(data)
};

getUserDetails();


continueBtn.addEventListener("click",(e)=>{
    e.preventDefault();
   
})