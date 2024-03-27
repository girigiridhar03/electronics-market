

 export const navbar = ()=>{
     return ` <div class="container">
     <i class="fa-solid fa-bars" id="menu"></i>
    <a href="../html/index.html"> <h1>Electronics <span>Market</span></h1></a>
      <!-- search bar -->
      <div class="search-bar">
          <input type="text" placeholder="Search for products" id="search-prod">
          <i class="fa-solid fa-magnifying-glass"></i>
          <div class="search-product-container">
             <h5>PRODUCTS</h5>
             <div class="product-image-container">
               

             </div>
          </div>
      </div>
      <!-- sign in -->
      <div class="sign-div">
      <a href="../html/login-signup.html"><p class="sign-in">Hi,Sign in</p></a>
         <div class="sign-box">
             <a href="../html/login-signup.html" class="sign-location"><button class="sign-out">Sign In</button></a>
             <p class="new-customer">New customer? <a href="../html/login-signup.html">Sign Up</a> </p>
         </div>
     </div>

      <!-- cart -->
     <div class="cart">
     <a href="../html/cart.html"><i class="fa-solid fa-cart-shopping"></i></a> 
         <p class="cart-item-total">0</p>
     </div>
  </div>`
 }
export const navbarTwo = ()=>{
     return `
     <div class="my-acc-container">
         <div class="welcome-sign">
             <h4 class="welcome">welcome!</h4>
             <div>
                 <button id="signIn-btn"><a href="../html/login-signup.html" class="signIn">SIGN IN</a></button>
                 <button id="signUp-btn"><a href="../html/login-signup.html" class="signUp">SIGN UP</a></button>
             </div>
         </div>
         <i class="fa-solid fa-xmark" id="xmark"></i>
     </div>

     <ul class="container navbar">
         <h2 class="navbar-h2">CATEGORIES</h2>
      <li>
         <a href="../html/index.html" style="padding: 1rem;">HOME</a>
     </li>
     <!-- MOBILES & TABLETS -->
      <li class="drop">
         <div class="flex">
             <a href="../html/mobiles.html" class="line">MOBILES & TABLETS</a>
             <i class="fa-solid fa-plus" id="plus"></i>
         </div>
         <div class="mobiles">
              <ul class="links">
                  <h5 class="headings">TYPE</h5>
                <li><a href="../html/mobiles.html">IPHONES</a></li>
                <li><a href="../html/mobiles.html">SMARTPHONES</a></li>
                <li><a href="../html/mobiles.html">BASIC PHONES</a></li>
                <li><a href="../html/mobiles.html">TABLETS</a></li>
                <li><a href="../html/mobiles.html">IPAD</a></li>
              </ul>
              <ul class="links">
                  <h5 class="headings">MOBILE ACCESSORIES</h5>
                <li><a href="../html/mobiles.html">POWER BANKS</a></li>
                <li><a href="../html/mobiles.html">CHARGERS</a></li>
                <li><a href="../html/mobiles.html">CABLES</a></li>
                <li><a href="../html/mobiles.html">CASES & COVERS</a></li>
                <li><a href="../html/mobiles.html">SCREEN PROTECTOR</a></li>
              </ul>
         </div>
     </li>
     <!-- LAPTOPS -->
      <li class="drop">
        <div class="flex">
         <a href="../html/laptop.html" class="line">LAPTOP</a>
         <i class="fa-solid fa-plus" id="plus"></i>
        </div>
         <div class="laptops">
             <ul class="links">
                 <h5 class="headings">COMPUTERS</h5>
                  <li><a href="../html/laptop.html">LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">DESKTOPS</a></li>
                  <li><a href="../html/laptop.html">MONITOR</a></li>
             </ul>
             <ul class="links">
                 <h5 class="headings">LAPTOPS</h5>
                  <li><a href="../html/laptop.html">ENTRY LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">MAINSTREAM LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">PREMUIUM LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">GAMING LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">CONVERTIBLE LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">2 IN 1 LAPTOPS</a></li>
                  <li><a href="../html/laptop.html">GRAPHIC PERFORMANCE LAPTOPS</a></li>
                  
             </ul>
             <ul class="links">
                 <h5 class="headings">MONITORS</h5>
                  <li><a href="../html/laptop.html">FULL HD MONITOR</a></li>
                  <li><a href="../html/laptop.html">GAMING MONITOR</a></li>                     
             </ul>
             <ul class="links">
                 <h5 class="headings">DESKTOPS</h5>
                  <li><a href="../html/laptop.html">ALL IN ONE DESKTOPS</a></li>
                  <li><a href="../html/laptop.html">IMAC</a></li>                     
                  <li><a href="../html/laptop.html">MAC STUDIO</a></li>                     
             </ul>
         </div>
     </li>
     <!-- CAMERA -->
      <li class="drop">
       <div class="flex">
         <a href="../html/camera.html" class="line">CAMERA</a>
         <i class="fa-solid fa-plus" id="plus"></i>
       </div>
         <div class="cameras">
           <ul class="links">
             <h5 class="headings">CAMERA TYPE</h5>
             <li><a href="../html/camera.html">DSLR</a></li>
             <li><a href="../html/camera.html">ACTION CAMERA</a></li>
             <li><a href="../html/camera.html">POWERSHOT</a></li>
             <li><a href="../html/camera.html">CAMERA BATTERY</a></li>
             <li><a href="../html/camera.html">WEBCAM</a></li>
             <li><a href="../html/camera.html">SMART SECURITY CAMERA</a></li>
             <li><a href="../html/camera.html">INSTANT CAMERS</a></li>
           </ul>
            
         </div>
     </li>
     <!-- AIR CONDITIONERS -->
      <li class="drop">
         <div class="flex">
             <a href="../html/ac.html" class="line">AIR CONDITIONERS</a>
             <i class="fa-solid fa-plus" id="plus"></i>
         </div>
         <div class="air-conditioners">
              <ul class="links">
                 <h5 class="headings">AC TYPE</h5>
                 <li><a href="../html/ac.html">SPLIT ACS</a></li>
                 <li><a href="../html/ac.html">WINDOW ACS</a></li>
                 <li><a href="../html/ac.html">PORTABLES ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">CAPACITY</h5>
                 <li><a href="../html/ac.html">1 TON AND BELOW ACS</a></li>
                 <li><a href="../html/ac.html">1.1 TON TO 1.5 TON ACS</a></li>
                 <li><a href="../html/ac.html">1.6 TON TO 1.9 TON ACS</a></li>
                 <li><a href="../html/ac.html">2 TON AND ABOVE ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">TECHNOLOGY</h5>
                 <li><a href="../html/ac.html">INVERTER ACS</a></li>
                 <li><a href="../html/ac.html">FIXED SPEED ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">ENERGY RATING</h5>
                 <li><a href="../html/ac.html">5 STAR ACS</a></li>
                 <li><a href="../html/ac.html">4 STAR ACS</a></li>
                 <li><a href="../html/ac.html">3 STAR ACS</a></li>
                 <li><a href="../html/ac.html">2 STAR ACS</a></li>
                 <li><a href="../html/ac.html">1 STAR ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">IDEAL ROOM SIZE</h5>
                 <li><a href="../html/ac.html">UPTO 120 SQFT ACS</a></li>
                 <li><a href="../html/ac.html">121 SQFT TO 180 SQFT ACS</a></li>
                 <li><a href="../html/ac.html">181 SQFT TO 240 SQFT ACS</a></li>
                 <li><a href="../html/ac.html">241 SQFT TO 300 SQFT ACS</a></li>
              </ul>
         </div>
     </li>
     </ul>`
}


