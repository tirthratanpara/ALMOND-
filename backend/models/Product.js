const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  badge: { type: String, default: null },
  oldPrice: { type: Number, default: null },
  img: { type: String, required: true },
  desc: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
