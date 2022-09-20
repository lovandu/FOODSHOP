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
        const cart = await Cart.findOne({ user: req.userId }).populate('user', [
            'username',
        ]);
        res.json({ success: true, cart });
    } catch (error) {}
});
// @route POST api/carts
// @desc Create cart
// @access Private
router.post('/:productId', verifyToken, async (req, res) => {
    try {
        const productId = req.params.productId.toString();
        const { quantity } = req.body;
        const cartCondition = { user: req.userId };

        const carts = await Cart.findOne(cartCondition);
        console.log('carts:', carts);
        let item = null;

        if (carts) {
            item = carts.cart.find((cart) => {
                return cart.productId.toString() === req.params.productId;
            });
        }
        const productUpdateCondition = { _id: req.params.productId };

        const product = await Product.findOne(productUpdateCondition);
        // console.log('product', product);
        const updateCondition = {
            _id: carts._id,
            'cart.productId': productId,
        };
        if (item && quantity === 0) {
            const updateCart = await Cart.findOneAndUpdate(
                {
                    updateCondition,
                },
                {
                    $pull: {
                        cart: {
                            productId: productId,
                        },
                    },
                },
                { new: true },
            );
            await res.json({
                success: true,
                message: 'remove product from cart successful!',
                cart: updateCart,
            });
            console.log('remove product from cart successful!');
        } else if (item) {
            console.log('item:', item);
            console.log('item.quantity_before:', quantity);
            const updateBefore = await Cart.findOne({
                updateCondition,
            });
            console.log('updateBefore:', updateBefore);
            console.log('req.params.productId:', req.params.productId);

            const updateCart = await Cart.findOneAndUpdate(
                {
                    _id: carts._id,
                    'cart.productId': productId,
                },
                {
                    $set: {
                        'cart.$': {
                            ...item,
                            quantity: item.quantity + quantity,
                        },
                    },
                },
                { new: true },
            );
            console.log('item.quantity_after:', item.quantity);
            console.log('updateCart:', updateCart);

            await res.json({
                success: true,
                message: 'update product quantity to cart successful!',
                cart: updateCart,
            });
        } else if (carts === null) {
            const newCart = new Cart({
                cart: {
                    productId: product._id.toString(),
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: quantity,
                },
                user: req.userId,
            });
            await newCart.save();
            res.json({
                success: true,
                message: 'Create a new cart successful!',
                cart: newCart,
            });
        } else {
            const updateCart = await Cart.findOneAndUpdate(
                {
                    _id: carts._id,
                },
                {
                    $push: {
                        cart: {
                            productId: product._id.toString(),
                            name: product.name,
                            image: product.image,
                            price: product.price,
                            quantity: quantity,
                        },
                    },
                },
                { new: true },
            );
            await res.json({
                success: true,
                message: 'add a product item on cart successful!',
                cart: updateCart,
            });
        }
    } catch (error) {
        console.log(error);
    }
});

// @route POST api/carts
// @desc Update cart
// @access Private
router.get('/reset', verifyToken, async (req, res) => {
    try {
        const carts = await Cart.findOne({ user: req.userId }).populate(
            'user',
            ['username'],
        );
        const resetCart = await Cart.findByIdAndUpdate(
            carts._id,
            { cart: [] },
            { new: true },
        );
        await res.json({
            success: true,
            message: 'set a new cart successful!',
            cart: resetCart,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
    console.log('reset a new cart successful!');
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
