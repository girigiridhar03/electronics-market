import { navbar } from "./script.js";
import { navbarTwo } from "./script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav-two");
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
import { footer } from "./script.js";
const footerSection = document.querySelector(".footer-section");


const url = "http://localhost:5000/mobile";

const mobiles = async()=>{
     let res = await fetch(url);
     let data = await res.json();
     console.log(data);
}

mobiles()