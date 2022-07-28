const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const Product = require('../models/Product');

// @route GET api/products
// @desc Get products
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const products = await Product.find({ user: req.userId }).populate('user', ['username']);
        res.json({ success: true, products });
    } catch (error) {}
});

// @route GET api/products
// @desc Get all products
// @access Private
router.get('/allproducts', verifyToken, async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, products });
    } catch (error) {}
});

// @route POST api/products
// @desc Create product
// @access Private

router.post('/', verifyToken, async (req, res) => {
    const { name, description, image, price, category } = req.body;

    // Simple validation
    if (!name) {
        return res.status(400).json({ success: false, message: 'Product name is required' });
    }
    try {
        const newProduct = new Product({
            name,
            image,
            category,
            description,
            price,
            user: req.userId,
        });
        await newProduct.save();
        res.json({
            success: true,
            message: 'Create product successful!',
            product: newProduct,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});
// @route POST api/products
// @desc Update product
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { name, description, image, price, category } = req.body;

    // Simple validation
    if (!name) return res.status(400).json({ succes: false, message: 'Product name is required' });
    try {
        let updateProduct = {
            name,
            description,
            image,
            price,
            category,
        };
        const productUpdateCondition = { _id: req.params.id, user: req.userId };

        updateProduct = await Product.findOneAndUpdate(productUpdateCondition, updateProduct, { new: true });
        // User not authorised to update product or product not found
        if (!updateProduct)
            return res.status(401).json({
                success: false,
                message: 'Product not found or user not authorised',
            });
        res.json({
            success: true,
            message: 'Excellent progress!',
            product: updateProduct,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});
// @route DELETE api/products
// @desc Delete product
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const productDeleteCondition = { _id: req.params.id, user: req.userId };
        const deletedProduct = await Product.findOneAndDelete(productDeleteCondition);

        // User not authorised or product not found
        if (!deletedProduct)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised',
            });
        res.json({ success: true, product: deletedProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

module.exports = router;
