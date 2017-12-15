var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
 var newPair = {[item]: (Math.floor(Math.random() * 100) + 1)}
 cart.push(newPair)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  getCart();
  var arr = [];
  console.log(arr);
  var keyArr = [];
  if(Object.keys(getCart()).length > 0){
  for(var c = 0; c < Object.keys(getCart()).length; c++){
    arr.push(Object.keys(getCart())[c]);
  }
}
  for(var a = 0; a < arr.length; a++){
    keyArr.push(Object.keys(getCart()[a]))
  }
  if(keyArr.length < 1){
    console.log("Your shopping cart is empty.");
  }
  if(keyArr.length === 1){
    console.log(`In your cart, you have ${keyArr[0]} at $${getCart()[0][keyArr[0]]}.`)
  }
  if(keyArr.length === 2){
      var contents2 = "In your cart, you have";
        for(var p = 0; p < keyArr.length - 1; p++){
          contents2 += ` ${keyArr[p]} at $${getCart()[p][keyArr[p]]}`;
        } for(var q = keyArr.length-1; q < keyArr.length; q++){
            contents2 += ` and ${keyArr[q]} at $${getCart()[p][keyArr[q]]}.`;
            console.log(contents2);
        }
      }
  if(keyArr.length > 2){
      var contents = "In your cart, you have";
        for(var i = 0; i < keyArr.length - 1; i++){
          contents += ` ${keyArr[i]} at $${getCart()[i][keyArr[i]]},`;
        } for(var j = keyArr.length-1; j < keyArr.length; j++){
            contents += ` and ${keyArr[j]} at $${getCart()[i][keyArr[j]]}.`;
        }
        console.log(contents);
  }
}	  


function total() {
 let t=0
 for (var i = 0, l = cart.length; i < l; i++) {
     for (var item in cart[i]) {
       t += cart[i][item]
     }		  
   }		   
    return t
  }
  

function removeFromCart(item) {
  let t=0
  for (var i = 0, l = cart.length; i < l; i++) {
     if (item === cart.keys[i]) {
       delete cart[i]
       i = (i-1)
       t=1
     }
  }
     if (t === 0) {
       console.log("That item is not in your cart.")
     }
     return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
