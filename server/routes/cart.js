const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @route GET api/carts
// @desc Get carts
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const carts = await Cart.find({ user: req.userId }).populate('user', ['username']);
        res.json({ success: true, carts });
    } catch (error) {}
});
// @route POST api/carts
// @desc Create cart
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const { name, image, category, description, price } = req.body;
    const newProduct = new Product({
        name,
        image,
        category,
        description,
        price,
        user: req.userId,
    });
    // simple validation

    try {
        const newCart = new Cart({
            product: newProduct,
            user: req.userId,
        });
        await newCart.save();
        res.json({
            success: true,
            message: 'Create cart successful!',
            cart: newCart,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

// @route POST api/carts
// @desc Update cart
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { product } = req.body;
    try {
        let updateCart = {
            product,
        };
        const cartUpdateCondition = { _id: req.params.id, user: req.userId };
        updateCart = await Cart.findByIdAndUpdate(cartUpdateCondition, updateCart, { new: true });
        if (!updateCart)
            return res.status(401).json({
                succes: false,
                message: 'Cart not found or user not authorised',
            });
        res.json({
            succes: true,
            message: 'Excellent progress!',
            cart: updateCart,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

// @route DELETE api/carts
// @desc Delete cart
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const cartDeleteCondition = { _id: req.params.id, user: req.userId };
        const deletedCart = await Cart.findOneAndDelete(cartDeleteCondition);

        // User not authorised or product not found
        if (!deletedCart)
            return res.status(401).json({
                success: false,
                message: 'cart not found or user not authorised',
            });
        res.json({ succes: true, product: deletedCart });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});

module.exports = router;
