//Disables the add to cart button until the customer picks a size

console.log("Force size working");

const addToCartButton = document.querySelector(".button__add-to-cart");

const sizeSelectorDivs = document.querySelectorAll(".form__field--swatches");

// Filter out elements containing "Color:" in their innerHTML
const filteredSizeSelectorDivs = Array.from(sizeSelectorDivs).filter(
    (div) => !div.innerHTML.includes("Color:")
);

sizeSelectorDivs = filteredSizeSelectorDivs;



console.log(sizeSelectorDivs);

var addToCartButtonHtml = ''

//force the customer to select a size when the page loads
function forceSize(){
    //store the innerhtml of the button before replacing it
    addToCartButtonHtml = addToCartButton.innerHTML;
    addToCartButton.innerHTML = '<span data-add-to-cart-text="">Select a size</span>';
}


//once they select a size let them add the item to their cart
function enableButton(){
    if(addToCartButtonHtml != ''){
        addToCartButton.innerHTML = addToCartButtonHtml
    }
    
}



forceSize()