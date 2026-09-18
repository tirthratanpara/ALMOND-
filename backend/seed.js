const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Product = require('./models/Product');

const products = [
  // Bottoms
  { id: 1, name: 'Vintage Washed Black Jeans', brand: 'ALMOND', price: 4000, category: 'bottoms', badge: 'NEW', oldPrice: null, img: '/images/b1.png', desc: 'Premium quality bottoms.' },
  { id: 2, name: 'Olive Green Chino Pants', brand: 'ALMOND', price: 3000, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b2.png', desc: 'Premium quality bottoms.' },
  { id: 3, name: 'Oversized Light Wash Denim', brand: 'ALMOND', price: 4500, category: 'bottoms', badge: 'SALE', oldPrice: 150, img: '/images/b3.png', desc: 'Premium quality bottoms.' },
  { id: 4, name: 'Flame Embroidered Flare Jeans', brand: 'ALMOND', price: 3600, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b5.png', desc: 'Premium quality bottoms.' },
  { id: 5, name: 'Relaxed Fit Wide Leg Jeans', brand: 'ALMOND', price: 4200, category: 'bottoms', badge: 'NEW', oldPrice: null, img: '/images/b6.png', desc: 'Premium quality bottoms.' },
  { id: 6, name: 'Classic Cream Straight Trousers', brand: 'ALMOND', price: 3200, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b7.png', desc: 'Premium quality bottoms.' },
  
  // Jackets
  { id: 7, name: 'Burgundy Distressed Artisan Jacket', brand: 'ALMOND', price: 13000, category: 'jackets', badge: 'NEW', oldPrice: null, img: '/images/j1.png', desc: 'A bold statement jacket.' },
  { id: 8, name: 'Light Grey Quilted Overshirt', brand: 'ALMOND', price: 9000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j2.png', desc: 'A bold statement jacket.' },
  { id: 9, name: 'Classic Vintage Denim Jacket', brand: 'ALMOND', price: 8000, category: 'jackets', badge: 'SALE', oldPrice: 300, img: '/images/j3.png', desc: 'A bold statement jacket.' },
  { id: 10, name: 'Premium Black Leather Biker Jacket', brand: 'ALMOND', price: 7000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j5.png', desc: 'A bold statement jacket.' },
  { id: 11, name: 'Two-Tone Paneled Oversized Jacket', brand: 'ALMOND', price: 12000, category: 'jackets', badge: 'NEW', oldPrice: null, img: '/images/j6.png', desc: 'A bold statement jacket.' },
  { id: 12, name: 'Vintage Brown Leather Jacket', brand: 'ALMOND', price: 10000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j7.png', desc: 'A bold statement jacket.' },
  { id: 13, name: 'Midnight Black Quilted Overshirt', brand: 'ALMOND', price: 11500, category: 'jackets', badge: null, oldPrice: null, img: '/images/j9.png', desc: 'A bold statement jacket.' },

  // Shirts
  { id: 14, name: 'Essential Blue Button-Down Shirt', brand: 'ALMOND', price: 4850, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x1.png', desc: 'Everyday essential shirt.' },
  { id: 15, name: 'Breathable Sage Linen Shirt', brand: 'ALMOND', price: 3900, category: 'shirts', badge: null, oldPrice: null, img: '/images/x2.png', desc: 'Everyday essential shirt.' },
  { id: 16, name: 'Mustard Yellow Casual Shirt', brand: 'ALMOND', price: 3400, category: 'shirts', badge: 'SALE', oldPrice: 110, img: '/images/x3.png', desc: 'Everyday essential shirt.' },
  { id: 17, name: 'Tan Checkered Everyday Shirt', brand: 'ALMOND', price: 4000, category: 'shirts', badge: null, oldPrice: null, img: '/images/x4.png', desc: 'Everyday essential shirt.' },
  { id: 18, name: 'Elegant White Ruffle Blouse', brand: 'ALMOND', price: 5000, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x5.png', desc: 'Everyday essential shirt.' },
  { id: 19, name: 'Classic Blue Pinstripe Shirt', brand: 'ALMOND', price: 4600, category: 'shirts', badge: null, oldPrice: null, img: '/images/x6.png', desc: 'Everyday essential shirt.' },
  { id: 20, name: 'Relaxed Oversized White Shirt', brand: 'ALMOND', price: 3200, category: 'shirts', badge: null, oldPrice: null, img: '/images/x7.png', desc: 'Everyday essential shirt.' },
  { id: 21, name: 'Magenta Plaid Flannel Shirt', brand: 'ALMOND', price: 4100, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x8.png', desc: 'Everyday essential shirt.' },
  { id: 22, name: 'Tailored Crisp White Shirt', brand: 'ALMOND', price: 4200, category: 'shirts', badge: null, oldPrice: null, img: '/images/x9.png', desc: 'Everyday essential shirt.' },

  // T-Shirts
  { id: 23, name: 'Signature Black Boxy Tee', brand: 'ALMOND', price: 2000, category: 'tshirts', badge: 'NEW', oldPrice: null, img: '/images/t1.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 24, name: 'Heavyweight Black Essential Tee', brand: 'ALMOND', price: 2500, category: 'tshirts', badge: null, oldPrice: null, img: '/images/t2.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 25, name: 'Periwinkle Blue Classic Tee', brand: 'ALMOND', price: 3000, category: 'tshirts', badge: 'SALE', oldPrice: 60, img: '/images/t3.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 26, name: 'Olive Green Fitted Tee', brand: 'ALMOND', price: 2100, category: 'tshirts', badge: null, oldPrice: null, img: '/images/t4.png', desc: 'Comfortable graphic t-shirt.' }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log('MongoDB connected for seeding');
  
  await Product.deleteMany();
  console.log('Cleared existing products');
  
  await Product.insertMany(products);
  console.log('Seeded products database');
  
  process.exit();
}).catch(err => {
  console.error(err);
  process.exit(1);
});
