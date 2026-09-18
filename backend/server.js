const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Product = require('./models/Product');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const initialProducts = [
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

let memoryUsers = [];

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
let isConnected = false;

if (mongoURI) {
  mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 3000 })
  .then(() => {
    isConnected = true;
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.log('MongoDB connection error, falling back to local dataset:', err.message);
  });
} else {
  console.log("No MONGO_URI provided in .env file, using local dataset.");
}

// API Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name, phone, newsSubscription } = req.body;
    
    if (isConnected) {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      user = new User({
        email,
        password: hashedPassword,
        name,
        phone,
        newsSubscription,
        isVerified: false
      });
      await user.save();
    } else {
      let user = memoryUsers.find(u => u.email === email);
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
      memoryUsers.push({ email, password, name, phone, newsSubscription, isVerified: false, id: Date.now().toString() });
    }
    
    res.status(201).json({ message: 'User registered successfully, please verify your phone' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/auth/verify', async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!code || code.length < 4) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
    
    let userName = 'User';
    let userId = '1';

    if (isConnected) {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      user.isVerified = true;
      await user.save();
      userName = user.name;
      userId = user.id;
    } else {
      let user = memoryUsers.find(u => u.email === email);
      if (user) {
        user.isVerified = true;
        userName = user.name;
        userId = user.id;
      }
    }
    
    const payload = { user: { id: userId, name: userName } };
    jwt.sign(payload, process.env.JWT_SECRET || 'secret123', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, name: userName });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    if (isConnected && mongoose.connection.readyState === 1) {
      const products = await Product.find();
      if (products && products.length > 0) {
        return res.json(products);
      }
    }
    return res.json(initialProducts);
  } catch (error) {
    return res.json(initialProducts);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

