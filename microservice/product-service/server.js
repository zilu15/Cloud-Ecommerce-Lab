const express = require("express");

const app = express();

const PORT = 3001;


// Product data

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },

    {
        id: 2,
        name: "Smartphone",
        price: 25000
    },

    {
        id: 3,
        name: "Headphones",
        price: 3000
    }
];


// Product API

app.get("/products", (req, res) => {

    res.json(products);

});


// Home route

app.get("/", (req, res) => {

    res.send("Product Service is running");

});


// Start server

app.listen(PORT, () => {

    console.log(
        `Product Service running on http://localhost:${PORT}`
    );

});