const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));


// Product Service

app.get("/api/products", async (req, res) => {

    try {

        const response = await axios.get(
            "http://localhost:3001/products"
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            message: "Product Service unavailable"
        });

    }

});


// Cart Service

app.get("/api/cart", async (req, res) => {

    try {

        const response = await axios.get(
            "http://localhost:3002/cart"
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            message: "Cart Service unavailable"
        });

    }

});


// Add product to cart

app.post("/api/cart", async (req, res) => {

    try {

        const response = await axios.post(
            "http://localhost:3002/cart",
            req.body
        );

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            message: "Cart Service unavailable"
        });

    }

});


// Gateway home page

app.get("/", (req, res) => {

    res.send("E-Commerce API Gateway is running");

});


// Start Gateway

app.listen(PORT, () => {

    console.log(
        `API Gateway running on http://localhost:${PORT}`
    );

});