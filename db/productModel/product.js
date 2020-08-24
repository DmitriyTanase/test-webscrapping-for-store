let mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
    // title: { type: String, required: true},
    // price: { type: String, required: true},
    // img: { type: String, required: true},
    // description: { type: String},
    // originURL: { type: String, required: true},
    // category: { type: String, required: true}
});

let Product = mongoose.model('Product', productSchema);

module.exports = Product;