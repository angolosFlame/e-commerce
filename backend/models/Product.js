const mongoose = require('mongoose');

// Define the the product shema
const productSchema = new mongoose.Schema({
	name: { type: String, required: true }, // Product name (required)
	price: { type: Number, required: true}, //Product price (required)
	description: {type: String, required: true}, // Product description
	stock: { type: Number, default: 0 }, //Available stock (default: 0)
});

// Export the Product model based on the schema
module.exports = mongoose.model('Product', productSchema);
