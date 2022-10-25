const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  completed: {
    type: Boolean
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  inserted: { type: Date },
  modified: { type: Date }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
