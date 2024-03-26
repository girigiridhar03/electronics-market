const getCart = JSON.parse(localStorage.getItem("cartItem")) || [];
const cartLength = getCart.length;
const cartItemTotal = document.querySelector(".cart-item-total");
if(cartLength === 0){
    cartItemTotal.innerHTML = 0;
}
else{
    cartItemTotal.innerHTML = cartLength;
}
