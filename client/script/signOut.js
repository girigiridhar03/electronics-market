
const token = JSON.parse(localStorage.getItem("userToken"));
const getUserNameId = JSON.parse(localStorage.getItem("userName"));


const newCustomer = document.querySelector(".new-customer");
const signOut = document.querySelector(".sign-out");
const signLocation = document.querySelector(".sign-location");
const signInBtn = document.querySelector("#signIn-btn");
const signIn = document.querySelector(".signIn");


signOut.addEventListener("click",()=>{
    if(token == token[0]){
        console.log(token)
        signLocation.href = "#";
        token.splice(0);
        getUserNameId.splice(0);
        localStorage.setItem("userToken",JSON.stringify(token));
        localStorage.setItem("userName",JSON.stringify(getUserNameId));
        location.reload();
    }
   
});

signInBtn.addEventListener("click",()=>{
    if(token == token[0]){
        signIn.href = "#";
        token.splice(0);
        getUserNameId.splice(0);
        localStorage.setItem("userToken",JSON.stringify(token));
        localStorage.setItem("userName",JSON.stringify(getUserNameId));
        location.reload();
    }
    else{
        signIn.href = "../html/login-signup.html";
    }
})
if(token == null){
    newCustomer.style.display = "display";
    signOut.innerHTML = "SIGN IN"
}
else if(token == token[0]){
    newCustomer.style.display = "none";
    signOut.innerHTML = "SIGN OUT"
}