export const footer = ()=>{
     return `
     <div class="footer-container">
        <ul class="usefull-links">
            <h5>Useful Links</h5>
             <li>HOME</li>
             <li>ABOUT US</li>
             <li>STORE LOCATOR</li>
             <li>CAREERS</li>
             <li>CONTACT US</li>
             <li>BRAND STRORES</li>
             <li>E-WASTE</li>
             <li>BLOG</li>
             <li>LOYALITY</li>
             <li>GIFT VOUCHERS</li>
             <li>BECOME AN AFFILIATE</li>
        </ul>
        <ul class="categories">
            <h5>Categories</h5>
             <li>AIR CONDITIONERS</li>
             <li>MOBILE & TABLETS</li>
             <li>LAPTOPS</li>
             <li>CAMERA</li>
             <li>ACCESSORIES</li>
        </ul>
        <ul class="acc">
            <h5>My Account</h5>
             <li>MY ACCOUNT</li>
             <li>MY ORDERS</li>
        </ul>
        <ul class="help-desk">
           <h5>Help Desk</h5>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>PAYMENT & RETURNS</li>
            <li>SHIPPING OPTION</li>
            <li>HELP/FAQ</li>
            <li>LOYALITY PROGRAMME</li>
       </ul>
        <div>
           <h5>Newsletter</h5>
           <p>Stay in touch with us,get product updates offers discounts <br> directly on your inbox</p>
            <div class="details">
                <input type="email" placeholder="Please provide your Email address here">
                <button><img src="https://d2xamzlzrdbdbn.cloudfront.net/imgwebsite/send-button.png" alt=""></button>
            </div>
            
            <div class="content">
                <h5>Follow Us On</h5>
                <div class="icons">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/1.Fb.png" alt="">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/2.Insta.png" alt="">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/3.Youtube.png" alt="">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/NewTwitter.png" alt="">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/5.Linkedin.png" alt="">
                   <img src="https://d2xamzlzrdbdbn.cloudfront.net/imagesrewamp/socialIcon/6.whatsapp.png" alt="">
                </div>
            </div>
        </div>
     </div>
       <a href="index.html"><h1>Electronics <span>Market</span></h1></a>
  `
}