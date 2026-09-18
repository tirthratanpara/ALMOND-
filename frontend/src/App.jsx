import React, { useState, useEffect } from 'react';
import './index.css';

const initialProducts = [
  { id: 1, name: 'Vintage Washed Black Jeans', brand: 'ALMOND', price: 4000, category: 'bottoms', badge: 'NEW', oldPrice: null, img: '/images/b1.png', desc: 'Premium quality bottoms.' },
  { id: 2, name: 'Olive Green Chino Pants', brand: 'ALMOND', price: 3000, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b2.png', desc: 'Premium quality bottoms.' },
  { id: 3, name: 'Oversized Light Wash Denim', brand: 'ALMOND', price: 4500, category: 'bottoms', badge: 'SALE', oldPrice: 150, img: '/images/b3.png', desc: 'Premium quality bottoms.' },
  { id: 4, name: 'Flame Embroidered Flare Jeans', brand: 'ALMOND', price: 3600, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b5.png', desc: 'Premium quality bottoms.' },
  { id: 5, name: 'Relaxed Fit Wide Leg Jeans', brand: 'ALMOND', price: 4200, category: 'bottoms', badge: 'NEW', oldPrice: null, img: '/images/b6.png', desc: 'Premium quality bottoms.' },
  { id: 6, name: 'Classic Cream Straight Trousers', brand: 'ALMOND', price: 3200, category: 'bottoms', badge: null, oldPrice: null, img: '/images/b7.png', desc: 'Premium quality bottoms.' },
  { id: 7, name: 'Burgundy Distressed Artisan Jacket', brand: 'ALMOND', price: 13000, category: 'jackets', badge: 'NEW', oldPrice: null, img: '/images/j1.png', desc: 'A bold statement jacket.' },
  { id: 8, name: 'Light Grey Quilted Overshirt', brand: 'ALMOND', price: 9000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j2.png', desc: 'A bold statement jacket.' },
  { id: 9, name: 'Classic Vintage Denim Jacket', brand: 'ALMOND', price: 8000, category: 'jackets', badge: 'SALE', oldPrice: 300, img: '/images/j3.png', desc: 'A bold statement jacket.' },
  { id: 10, name: 'Premium Black Leather Biker Jacket', brand: 'ALMOND', price: 7000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j5.png', desc: 'A bold statement jacket.' },
  { id: 11, name: 'Two-Tone Paneled Oversized Jacket', brand: 'ALMOND', price: 12000, category: 'jackets', badge: 'NEW', oldPrice: null, img: '/images/j6.png', desc: 'A bold statement jacket.' },
  { id: 12, name: 'Vintage Brown Leather Jacket', brand: 'ALMOND', price: 10000, category: 'jackets', badge: null, oldPrice: null, img: '/images/j7.png', desc: 'A bold statement jacket.' },
  { id: 13, name: 'Midnight Black Quilted Overshirt', brand: 'ALMOND', price: 11500, category: 'jackets', badge: null, oldPrice: null, img: '/images/j9.png', desc: 'A bold statement jacket.' },
  { id: 14, name: 'Essential Blue Button-Down Shirt', brand: 'ALMOND', price: 4850, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x1.png', desc: 'Everyday essential shirt.' },
  { id: 15, name: 'Breathable Sage Linen Shirt', brand: 'ALMOND', price: 3900, category: 'shirts', badge: null, oldPrice: null, img: '/images/x2.png', desc: 'Everyday essential shirt.' },
  { id: 16, name: 'Mustard Yellow Casual Shirt', brand: 'ALMOND', price: 3400, category: 'shirts', badge: 'SALE', oldPrice: 110, img: '/images/x3.png', desc: 'Everyday essential shirt.' },
  { id: 17, name: 'Tan Checkered Everyday Shirt', brand: 'ALMOND', price: 4000, category: 'shirts', badge: null, oldPrice: null, img: '/images/x4.png', desc: 'Everyday essential shirt.' },
  { id: 18, name: 'Elegant White Ruffle Blouse', brand: 'ALMOND', price: 5000, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x5.png', desc: 'Everyday essential shirt.' },
  { id: 19, name: 'Classic Blue Pinstripe Shirt', brand: 'ALMOND', price: 4600, category: 'shirts', badge: null, oldPrice: null, img: '/images/x6.png', desc: 'Everyday essential shirt.' },
  { id: 20, name: 'Relaxed Oversized White Shirt', brand: 'ALMOND', price: 3200, category: 'shirts', badge: null, oldPrice: null, img: '/images/x7.png', desc: 'Everyday essential shirt.' },
  { id: 21, name: 'Magenta Plaid Flannel Shirt', brand: 'ALMOND', price: 4100, category: 'shirts', badge: 'NEW', oldPrice: null, img: '/images/x8.png', desc: 'Everyday essential shirt.' },
  { id: 22, name: 'Tailored Crisp White Shirt', brand: 'ALMOND', price: 4200, category: 'shirts', badge: null, oldPrice: null, img: '/images/x9.png', desc: 'Everyday essential shirt.' },
  { id: 23, name: 'Signature Black Boxy Tee', brand: 'ALMOND', price: 2000, category: 'tshirts', badge: 'NEW', oldPrice: null, img: '/images/t1.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 24, name: 'Heavyweight Black Essential Tee', brand: 'ALMOND', price: 2500, category: 'tshirts', badge: null, oldPrice: null, img: '/images/t2.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 25, name: 'Periwinkle Blue Classic Tee', brand: 'ALMOND', price: 3000, category: 'tshirts', badge: 'SALE', oldPrice: 60, img: '/images/t3.png', desc: 'Comfortable graphic t-shirt.' },
  { id: 26, name: 'Olive Green Fitted Tee', brand: 'ALMOND', price: 2100, category: 'tshirts', badge: null, oldPrice: null, img: '/images/t4.png', desc: 'Comfortable graphic t-shirt.' }
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('latest');

  // UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopSubOpen, setMobileShopSubOpen] = useState(false);
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalSize, setModalSize] = useState('M');
  const [toastMessage, setToastMessage] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginStep, setLoginStep] = useState('email');
  const [loginEmail, setLoginEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [profileTab, setProfileTab] = useState('purchases');
  const [verificationCode, setVerificationCode] = useState('');
  
  // Registration form states
  const [loginPassword, setLoginPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginPhonePrefix, setLoginPhonePrefix] = useState('+91');
  const [loginTelephone, setLoginTelephone] = useState('');
  const [loginNewsConsent, setLoginNewsConsent] = useState(false);
  const [loginPrivacyConsent, setLoginPrivacyConsent] = useState(false);

  const handleRegister = async () => {
    if (!loginEmail || !loginPassword || !loginName || !loginTelephone) {
      showToast('Please fill all required fields');
      return;
    }
    if (!loginPrivacyConsent) {
      showToast('You must accept the privacy statement');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
          name: loginName,
          phone: `${loginPhonePrefix} ${loginTelephone}`,
          newsSubscription: loginNewsConsent
        })
      });
      const data = await res.json();
      if (res.ok) {
        showToast('Code sent to phone');
        setLoginStep('verify');
      } else {
        showToast(data.message || 'Registration failed');
      }
    } catch (err) {
      showToast('Network error');
    }
  };

  const handleVerify = async () => {
    if (!verificationCode) {
      showToast('Please enter verification code');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginEmail,
          code: verificationCode
        })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setUserName(data.name);
        setLoginOpen(false);
        setLoginStep('email');
        setActiveCategory('profile');
        showToast('Successfully logged in!');
      } else {
        showToast(data.message || 'Verification failed');
      }
    } catch (err) {
      showToast('Network error');
    }
  };

  useEffect(() => {
    // Fetch products from backend
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(err => console.error("Error fetching products:", err));

    // Load cart from local storage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const revealShop = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    setMobileMenuOpen(false);
    
    // Scroll to top of the page since the shop becomes the top element
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, size) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === product.id && c.size === size);
      if (existing) {
        return prev.map(c => 
          (c.id === product.id && c.size === size) ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { id: product.id, name: product.name, img: product.img, price: product.price, qty: 1, size }];
    });
    showToast(`${product.name} (Size: ${size}) added to cart`);
    setModalProduct(null);
  };

  const removeFromCart = (id, size) => {
    setCart(prev => prev.filter(c => !(c.id === id && c.size === size)));
  };

  const changeQty = (id, size, delta) => {
    setCart(prev => prev.map(c => {
      if (c.id === id && c.size === size) {
        const newQty = c.qty + delta;
        return { ...c, qty: newQty > 0 ? newQty : 0 };
      }
      return c;
    }).filter(c => c.qty > 0));
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartTotalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Filter products
  let filteredProducts = Array.isArray(products) ? [...products] : [];
  if (activeCategory !== 'all') {
    if (activeCategory === 'new') filteredProducts = products.filter(p => p.badge === 'NEW');
    else if (activeCategory === 'sale') filteredProducts = products.filter(p => p.badge === 'SALE');
    else filteredProducts = products.filter(p => p.category === activeCategory);
  }
  
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (currentSort === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    const input = document.getElementById('emailInput');
    if(input && input.value) {
      showToast('Thank you for subscribing!');
      input.value = '';
    }
  };

  return (
    <>
      {/* ========== NAVIGATION ========== */}
      <nav className="nav" id="mainNav">
        <div className="nav-left">
          <button className="hamburger" onClick={() => setMobileMenuOpen(true)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
          <button className="nav-icon-btn" onClick={() => setSearchOverlayOpen(true)} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
        
        <div className="nav-center">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); setActiveCategory('all'); }}>ALMOND</a>
        </div>

        <div className="nav-right">
          {isLoggedIn ? (
            <a href="#" className="nav-user-name" onClick={(e) => { e.preventDefault(); setActiveCategory('profile'); window.scrollTo(0,0); }} style={{ fontSize: '0.85rem', color: '#555', letterSpacing: '0.05em', marginRight: '15px' }}>
              {userName.toUpperCase()}
            </a>
          ) : (
            <a href="#" onClick={(e) => { e.preventDefault(); setLoginOpen(true); }} className="nav-icon-btn" aria-label="Login">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </a>
          )}
          <button className="nav-icon-btn" onClick={() => setCartOpen(true)} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartTotalItems > 0 && <span className="cart-badge" style={{display: 'flex'}}>{cartTotalItems}</span>}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
        
        <div className="mobile-menu-main" style={{ display: mobileShopSubOpen ? 'none' : 'block', marginTop: '20px' }}>
          <ul className="mobile-nav-list">
            <li>
              <a href="#" className="mobile-nav-item" onClick={(e) => { e.preventDefault(); setMobileShopSubOpen(true); }}>
                Shop
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </li>
            <li><a href="#" className="mobile-nav-item">Collections <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></li>
            <li><a href="#" className="mobile-nav-item">Limited-Edition <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a></li>
            <li><a href="#" className="mobile-nav-item" onClick={(e) => { e.preventDefault(); revealShop('sale'); }}>Sale</a></li>
          </ul>
        </div>

        <div className="mobile-menu-sub" style={{ display: mobileShopSubOpen ? 'block' : 'none', marginTop: '20px' }}>
          <div className="mobile-sub-header">
            <button className="mobile-back-btn" onClick={() => setMobileShopSubOpen(false)} aria-label="Back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span className="mobile-sub-title">Shop</span>
          </div>
          <ul className="mobile-nav-list">
            {['new', 'jackets', 'sweatshirts', 'tshirts', 'shirts', 'bottoms'].map(cat => (
              <li key={cat}>
                <a href="#" className="mobile-nav-item mobile-dropdown-item" onClick={(e) => { e.preventDefault(); revealShop(cat); }}>
                  {cat === 'new' ? 'New arrivals' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ========== HERO ========== */}
      <section className="hero" id="hero" style={{ display: activeCategory !== 'all' ? 'none' : 'flex' }}>
        <div className="hero-content-split">
          <div className="hero-text">
            <p className="hero-tag">ALMOND COLLECTION 2026</p>
            <h1 className="hero-headline-1">MAIN CHARACTER</h1>
            <p className="hero-headline-2">ALWAYS</p>
            <p className="hero-sub">Clothing engineered for those who refuse to blend in. Stand out as the main character.</p>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/images/Screenshot 2026-06-06 134020.png" alt="ALMOND Model" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ========== DUAL CATEGORIES SHOWCASE ========== */}
      <section className="dual-categories" id="dualCategories" style={{ display: activeCategory !== 'all' ? 'none' : 'block' }}>
        <div className="category-split">
          <div className="category-half">
            <img src="/images/Screenshot 2026-06-06 195418.png" alt="T-Shirts & Shirts" loading="lazy" />
            <button className="category-btn" onClick={() => revealShop('shirts')}>T-SHIRTS & SHIRTS</button>
          </div>
          <div className="category-half">
            <img src="/images/Screenshot 2026-06-06 135213.png" alt="Jackets" loading="lazy" />
            <button className="category-btn" onClick={() => revealShop('jackets')}>JACKETS</button>
          </div>
        </div>
      </section>

      {/* ========== SALE BANNER ========== */}
      <section className="sale-banner" id="saleBanner" style={{ display: activeCategory !== 'all' ? 'none' : 'flex' }}>
        <img src="/images/sale.png" alt="Sale Banner" className="sale-bg-img" loading="lazy" />
        <div className="sale-content">
          <h2 className="sale-title">SALE</h2>
          <p className="sale-subtitle">A considered selection from past collections.<br/>Preserved pieces, repriced.</p>
          <button className="sale-btn" onClick={() => revealShop('sale')}>SHOP NOW</button>
        </div>
      </section>

      {/* ========== SHOP HEADER BREADCRUMB ========== */}
      <div className="shop-header" id="shopHeader" style={{ display: (activeCategory !== 'all' && activeCategory !== 'profile') ? 'flex' : 'none' }}>
        <div className="shop-controls">
          <div className="breadcrumb">Home / <span className="current">Shop</span></div>
          <div className="shop-actions">
            <button className="action-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              Filters
            </button>
            <select className="sort-select" value={currentSort} onChange={(e) => setCurrentSort(e.target.value)}>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="view-toggles">
              <button className="view-btn active"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg></button>
              <button className="view-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SHOP ========== */}
      <section className="shop" id="shop" style={{ display: (activeCategory !== 'all' && activeCategory !== 'profile') ? 'block' : 'none' }}>
        <div className="products-grid" id="productsGrid" style={{ opacity: 1, transform: 'none' }}>
          {filteredProducts.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888', padding: '60px 0', fontSize: '1rem' }}>No products found in this category.</p>
          ) : (
            filteredProducts.map((p, i) => (
              <div key={p.id} className="product-card" style={{ animationDelay: `${i * 0.08}s` }} onClick={() => setModalProduct(p)}>
                <div className="product-img-wrap">
                  {p.badge && <span className={`product-badge ${p.badge === 'SALE' ? 'sale' : ''}`}>{p.badge}</span>}
                  <img src={p.img} alt={p.name} style={{ objectPosition: (p.id === 5 || p.id === 6) ? 'bottom' : 'top' }} loading="lazy" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-price">
                    {p.oldPrice && <span className="old-price">RS{p.oldPrice}</span>}
                    <span className="current-price">RS{p.price}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ========== USER PROFILE ========== */}
      <section className="profile-dashboard" id="profileDashboard" style={{ display: activeCategory === 'profile' ? 'flex' : 'none' }}>
        <div className="profile-sidebar">
          <ul className="profile-menu">
            <li><a href="#" className={profileTab === 'purchases' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('purchases'); }}>|01| PURCHASES</a>
              {profileTab === 'purchases' && (
                <ul className="profile-submenu">
                  <li><a href="#">ONLINE</a></li>
                  <li><a href="#">IN STORE</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className={profileTab === 'returns' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('returns'); }}>|02| RETURNS</a></li>
            <li><a href="#" className={profileTab === 'favourites' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('favourites'); }}>|03| FAVOURITES</a></li>
            <li><a href="#" className={profileTab === 'details' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('details'); }}>|04| MY DETAILS</a>
              <p className="profile-desc">Complete your<br/>measurements to get<br/>the most suitable size<br/>recommendation</p>
            </li>
            <li><a href="#" className={profileTab === 'settings' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('settings'); }}>|05| SETTINGS</a></li>
            <li><a href="#" className={profileTab === 'notifications' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setProfileTab('notifications'); }}>|06| NOTIFICATIONS</a></li>
          </ul>
          <div className="profile-bottom-links">
            <a href="#">DOWNLOAD APP</a>
            <a href="#">RATE OUR WEB</a>
          </div>
        </div>
        
        <div className="profile-main">
          {profileTab === 'purchases' ? (
            <div className="empty-state">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              <p>YOU HAVE NOT PLACED ANY ORDERS YET</p>
            </div>
          ) : (
            <div className="empty-state">
              <p>CONTENT FOR {profileTab.toUpperCase()}</p>
            </div>
          )}
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section className="newsletter" id="contact" style={{ display: activeCategory !== 'profile' ? 'block' : 'none' }}>
        <h2 className="newsletter-heading">Join the List</h2>
        <p className="newsletter-sub">Sign up for updates and exclusive access to new statement pieces.</p>
        <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubscribe}>
          <input className="newsletter-input" id="emailInput" type="email" placeholder="Email Address" autoComplete="email" />
          <button className="newsletter-submit" type="submit">Subscribe</button>
        </form>
      </section>

      {/* ========== SIZE GUIDE ========== */}
      <section className="size-guide-section" id="size-guide" style={{ display: sizeGuideOpen ? 'block' : 'none', padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderTop: '1px solid #eaeaea' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Size Guide (cm)</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {['S', 'M', 'L'].map(size => (
             <div key={size} style={{ border: '1px solid #ddd', padding: '20px', width: '150px', background: '#fff' }}>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{size}</h3>
             <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>Bust: 82-86<br/>Waist: 64-68<br/>Hips: 88-92</p>
           </div>
          ))}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">ALMOND</p>
            <p className="footer-tagline">Main Character. Always.</p>
          </div>
          <div>
            <p className="footer-col-title">Shop</p>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('new'); }}>New Arrivals</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('women'); }}>Women</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('jackets'); }}>Jackets</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('shirts'); }}>Shirts</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('bottoms'); }}>Bottoms</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); revealShop('sale'); }}>Sale</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Customer Care</p>
            <ul className="footer-links">
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#size-guide" onClick={(e) => { e.preventDefault(); setSizeGuideOpen(!sizeGuideOpen); }}>Size Guide</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 ALMOND. All rights reserved.</p>
        </div>
      </footer>

      {/* ========== QUICK-VIEW MODAL ========== */}
      <div className={`modal-overlay ${modalProduct ? 'open' : ''}`} id="modalOverlay" onClick={(e) => e.target.id === 'modalOverlay' && setModalProduct(null)}>
        {modalProduct && (
          <div className="modal open" id="modalBox">
            <button className="modal-close" onClick={() => setModalProduct(null)} aria-label="Close modal">×</button>
            <div className="modal-image">
              <img id="modalImg" src={modalProduct.img} alt="Product" />
            </div>
            <div className="modal-details">
              <p className="modal-brand">{modalProduct.brand}</p>
              <h3 className="modal-name">{modalProduct.name}</h3>
              <p className="modal-price">
                {modalProduct.oldPrice && <span className="old-price">RS{modalProduct.oldPrice}</span>}
                <span className="current-price">RS{modalProduct.price}</span>
              </p>
              <p className="modal-size-label">Size</p>
              <div className="modal-sizes">
                {['S', 'M', 'L'].map(size => (
                  <button key={size} className={`size-btn ${modalSize === size ? 'active' : ''}`} onClick={() => setModalSize(size)}>{size}</button>
                ))}
              </div>
              <p className="modal-desc">{modalProduct.desc}</p>
              <button className="modal-add-btn" onClick={() => addToCart(modalProduct, modalSize)}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>

      {/* ========== CART SIDEBAR ========== */}
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} id="cartOverlay" onClick={() => setCartOpen(false)}></div>
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`} id="cartSidebar">
        <div className="cart-header">
          <span className="cart-title">Your Cart</span>
          <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">×</button>
        </div>
        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is currently empty.</p>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <p className="cart-item-price">RS{item.price}</p>
                  <div className="cart-qty-controls">
                    <button className="qty-btn" onClick={() => changeQty(item.id, item.size, -1)}>-</button>
                    <span className="qty-value">{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(item.id, item.size, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id, item.size)}>×</button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span className="cart-subtotal-value">RS{cartSubtotal.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => { setCartOpen(false); setLoginOpen(true); }}>Checkout</button>
        </div>
      </div>

      {/* ========== TOAST ========== */}
      <div className={`toast ${toastMessage ? 'show' : ''}`} id="toast">{toastMessage}</div>

      {/* ========== SEARCH BAR OVERLAY ========== */}
      <div className={`search-overlay ${searchOverlayOpen ? 'open' : ''}`} id="searchOverlay" style={{ display: searchOverlayOpen ? 'flex' : 'none', position: 'fixed', top: 0, left: 0, width: '100%', background: '#ffffff', zIndex: 2000, alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #EBEBEB', transition: 'padding 0.3s ease' }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <button aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', padding: 0, marginRight: '15px', display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <input type="text" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActiveCategory('all');
              setSearchOverlayOpen(false);
              const shopEl = document.getElementById('shop');
              if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
            }
          }} style={{ flex: 1, border: 'none', background: 'transparent', outline: 'none', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: '1rem', color: '#333', fontWeight: 400, padding: '5px 0' }} />
          <button className="search-close" onClick={() => {setSearchOverlayOpen(false); setSearchQuery('');}} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#555', padding: 0, marginLeft: '15px', display: 'flex', alignItems: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>

      {/* ========== LOGIN OVERLAY ========== */}
      <div className={`login-overlay ${loginOpen ? 'open' : ''}`}>
        <button className="login-close" onClick={() => { setLoginOpen(false); setLoginStep('email'); }}>×</button>
        <div className="login-split">
          <div className="login-left">
            <h1 className="login-logo">ALMOND</h1>
            
            {loginStep === 'email' ? (
              <div className="login-form-container">
                <h3 className="login-heading">LOG IN OR REGISTER</h3>
                <div className="input-group">
                  <input type="email" placeholder="EMAIL" className="login-input" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <button className="login-btn-primary" onClick={() => { if (loginEmail) setLoginStep('register'); }}>CONTINUE</button>

                <h4 className="login-subheading">ACCESS WITH</h4>
                <p className="login-terms">By logging in with my social login, I agree to link my account in accordance with the Privacy Policy</p>
                
                <button className="login-btn-secondary">QR CONTINUE WITH QR</button>
                <button className="login-btn-secondary">G CONTINUE WITH GOOGLE</button>
                <button className="login-btn-secondary"> CONTINUE WITH APPLE</button>
              </div>
            ) : loginStep === 'register' ? (
              <div className="login-form-container">
                <h3 className="login-heading" style={{ color: '#555', fontWeight: 400, letterSpacing: '0.05em' }}>PERSONAL DETAILS</h3>
                <div className="input-group" style={{ marginBottom: '30px' }}>
                  <input type="email" placeholder="E-MAIL" className="login-input" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <div className="input-group" style={{ marginBottom: '30px', position: 'relative' }}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="PASSWORD" 
                    className="login-input" 
                    style={{ paddingRight: '30px' }} 
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '0',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#888',
                      padding: '5px'
                    }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    )}
                  </button>
                </div>
                <div className="input-group" style={{ marginBottom: '30px' }}>
                  <input type="text" placeholder="NAME" className="login-input" value={loginName} onChange={(e) => setLoginName(e.target.value)} />
                </div>
                <div className="input-group" style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                  <input type="text" placeholder="PREFIX" className="login-input" style={{ width: '60px' }} value={loginPhonePrefix} onChange={(e) => setLoginPhonePrefix(e.target.value)} />
                  <input type="tel" placeholder="TELEPHONE" className="login-input" style={{ flex: 1 }} value={loginTelephone} onChange={(e) => setLoginTelephone(e.target.value)} />
                </div>
                <p className="login-terms" style={{ marginBottom: '30px' }}>We will send you an SMS to verify your phone number</p>

                <div className="checkbox-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '20px' }}>
                  <input type="checkbox" id="news" style={{ marginTop: '4px', cursor: 'pointer' }} checked={loginNewsConsent} onChange={(e) => setLoginNewsConsent(e.target.checked)} />
                  <label htmlFor="news" style={{ fontSize: '0.85rem', color: '#555', cursor: 'pointer' }}>I wish to receive ALMOND news on my e-mail</label>
                </div>
                <div className="checkbox-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '40px' }}>
                  <input type="checkbox" id="privacy" style={{ marginTop: '4px', cursor: 'pointer' }} checked={loginPrivacyConsent} onChange={(e) => setLoginPrivacyConsent(e.target.checked)} />
                  <label htmlFor="privacy" style={{ fontSize: '0.85rem', color: '#555', cursor: 'pointer' }}>I accept the <a href="#" style={{ textDecoration: 'underline', color: '#333' }}>privacy statement</a></label>
                </div>

                <button className="login-btn-primary" style={{ width: 'auto', padding: '14px 40px', letterSpacing: '0.05em' }} onClick={handleRegister}>CREATE ACCOUNT</button>
              </div>
            ) : (
              <div className="login-form-container">
                <h3 className="login-heading" style={{ color: '#555', fontWeight: 400, letterSpacing: '0.05em', marginBottom: '20px' }}>PHONE NUMBER VERIFICATION</h3>
                <p className="login-terms" style={{ marginBottom: '40px', color: '#555' }}>Please enter the code sent to {loginPhonePrefix} {loginTelephone}</p>
                
                <div className="input-group" style={{ marginBottom: '40px' }}>
                  <p style={{ fontSize: '0.75rem', color: '#aaa', marginBottom: '5px' }}>VERIFICATION CODE</p>
                  <input type="text" className="login-input" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                </div>

                <button className="login-btn-secondary" style={{ width: 'auto', padding: '14px 40px', letterSpacing: '0.05em', marginBottom: '40px', borderColor: '#333' }} onClick={handleVerify}>VERIFY</button>
                
                <p className="login-terms" style={{ color: '#555' }}>TROUBLE RECEIVING YOUR CODE?</p>
              </div>
            )}
          </div>
          <div className="login-right">
            <img src="/images/Screenshot 2026-06-06 134020.png" alt="Editorial Fashion" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
