

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
export const navbarTwo = ()=>{
     return `
     <div class="my-acc-container">
         <div class="welcome-sign">
             <h4>welcome!</h4>
             <div>
                 <a href="#"> <button>SIGN IN</button></a>
                 <a href="#"> <button>SIGN UP</button></a>
             </div>
         </div>
         <i class="fa-solid fa-xmark" id="xmark"></i>
     </div>

     <ul class="container navbar">
         <h2 class="navbar-h2">CATEGORIES</h2>
      <li>
         <a href="#" style="padding: 1rem;">HOME</a>
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
                <li><a href="#">IPHONES</a></li>
                <li><a href="#">SMARTPHONES</a></li>
                <li><a href="#">BASIC PHONES</a></li>
                <li><a href="#">TABLETS</a></li>
                <li><a href="#">IPAD</a></li>
              </ul>
              <ul class="links">
                  <h5 class="headings">MOBILE ACCESSORIES</h5>
                <li><a href="#">POWER BANKS</a></li>
                <li><a href="#">CHARGERS</a></li>
                <li><a href="#">CABLES</a></li>
                <li><a href="#">CASES & COVERS</a></li>
                <li><a href="#">SCREEN PROTECTOR</a></li>
              </ul>
         </div>
     </li>
     <!-- LAPTOPS -->
      <li class="drop">
        <div class="flex">
         <a href="#" class="line">LAPTOP</a>
         <i class="fa-solid fa-plus" id="plus"></i>
        </div>
         <div class="laptops">
             <ul class="links">
                 <h5 class="headings">COMPUTERS</h5>
                  <li><a href="#">LAPTOPS</a></li>
                  <li><a href="#">DESKTOPS</a></li>
                  <li><a href="#">MONITOR</a></li>
             </ul>
             <ul class="links">
                 <h5 class="headings">LAPTOPS</h5>
                  <li><a href="#">ENTRY LAPTOPS</a></li>
                  <li><a href="#">MAINSTREAM LAPTOPS</a></li>
                  <li><a href="#">PREMUIUM LAPTOPS</a></li>
                  <li><a href="#">GAMING LAPTOPS</a></li>
                  <li><a href="#">CONVERTIBLE LAPTOPS</a></li>
                  <li><a href="#">2 IN 1 LAPTOPS</a></li>
                  <li><a href="#">GRAPHIC PERFORMANCE LAPTOPS</a></li>
                  
             </ul>
             <ul class="links">
                 <h5 class="headings">MONITORS</h5>
                  <li><a href="#">FULL HD MONITOR</a></li>
                  <li><a href="#">GAMING MONITOR</a></li>                     
             </ul>
             <ul class="links">
                 <h5 class="headings">DESKTOPS</h5>
                  <li><a href="#">ALL IN ONE DESKTOPS</a></li>
                  <li><a href="#">IMAC</a></li>                     
                  <li><a href="#">MAC STUDIO</a></li>                     
             </ul>
         </div>
     </li>
     <!-- CAMERA -->
      <li class="drop">
       <div class="flex">
         <a href="#" class="line">CAMERA</a>
         <i class="fa-solid fa-plus" id="plus"></i>
       </div>
         <div class="cameras">
           <ul class="links">
             <h5 class="headings">CAMERA TYPE</h5>
             <li><a href="#">DSLR</a></li>
             <li><a href="#">ACTION CAMERA</a></li>
             <li><a href="#">POWERSHOT</a></li>
             <li><a href="#">CAMERA BATTERY</a></li>
             <li><a href="#">WEBCAM</a></li>
             <li><a href="#">SMART SECURITY CAMERA</a></li>
             <li><a href="#">INSTANT CAMERS</a></li>
           </ul>
            
         </div>
     </li>
     <!-- AIR CONDITIONERS -->
      <li class="drop">
         <div class="flex">
             <a href="#" class="line">AIR CONDITIONERS</a>
             <i class="fa-solid fa-plus" id="plus"></i>
         </div>
         <div class="air-conditioners">
              <ul class="links">
                 <h5 class="headings">AC TYPE</h5>
                 <li><a href="#">SPLIT ACS</a></li>
                 <li><a href="#">WINDOW ACS</a></li>
                 <li><a href="#">PORTABLES ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">CAPACITY</h5>
                 <li><a href="#">1 TON AND BELOW ACS</a></li>
                 <li><a href="#">1.1 TON TO 1.5 TON ACS</a></li>
                 <li><a href="#">1.6 TON TO 1.9 TON ACS</a></li>
                 <li><a href="#">2 TON AND ABOVE ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">TECHNOLOGY</h5>
                 <li><a href="#">INVERTER ACS</a></li>
                 <li><a href="#">FIXED SPEED ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">ENERGY RATING</h5>
                 <li><a href="#">5 STAR ACS</a></li>
                 <li><a href="#">4 STAR ACS</a></li>
                 <li><a href="#">3 STAR ACS</a></li>
                 <li><a href="#">2 STAR ACS</a></li>
                 <li><a href="#">1 STAR ACS</a></li>
              </ul>
              <ul class="links">
                 <h5 class="headings">IDEAL ROOM SIZE</h5>
                 <li><a href="#">UPTO 120 SQFT ACS</a></li>
                 <li><a href="#">121 SQFT TO 180 SQFT ACS</a></li>
                 <li><a href="#">181 SQFT TO 240 SQFT ACS</a></li>
                 <li><a href="#">241 SQFT TO 300 SQFT ACS</a></li>
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