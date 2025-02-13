// Import required modules
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Route: Get all products
// Method: GET
router.get('/', async (req, res) => {
    const products = await Product.find(); // Fetch all products from the database
    res.json(products); // Send the products as a JSON response
});

// Route: Add a new product
// Method: POST
router.post('/', async (req, res) => {
    const { name, price, description, stock } = req.body; // Extract product details from request body
    const newProduct = new Product({ name, price, description, stock }); // Create a new product
    await newProduct.save(); // Save the product to the database
    res.json(newProduct); // Send the created product as a JSON response
});

// Export the routes
module.exports = router;
