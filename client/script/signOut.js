
const token = JSON.parse(localStorage.getItem("userToken"));
const getUserNameId = JSON.parse(localStorage.getItem("userName"));


const newCustomer = document.querySelector(".new-customer");
const signOut = document.querySelector(".sign-out");
const signLocation = document.querySelector(".sign-location");
const signInBtn = document.querySelector("#signIn-btn");
const signIn = document.querySelector(".signIn");

if(token){
    newCustomer.style.display = "none";
    signOut.innerHTML = "SIGN OUT"
}
else{
    newCustomer.style.display = "display";
    signOut.innerHTML = "SIGN IN"
}


signOut.addEventListener("click",()=>{
    if(token){
        signLocation.href = "#";
        token.splice(0);
        getUserNameId.splice(0);
        localStorage.setItem("userToke",JSON.stringify(token));
        localStorage.setItem("userName",JSON.stringify(getUserNameId));
    }
   
});

signInBtn.addEventListener("click",()=>{
    if(token){
        signIn.href = "#";
        token.splice(0);
        getUserNameId.splice(0);
        localStorage.setItem("userToke",JSON.stringify(token));
        localStorage.setItem("userName",JSON.stringify(getUserNameId));
    }
})

