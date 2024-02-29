const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'productType',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        productType: {
            type: String,
            enum: ['cameras', 'mobiles', 'laptops'], // Add other product types if needed
            required: true
        }
    }],
},{
    timestamps:true,
    versionKey:false
})


const cartModel = mongoose.model("cart", cartSchema);

module.exports = {cartModel}