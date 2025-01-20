  // JavaScript for sticky behavior for container 3 and 4
  window.onscroll = function(){ 
    makeSticky();
  };

  const stickyContainer = document.querySelector(".stickynav-bar");
  const stickyPoint = stickyContainer.offsetTop;

  function makeSticky() {
    if (window.pageYOffset >= stickyPoint) {
      stickyContainer.classList.add("sticky");
    } else {
      stickyContainer.classList.remove("sticky");
    }
  }

 // function addToCart(){
   // const addCart = document.getElementById('cart-number');
   // const cartAdded = document.getElementById('add-to-cart');

   // if(addCart.innerHTML === '0'){
   //   addCart.innerHTML += 1
   // }
   // else{
  //    addCart.innerHTML -=1;
  //  }
  //}

// Select the elements
const addToCartButtons = document.querySelectorAll(".add-to-cart"); // Select all add-to-cart buttons
const clearCartButton = document.getElementById("clear-cart");
const cartCountElement = document.getElementById("cart-count");
const mobileCount = document.getElementById('mobile-count');
const mobileCount1 = document.getElementById('mobile-count1')

// Set initial cart count
let cartCount = 0;

// Function to increment the cart count and show the notification
function updateCartCount() {
    // Increment cart count
    cartCount++;
    cartCountElement.textContent = cartCount.toString().padStart(1, '0'); // Display count with leading zero
    mobileCount.textContent = cartCount.toString().padStart(1, '0');
    mobileCount1.textContent = cartCount.toString().padStart(1, '0');

    // // Show the notification
    showNotification();
}

// Function to clear the cart count and show the notification
function clearCart() {
    // Reset cart count to zero
    cartCount = 0;
    cartCountElement.textContent = cartCount.toString().padStart(1, '0'); // Reset display to '00'

    // Show the notification
    // showNotification("Cart has been cleared!");
}

// Function to show notification with a custom message
const notification = document.querySelectorAll(".full-cart");
function showNotification() {
  if(notification.textContent == ''){
    notification.textContent = 'Wait while we are updating your cart';
  }
   
    // Set a timeout to hide the notification after 3 seconds
    setTimeout(() => {
      notification.textContent = 'Cart has been updated';
    }, 3000);
}
console.log(showNotification);

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener("click", updateCartCount);
});

// Add event listener to the "Clear Cart" button
clearCartButton.addEventListener("click", clearCart);



 
 // Set the countdown time to 72 hours in seconds
 let timeLeft = 72 * 60 * 60; // 72 hours

 // Update the countdown every second
 const timerInterval = setInterval(() => {
   // Calculate hours, minutes, and seconds
   const hours = Math.floor(timeLeft / 3600);
   const minutes = Math.floor((timeLeft % 3600) / 60);
   const seconds = timeLeft % 60;

   // Update each span with the respective time value
   document.querySelector(".hours").textContent = String(hours).padStart(2, '0');
   document.querySelector(".minutes").textContent = String(minutes).padStart(2, '0');
   document.querySelector(".seconds").textContent = String(seconds).padStart(2, '0');

   // Check if time is up
   if (timeLeft <= 0) {
     clearInterval(timerInterval);
     document.body.innerHTML = "<div>Time's Up!</div>";
   }

   // Decrease time left by 1 second
   timeLeft--;
 }, 1000);



function subscribeNow(){
  const subElement = document.querySelector('.subNow')
  if(subElement.textContent === 'Subscribe'){
    
    setTimeout(function subscribeNow(){
      subElement.textContent = 'Subscribed!!!'
      subElement.classList.add('subscribe1')
      }, 3000)
    subElement.textContent = 'Loading...',
    subElement.style.color = 'black';
  }
  else{
    subElement.textContent = 'Subscribe'
    subElement.classList.remove('subscribe1')
  }
}
//Tooltip 
document.querySelectorAll('.custom-tooltip').forEach(element => {
    const titleText = element.getAttribute('title');
    element.setAttribute('data-tooltip', titleText);
    element.removeAttribute('title');  // Remove default browser tooltip
});


