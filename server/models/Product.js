const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductShema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
});

module.exports=mongoose.model('products', ProductShema)

