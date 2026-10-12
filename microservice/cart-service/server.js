const express = require("express");

const app = express();

const PORT = 3002;


// Allow JSON requests

app.use(express.json());


// Cart data

let cart = [];


// Get cart

app.get("/cart", (req, res) => {

    res.json(cart);

});


// Add item to cart

app.post("/cart", (req, res) => {

    const product = req.body;

    cart.push(product);

    res.json({
        message: "Product added to cart",
        cart: cart
    });

});


// Home route

app.get("/", (req, res) => {

    res.send("Cart Service is running");

});


// Start server

app.listen(PORT, () => {

    console.log(
        `Cart Service running on http://localhost:${PORT}`
    );

});