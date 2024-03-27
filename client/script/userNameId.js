const getUserNameId = JSON.parse(localStorage.getItem("userName"));
const signInName = document.querySelector(".sign-in");
const signIn = document.querySelector(".signIn");
const singUp = document.querySelector(".signUp");
const welcome = document.querySelector(".welcome");
const signInBtn = document.querySelector("#signIn-btn");
const signUpBtn = document.querySelector("#signUp-btn");



const getUserId = async(id)=>{
    if(id){
        let res = await fetch(`http://localhost:5000/users/${id}`,{
            method:"GET",
        })
        let data = await res.json();
        userLogined(data.name)
    }
}

getUserId(getUserNameId);


function userLogined(data){
    if(data){
        signInName.innerHTML = `Hi,${data}`;
        signInName.style.textTransform = "capitalize";
        welcome.innerHTML = `Welcome ${data}`;
        welcome.style.textTransform = "capitalize"
        signIn.innerHTML = "SIGN OUT";
        signUpBtn.style.display = "none"
    }
}


