// Product data

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        description: "Powerful laptop for work and study."
    },

    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        description: "Modern smartphone with excellent performance."
    },

    {
        id: 3,
        name: "Headphones",
        price: 3000,
        description: "Wireless headphones with clear sound."
    },

    {
        id: 4,
        name: "Smart Watch",
        price: 5000,
        description: "Smart watch for fitness and daily activities."
    }
];


// Shopping cart

let cart = [];


// Display products

function displayProducts() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach(product => {

        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <h4>₹${product.price}</h4>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productList.appendChild(productCard);
    });
}


// Add product to cart

function addToCart(productId) {

    const product = products.find(
        product => product.id === productId
    );

    cart.push(product);

    updateCart();

    alert(`${product.name} added to cart!`);
}


// Update cart

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const cartTotal = document.getElementById("cart-total");


    cartCount.textContent = cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        cartTotal.textContent = "0";

        return;
    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((product, index) => {

        total += product.price;


        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            ${product.name} - ₹${product.price}

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(item);
    });


    cartTotal.textContent = total;
}


// Remove item

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    alert("Proceeding to checkout...");
}


// Load products when page opens

displayProducts();

updateCart();