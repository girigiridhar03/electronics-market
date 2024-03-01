import { navbar } from "../script/script.js";
import { navbarTwo } from "../script/script.js";
const nav = document.querySelector("nav");
const navtwo = document.querySelector(".nav");
console.log(navbarTwo())
nav.innerHTML = navbar();
navtwo.innerHTML = navbarTwo();
console.log(navbar)