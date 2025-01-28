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

var addToCartButtonHtml = "";

// Function to force the customer to select a size when the page loads
function forceSize() {
    // Store the innerHTML of the button before replacing it
    addToCartButtonHtml = addToCartButton.innerHTML;
    addToCartButton.innerHTML = '<span data-add-to-cart-text="">Select a size</span>';
    console.log("SIZE FORCED");
}

// Function to enable the Add to Cart button after a size is selected
function enableButton(selectedSize) {
    if (addToCartButtonHtml !== "") {
        addToCartButton.innerHTML = addToCartButtonHtml;
    }
    // Save the selected size to localStorage
    localStorage.setItem("selectedSize", selectedSize);
}

// Function to restore the selected size from localStorage
function restoreSelectedSize() {
    const savedSize = localStorage.getItem("selectedSize");
    if (savedSize) {
        // Find the matching swatch and simulate a click to reapply the size
        sizeSelectorDivs.forEach((div) => {
            const sizeSwatches = div.querySelectorAll(".swatch__option");
            sizeSwatches.forEach((swatch) => {
                if (swatch.textContent.trim() === savedSize) {
                    swatch.click(); // Simulate a click
                }
            });
        });
    }
}

// Loop through each sizeSelectorDiv and add event listeners to the swatches
sizeSelectorDivs.forEach((div) => {
    const sizeSwatches = div.querySelectorAll(".swatch__option");

    sizeSwatches.forEach((swatch) => {
        swatch.addEventListener("click", () => {
            const selectedSize = swatch.textContent.trim(); // Get the size text
            enableButton(selectedSize);
        });
    });
});

// Force size selection and restore the previously selected size
forceSize();
restoreSelectedSize();