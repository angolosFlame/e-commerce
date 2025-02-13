// Import required modules
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express app
const app = express();

// Middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define routes for product-related endpoints
app.use('/api/products', productRoutes);

// Define the port the server will listen on
const PORT = process.env.PORT || 5000;

// Start the server and listen for requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
