const express = require("express");

const app = express();

const PORT = 3000;

// Serve frontend files
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
    console.log(`E-Commerce application running at http://localhost:${PORT}`);
});