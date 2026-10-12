let products = [];

let cart = [];

// Load products through API Gateway
async function loadProducts() {

    try {

        const response = await fetch("/api/products");

        products = await response.json();

        displayProducts();

    } catch (error) {

        console.error("Error loading products:", error);

    }
}


// Display products
function displayProducts() {

    const productList =
        document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach(product => {

        const productCard =
            document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>

            <h4>₹${product.price}</h4>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productList.appendChild(productCard);

    });
}


// Add product to cart
async function addToCart(productId) {

    const product =
        products.find(product => product.id === productId);

    if (!product) {
        return;
    }

    try {

        await fetch("/api/cart", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)

        });

        alert(`${product.name} added to cart!`);

        loadCart();

    } catch (error) {

        console.error("Error adding product:", error);

    }
}


// Load cart through API Gateway
async function loadCart() {

    try {

        const response = await fetch("/api/cart");

        cart = await response.json();

        displayCart();

    } catch (error) {

        console.error("Error loading cart:", error);

    }
}


// Display cart
function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    cartCount.textContent = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach(product => {

        total += product.price;

        const item =
            document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            ${product.name} - ₹${product.price}
        `;

        cartItems.appendChild(item);

    });


    cartTotal.textContent = total;
}


// Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert("Proceeding to checkout...");

}


// Start application
loadProducts();

loadCart();