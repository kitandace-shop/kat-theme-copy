let bundleTiles = document.getElementsByClassName("bndlr-product");

function noDropdown() {
    // Adds a 30px margin to the bottom of the tile when there is no dropdown menu
    Array.from(bundleTiles).forEach(tile => {
        console.log(bundleTiles)
        if (tile.querySelector(".bndlr-select-variant") == null) {
            tile.querySelector(".bndlr-product-price").style.marginBottom = "30px";
        }
    });
}

// Observer to detect when the first bundleTile element is added to the DOM
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length > 0) {
            let addedNodes = Array.from(mutation.addedNodes);
            let firstTile = addedNodes.find(node => node.classList && node.classList.contains("bndlr-product"));
            if (firstTile) {
                noDropdown();
                observer.disconnect(); // Stop observing once the function has run
            }
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });
