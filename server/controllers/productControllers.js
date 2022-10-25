const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const getProducts = asyncHandler(async (req, res, next) => {
    Product.find({}).then(function(info){
        res.send(info);
    }).catch(next);
});

const addProduct = asyncHandler(async (req, res) => {
    const { name, completed, price, inserted, modified } = req.body;

    const productExists = await Product.findOne({ name });

    if (productExists) {
        res.status(400)
        throw new Error("Product already exist!");
    }

    const p = await Product.create({ name, completed, price, inserted, modified });

    if (p) {
        res.status(201).json({
            _id: p._id,
            name: p.name,
            completed: p.completed,
            price: p.price,
            inserted: p.inserted,
            modified: p.modified
        })
    } else {
        res.status(400)
        throw new Error("Error Occurred!"); 
    } 
});

const deleteProduct = asyncHandler(async (req, res) => {
    var id = req.params.id;

    Product.findOne({ _id: id })
    .then(product => {
        if (product) {
          product
            .remove()
            .then(product => {
              res.status(200).json({ _id: product._id, name: product.name, price: product.price, completed: product.completed });
             // `Product deleted! Deleted product details: ${product}`
            })
            .catch(err => {
              res.status(400).send(`Delete not possible. Error details: ${err.message}`);
            });
        } else {
          res.status(404).send(`Product not found. Error details: ${err.message}`);
        }
      })
      .catch(err => {
        res.status(500).send(`Error details: ${err.message}`);
      });

})

const editProduct = asyncHandler(async (req, res) => {  
  const id = req.params.id;
  const updated = req.body;

  Product.updateOne({_id: id}, updated)
  .then(
    (result) => {
      Product.findOne({ _id: id })
      .then(product => {
        res.status(201).json(product);
      });
      
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );


})

module.exports = { addProduct, getProducts, deleteProduct, editProduct };