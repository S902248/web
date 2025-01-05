// Simple script to handle 'Add to Cart' button click
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            const productName = event.target.getAttribute("data-name");
            const productPrice = event.target.getAttribute("data-price");

            alert(`Added ${productName} to the cart for $${productPrice}`);
        });
    });
});
