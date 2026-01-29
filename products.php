<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products - MorningSide Mobile</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="container">
                <div class="nav-brand">
                    <div class="logo-container">
                        <img src="assets/img/logo.jpg" alt="MorningSide Mobile Logo" class="logo-image">
                        <h1><a href="index.php" style="text-decoration: none; color: inherit;">MorningSide Mobile</a></h1>
                    </div>
                </div>
                <ul class="nav-menu">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="products.php" class="active">Products</a></li>
                    <li><a href="about.php">About</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-background"></div>
        <div class="container">
            <div class="hero-content">
                <h1>Our Products</h1>
                <p>Discover our complete range of mobile phones and accessories with cutting-edge technology</p>
                <div class="hero-buttons">
                    <a href="#featured" class="btn btn-primary">Featured Products</a>
                    <a href="#all-products" class="btn btn-secondary">View All</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Statistics Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number">500+</h3>
                        <p class="stat-label">Products</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number">20+</h3>
                        <p class="stat-label">Brands</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-shipping-fast"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number">24hr</h3>
                        <p class="stat-label">Fast Delivery</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="stat-content">
                        <h3 class="stat-number">100%</h3>
                        <p class="stat-label">Authentic</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Page Header -->
    <section class="page-header" id="all-products">
        <div class="container">
            <h1 style="color: #dce1deff;">Browse All Products</h1>
            <p>Find the perfect mobile device for your needs</p>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products-section">
        <div class="container">
            <!-- Filter Options -->
            <div class="filter-section">
                <div class="filter-row">
                    <div class="filter-group">
                        <label for="category">Category:</label>
                        <select id="category">
                            <option value="">All Categories</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="brand">Brand:</label>
                        <select id="brand">
                            <option value="">All Brands</option>
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="google">Google</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="price">Price Range:</label>
                        <select id="price">
                            <option value="">All Prices</option>
                            <option value="0-500">Under $500</option>
                            <option value="500-1000">$500 - $1000</option>
                            <option value="1000+">Over $1000</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="sort">Sort By:</label>
                        <select id="sort">
                            <option value="featured">Featured</option>
                            <option value="name">Name: A-Z</option>
                            <option value="rating">Rating: High to Low</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label for="search">Search:</label>
                        <input type="text" id="search" placeholder="Search products...">
                    </div>
                </div>
            </div>

            <!-- Products Grid -->
            <div class="products-grid">
                <div class="product-card" data-category="smartphones" data-brand="apple" data-rating="4.8" data-name="iPhone 17 ProMax" data-featured="true">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/f39c12/ffffff?text=iPhone+17" alt="iPhone 17 ProMax">
                        <span class="badge">New</span>
                        <span class="badge featured">Featured</span>
                    </div>
                    <div class="product-info">
                        <h3>iPhone 17 ProMax</h3>
                        <p class="brand">Apple</p>
                        <p class="description">6.7" Super Retina XDR display, A19 Pro chip, Titanium design</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(4.8)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card" data-category="smartphones" data-brand="samsung" data-rating="4.9" data-name="Samsung 25 Ultra" data-featured="true">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/3498db/ffffff?text=Galaxy+25" alt="Samsung 25 Ultra">
                        <span class="badge">Hot</span>
                    </div>
                    <div class="product-info">
                        <h3>Samsung 25 Ultra</h3>
                        <p class="brand">Samsung</p>
                        <p class="description">6.8" Dynamic AMOLED 2X, S Pen included, 250MP camera</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(4.9)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card" data-category="smartphones" data-brand="apple" data-rating="4.7" data-name="iPhone 17 Pro" data-featured="false">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/2ecc71/ffffff?text=iPhone+17" alt="iPhone 17 Pro">
                        <span class="badge">New</span>
                    </div>
                    <div class="product-info">
                        <h3>iPhone 17 Pro</h3>
                        <p class="brand">Apple</p>
                        <p class="description">6.1" Super Retina XDR display, A19 Pro chip, Pro camera system</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.7)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card" data-category="smartphones" data-brand="apple" data-rating="4.6" data-name="iPhone 16" data-featured="false">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/e74c3c/ffffff?text=iPhone+16" alt="iPhone 16">
                        <span class="badge">Popular</span>
                    </div>
                    <div class="product-info">
                        <h3>iPhone 16</h3>
                        <p class="brand">Apple</p>
                        <p class="description">6.1" Super Retina XDR display, A18 chip, Advanced dual-camera</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.6)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card" data-category="smartphones" data-brand="samsung" data-rating="4.5" data-name="Samsung 25 Fe" data-featured="false">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/9b59b6/ffffff?text=Galaxy+25" alt="Samsung 25 Fe">
                    </div>
                    <div class="product-info">
                        <h3>Samsung 25 Fe</h3>
                        <p class="brand">Samsung</p>
                        <p class="description">6.4" Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 50MP camera</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.5)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card" data-category="smartphones" data-brand="samsung" data-rating="4.8" data-name="Samsung Z Flip 7" data-featured="true">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/1abc9c/ffffff?text=Z+Flip+7" alt="Samsung Z Flip 7">
                        <span class="badge">New</span>
                        <span class="badge featured">Featured</span>
                    </div>
                    <div class="product-info">
                        <h3>Samsung Z Flip 7</h3>
                        <p class="brand">Samsung</p>
                        <p class="description">6.7" Flex Dynamic AMOLED 2X, Flex Hinge, Cover Screen</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(4.8)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/2ecc71/ffffff?text=Pixel+8+Pro" alt="Google Pixel 8 Pro">
                    </div>
                    <div class="product-info">
                        <h3>Pixel 8 Pro</h3>
                        <p class="brand">Google</p>
                        <p class="description">6.7" LTPO OLED, Tensor G3, Advanced AI features</p>
                        <div class="price-row">
                            <p class="price">$999.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span>(4.0)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/e74c3c/ffffff?text=OnePlus+12" alt="OnePlus 12">
                    </div>
                    <div class="product-info">
                        <h3>OnePlus 12</h3>
                        <p class="brand">OnePlus</p>
                        <p class="description">6.82" LTPO 3.0 AMOLED, Snapdragon 8 Gen 3</p>
                        <div class="price-row">
                            <p class="price">$799.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span>(4.2)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/9b59b6/ffffff?text=iPhone+15" alt="iPhone 15">
                    </div>
                    <div class="product-info">
                        <h3>iPhone 15</h3>
                        <p class="brand">Apple</p>
                        <p class="description">6.1" Super Retina XDR, A16 Bionic, Dynamic Island</p>
                        <div class="price-row">
                            <p class="price">$799.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.5)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/1abc9c/ffffff?text=Galaxy+S24" alt="Samsung Galaxy S24">
                    </div>
                    <div class="product-info">
                        <h3>Galaxy S24</h3>
                        <p class="brand">Samsung</p>
                        <p class="description">6.2" Dynamic AMOLED 2X, Snapdragon 8 Gen 3</p>
                        <div class="price-row">
                            <p class="price">$799.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span>(4.3)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/f39c12/ffffff?text=iPad+Pro" alt="iPad Pro">
                        <span class="badge">Tablet</span>
                    </div>
                    <div class="product-info">
                        <h3>iPad Pro 12.9"</h3>
                        <p class="brand">Apple</p>
                        <p class="description">12.9" Liquid Retina XDR, M2 chip, ProMotion</p>
                        <div class="price-row">
                            <p class="price">$1,099.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>(5.0)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">
                        <img src="https://via.placeholder.com/300x300/3498db/ffffff?text=AirPods+Pro" alt="AirPods Pro">
                        <span class="badge">Accessory</span>
                    </div>
                    <div class="product-info">
                        <h3>AirPods Pro (2nd Gen)</h3>
                        <p class="brand">Apple</p>
                        <p class="description">Active Noise Cancellation, Adaptive Audio</p>
                        <div class="price-row">
                            <p class="price">$249.99</p>
                        </div>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>(4.7)</span>
                        </div>
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="pagination">
                <button class="btn btn-secondary" disabled>Previous</button>
                <span class="page-numbers">
                    <button class="btn btn-primary active">1</button>
                    <button class="btn btn-secondary">2</button>
                    <button class="btn btn-secondary">3</button>
                    <span>...</span>
                    <button class="btn btn-secondary">10</button>
                </span>
                <button class="btn btn-secondary">Next</button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MorningSide Mobile</h3>
                    <p>Your trusted mobile phone shop with the latest devices and accessories.</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="products.php">Products</a></li>
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Shipping Info</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/share/1EjJodtzLC/?mibextid=wwXIfr" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.tiktok.com/@morningsidemobile?is_from_webapp=1&sender_device=pc" target="_blank"><i class="fab fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/morningside.mobile?igsh=MThoNXhtaGxqd3Roeg==" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MorningSide Mobile. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Product Details Modal -->
    <div id="productModal" class="product-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalProductName">Product Name</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img id="modalProductImage" src="" alt="Product Image">
                </div>
                <div class="modal-info">
                    <p class="modal-brand" id="modalProductBrand">Brand</p>
                    <p class="modal-description" id="modalProductDescription">Description</p>
                    <div class="modal-rating" id="modalProductRating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>(4.5)</span>
                    </div>
                    <div class="modal-features">
                        <h3>Key Features</h3>
                        <ul id="modalProductFeatures">
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <button class="btn btn-primary btn-large">Contact for Details</button>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/js/script.js"></script>
</body>
</html>
