//Disables the add to cart button until the customer picks a size
console.log("Force size working");

const addToCartButton = document.querySelector(".button__add-to-cart");

let sizeSelectorDivs = document.querySelectorAll(".form__field--swatches");

// Filter out elements containing "Color:" in their innerHTML
const filteredSizeSelectorDivs = Array.from(sizeSelectorDivs).filter(
    (div) => !div.innerHTML.includes("Color:")
);

sizeSelectorDivs = filteredSizeSelectorDivs;

console.log(sizeSelectorDivs);

// Variable to store the original Add to Cart button HTML
let addToCartButtonHtml = '';

function forceSize() {
    // Store the innerHTML of the button before replacing it
    addToCartButtonHtml = addToCartButton.innerHTML;
    
    // Replace the button content
    addToCartButton.innerHTML = '<span data-add-to-cart-text="">Select a size</span>';
    
    // Disable the button
    addToCartButton.disabled = true;

    addToCartButton.style = "background-color: #1c2646; color:white;"
}


// Once they select a size, let them add the item to their cart
function enableButton() {
    if (addToCartButtonHtml !== '') {
        addToCartButton.innerHTML = addToCartButtonHtml;
        addToCartButton.disabled = false;
    }
}

// Save the selected size to localStorage
function saveSelectedSize(size) {
    localStorage.setItem("selectedSize", size);
}

// Get the selected size from localStorage
function getSelectedSize() {
    return localStorage.getItem("selectedSize");
}

// Set the size swatch as selected based on the saved size
function setSelectedSize() {
    const savedSize = getSelectedSize();
    if (savedSize) {
        sizeSelectorDivs.forEach((div) => {
            const sizeSwatches = div.querySelectorAll(".swatch__option");
            sizeSwatches.forEach((swatch) => {
                const input = swatch.querySelector("input");
                if (input.value === savedSize) {
                    input.checked = true;
                    swatch.click(); // Simulate a click to trigger the button enable
                }
            });
        });
    }
}

// Loop through each sizeSelectorDiv and get the swatches inside them
// Also uncheck all of them initially
sizeSelectorDivs.forEach((div) => {
    const sizeSwatches = div.querySelectorAll(".swatch__option");

    // Add click event listeners to each element in sizeSwatches
    sizeSwatches.forEach((swatch) => {
        swatch.addEventListener("click", () => {
            const input = swatch.querySelector("input");
            saveSelectedSize(input.value); // Save the selected size
            enableButton();
        });
        swatch.querySelector("input").checked = false;
    });
});

// Call forceSize to initially disable the Add to Cart button
forceSize();

// Set the selected size from localStorage when the page loads
setSelectedSize();
