const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'field tidak boleh kosong'],
        minlength: 3,
        maxlength: 50
    },
    stock: Number,
    harga: {
        type: Number,
        required: true,
        min: 1000,
        max: 100000000
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;