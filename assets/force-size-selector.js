//Disables the add to cart button until the customer picks a size

console.log("Force size working");

const addToCartButton = document.querySelector(".button__add-to-cart");

function forceSize(){
    addToCartButton.innerHTML = "<span data-add-to-cart-text="">Select a size</span>"
}

forceSize()