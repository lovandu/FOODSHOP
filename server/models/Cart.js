const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products',
    
    //     type: Array,
    //     required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('carts', CartSchema)
