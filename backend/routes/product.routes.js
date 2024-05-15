const controller = require("../controller/product.controller.js")
const router = require("express").Router();
// create product
router.post('/product', controller.create);

// get all product
router.get('/product', controller.get);

// get single product
router.get('/product/:id', controller.getSingle);


module.exports = router



