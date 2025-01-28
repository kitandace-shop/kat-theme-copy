//Disables the add to cart button until the customer picks a size

console.log("Force size working");

const addToCartButton = document.querySelector(".button__add-to-cart");

var sizeSelectorDivs = document.querySelectorAll(".form__field--swatches");

// Filter out elements containing "Color:" in their innerHTML
const filteredsizeSelectorDivs = Array.from(sizeSelectorDivs).filter(
    (div) => !div.innerHTML.includes("Color:")
);

sizeSelectorDivs = filteredsizeSelectorDivs;

console.log(sizeSelectorDivs);


// Loop through each sizeSelectorDiv and get the swatches inside them
// also uncheck all of them
sizeSelectorDivs.forEach((div) => {
    var sizeSwatches = div.querySelectorAll(".swatch__option");

    // Add click event listeners to each element in sizeSwatches
    // uncheck the input element inside them
    sizeSwatches.forEach((swatch) => {
        swatch.addEventListener("click", enableButton);
        swatch.querySelector("input").removeAttribute("checked")
    });

    


});

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