 const nav = document.querySelector('nav');

 export const navbar = ()=>{
     return `<div class="container">
     <i class="fa-solid fa-bars" id="icon"></i>
    <a href="#"> <h1>Electronics <span>Market</span></h1></a>
      <!-- search bar -->
      <div class="search-bar">
          <input type="text" placeholder="Search for products">
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <!-- sign in -->
      <div class="sign-div">
         <p class="sign-in">Hi,Sign in</p>
         <div class="sign-box">
             <a href="#"><button>Sign In</button></a>
             <p>New customer? <a href="#">Sign Up</a> </p>
         </div>
     </div>

      <!-- cart -->
     <div class="cart">
         <i class="fa-solid fa-cart-shopping"></i>
         <p>0</p>
     </div>
  </div>`
 }

