// TASK 1

// 1. 








// create an array which represents the shopping cart
let cart = [];

// selecting all the elements that we need
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");
 
// add a click event to the "Add Item" button
addItemButton.addEventListener("click", function () {

  // create a variable for storing the user input (cart item)
  let item = itemInput.value;

  // check if input is empty
  if (item === "") {
    alert("Please enter an item.");
    return; // exit the function
  }
 
  cart.push(item); // Add item to cart array
  renderCart(); // creating the list based off the array 
  itemInput.value = ""; // Clear the input field
});

// add event listener to "Remove Last Item" button
removeItemButton.addEventListener("click", function () {
  cart.pop(); // Remove last item from cart array
  renderCart(); // Recreate the cart without that item
});
 
// take the array and turn it into a list of items
function renderCart() {
  // removes all li tags from the ul (recreate the list)
  cartList.innerHTML = ""; // Clear existing list
  // loop through the array
  for (let i = 0; i < cart.length; i++) {
    // create a list item (li tag)
    let listItem = document.createElement("li");
    let btn = document.createElement('button');
    listItem.innerText = cart[i];
    btn.innerText = 'x'
    listItem.appendChild(btn);
    console.log(listItem);
    // add text (from the array) to the list item 

    // add the li to the ul 
    cartList.appendChild(listItem);
  }
}