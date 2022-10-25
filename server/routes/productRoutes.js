const express = require("express");
const { addProduct, getProducts, deleteProduct, editProduct } = require("../controllers/productControllers");
const router = express.Router();

router.route("/").get(getProducts);
router.route("/add").post(addProduct);
router.route("/delete/:id").delete(deleteProduct);
router.route("/edit/:id").put(editProduct);

module.exports = router;