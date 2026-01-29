// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Cart functionality
let cart = [];
let cartCount = 0;

// Add to cart buttons
document.querySelectorAll('.btn-secondary').forEach(button => {
    if (button.textContent === 'Add to Cart') {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            addToCart(productName, productPrice);
            
            // Visual feedback
            this.textContent = 'Added!';
            this.style.background = '#27ae60';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '#2ecc71';
            }, 2000);
        });
    }
});

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification(`${name} added to cart!`);
}

function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! We will get back to you soon.');
        this.reset();
    });
}

// Category card interactions
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent;
        showNotification(`Browsing ${categoryName}...`);
        // In a real application, this would filter products
    });
});

// Product card hover effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px)';
    });
});

// Lazy loading for images (simple implementation)
const images = document.querySelectorAll('img');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.5s';
                img.style.opacity = '1';
            });
            observer.unobserve(img);
        }
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.background = '#2980b9';
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.background = '#3498db';
    scrollToTopBtn.style.transform = 'scale(1)';
});

// Formspree Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Honeypot check - if filled, it's likely spam
            const honeypot = document.getElementById('honeypot');
            if (honeypot && honeypot.value) {
                showNotification('Invalid submission detected.', 'error');
                return;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Basic validation
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const message = formData.get('message');
            
            if (!firstName || !lastName || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    showNotification('✅ Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    
                    // Scroll to top of form
                    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Log success for debugging
                    console.log('Form submitted successfully to Formspree');
                    
                    // Also show a success message in the form area
                    const formSection = document.querySelector('.contact-form-section');
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success-message';
                    successMessage.innerHTML = `
                        <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); color: white; padding: 20px; border-radius: 15px; margin-bottom: 20px; text-align: center; font-weight: 500; box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);">
                            <i class="fas fa-check-circle" style="font-size: 24px; margin-right: 10px;"></i>
                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </div>
                    `;
                    formSection.insertBefore(successMessage, formSection.firstChild);
                    
                    // Remove success message after 10 seconds
                    setTimeout(() => {
                        if (successMessage.parentNode) {
                            successMessage.parentNode.removeChild(successMessage);
                        }
                    }, 10000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                // Error
                showNotification('Oops! Something went wrong. Please try again.', 'error');
                console.error('Form submission error:', error);
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Product Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close-modal');
    const viewDetailsButtons = document.querySelectorAll('.btn-primary');
    
    // Product data
    const products = {
        'iPhone 15 Pro Max': {
            name: 'iPhone 15 Pro Max',
            brand: 'Apple',
            description: '6.7" Super Retina XDR display, A17 Pro chip, Titanium design with advanced camera system',
            image: 'https://via.placeholder.com/600x600/f39c12/ffffff?text=iPhone+15+Pro+Max',
            rating: 4.5,
            features: [
                'A17 Pro chip with 6-core CPU',
                'Pro camera system with 5x telephoto',
                'Titanium design - strongest ever',
                'USB-C connectivity',
                'Action button for customization'
            ]
        },
        'Galaxy S24 Ultra': {
            name: 'Galaxy S24 Ultra',
            brand: 'Samsung',
            description: '6.8" Dynamic AMOLED 2X, S Pen included, 200MP camera with AI capabilities',
            image: 'https://via.placeholder.com/600x600/3498db/ffffff?text=Galaxy+S24+Ultra',
            rating: 5.0,
            features: [
                '200MP main camera system',
                'Built-in S Pen functionality',
                'Galaxy AI features',
                '5000mAh battery',
                'Titanium frame construction'
            ]
        }
    };
    
    // Open modal when View Details is clicked
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product name from the card
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Get product data
            const product = products[productName];
            
            if (product) {
                // Update modal content
                document.getElementById('modalProductName').textContent = product.name;
                document.getElementById('modalProductBrand').textContent = product.brand;
                document.getElementById('modalProductDescription').textContent = product.description;
                document.getElementById('modalProductImage').src = product.image;
                document.getElementById('modalProductImage').alt = product.name;
                
                // Update rating
                const ratingContainer = document.getElementById('modalProductRating');
                const fullStars = Math.floor(product.rating);
                const hasHalfStar = product.rating % 1 !== 0;
                
                let ratingHTML = '';
                for (let i = 0; i < fullStars; i++) {
                    ratingHTML += '<i class="fas fa-star"></i>';
                }
                if (hasHalfStar) {
                    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
                }
                ratingHTML += `<span>(${product.rating})</span>`;
                ratingContainer.innerHTML = ratingHTML;
                
                // Update features
                const featuresList = document.getElementById('modalProductFeatures');
                featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal when X is clicked
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Dynamic Product Filtering and Sorting
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category');
    const brandFilter = document.getElementById('brand');
    const sortFilter = document.getElementById('sort');
    const searchInput = document.getElementById('search');
    const productCards = document.querySelectorAll('.product-card');
    
    // Filter and sort products
    function filterAndSortProducts() {
        const category = categoryFilter.value.toLowerCase();
        const brand = brandFilter.value.toLowerCase();
        const sortBy = sortFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        let filteredProducts = Array.from(productCards);
        
        // Filter by category
        if (category) {
            filteredProducts = filteredProducts.filter(card => 
                card.dataset.category === category
            );
        }
        
        // Filter by brand
        if (brand) {
            filteredProducts = filteredProducts.filter(card => 
                card.dataset.brand === brand
            );
        }
        
        // Filter by search term
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(card => {
                const name = card.dataset.name.toLowerCase();
                const brand = card.dataset.brand.toLowerCase();
                const description = card.querySelector('.description').textContent.toLowerCase();
                return name.includes(searchTerm) || 
                       brand.includes(searchTerm) || 
                       description.includes(searchTerm);
            });
        }
        
        // Sort products
        switch(sortBy) {
            case 'name':
                filteredProducts.sort((a, b) => 
                    a.dataset.name.localeCompare(b.dataset.name)
                );
                break;
            case 'rating':
                filteredProducts.sort((a, b) => 
                    parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating)
                );
                break;
            case 'featured':
                filteredProducts.sort((a, b) => {
                    const aFeatured = a.dataset.featured === 'true' ? 1 : 0;
                    const bFeatured = b.dataset.featured === 'true' ? 1 : 0;
                    return bFeatured - aFeatured;
                });
                break;
        }
        
        // Hide all products first
        productCards.forEach(card => {
            card.style.display = 'none';
            card.style.animation = 'none';
        });
        
        // Show filtered and sorted products with animation
        filteredProducts.forEach((card, index) => {
            setTimeout(() => {
                card.style.display = 'flex';
                card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
            }, index * 50);
        });
        
        // Show no results message if needed
        const productsGrid = document.querySelector('.products-grid');
        const existingMessage = productsGrid.querySelector('.no-results');
        
        if (existingMessage) {
            existingMessage.remove();
        }
        
        if (filteredProducts.length === 0) {
            const noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'no-results';
            noResultsMessage.innerHTML = `
                <div style="text-align: center; padding: 3rem; grid-column: 1 / -1;">
                    <i class="fas fa-search" style="font-size: 3rem; color: #667eea; margin-bottom: 1rem; display: block;"></i>
                    <h3 style="color: #2c3e50; margin-bottom: 0.5rem;">No products found</h3>
                    <p style="color: #6c757d;">Try adjusting your filters or search terms</p>
                </div>
            `;
            productsGrid.appendChild(noResultsMessage);
        }
    }
    
    // Add event listeners
    categoryFilter.addEventListener('change', filterAndSortProducts);
    brandFilter.addEventListener('change', filterAndSortProducts);
    sortFilter.addEventListener('change', filterAndSortProducts);
    searchInput.addEventListener('input', filterAndSortProducts);
    
    // Add real-time search with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterAndSortProducts, 300);
    });
    
    // Add clear filters button functionality
    const clearFiltersBtn = document.createElement('button');
    clearFiltersBtn.textContent = 'Clear Filters';
    clearFiltersBtn.className = 'btn btn-secondary';
    clearFiltersBtn.style.marginLeft = '1rem';
    clearFiltersBtn.addEventListener('click', function() {
        categoryFilter.value = '';
        brandFilter.value = '';
        sortFilter.value = 'featured';
        searchInput.value = '';
        filterAndSortProducts();
    });
    
    // Add clear button to filter section
    const filterRow = document.querySelector('.filter-row');
    if (filterRow && !filterRow.querySelector('.btn-secondary')) {
        const clearBtnContainer = document.createElement('div');
        clearBtnContainer.style.display = 'flex';
        clearBtnContainer.style.alignItems = 'end';
        clearBtnContainer.appendChild(clearFiltersBtn);
        filterRow.appendChild(clearBtnContainer);
    }
});

// Dynamic Features for All Pages
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ensure all regular links work properly
    const allLinks = document.querySelectorAll('a[href]:not([href^="#"])');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior for regular links
            console.log('Link clicked:', this.href);
        });
    });

    // Dynamic year in footer
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'fadeIn 0.5s ease-out';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not available';
        });
    });

    // Scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out both';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.product-card, .feature, .stat-card, .contact-method, .team-member');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Dynamic typing effect for hero titles
    const heroTitles = document.querySelectorAll('.hero-content h1');
    heroTitles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                title.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    });

    // Parallax effect for hero sections
    const heroSections = document.querySelectorAll('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        heroSections.forEach(hero => {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - scrolled / 600;
            }
        });
    });

    // Dynamic back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        font-size: 18px;
    `;

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(backToTop);

    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Dynamic page loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
        background-size: 200% 100%;
        animation: loading 2s linear infinite;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(loadingIndicator);

    // Show loading indicator on page navigation
    window.addEventListener('beforeunload', () => {
        loadingIndicator.style.opacity = '1';
    });

    // Hide loading indicator when page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingIndicator.style.opacity = '0';
        }, 500);
    });

    // Dynamic contact form enhancements (for contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    // Dynamic statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));
        const suffix = finalValue.replace(/\d/g, '');
        let currentValue = 0;
        const increment = numericValue / 50;
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(counter);
            }
            stat.textContent = Math.floor(currentValue) + suffix;
        }, 30);
    });
});

console.log('MorningSide Mobile website loaded successfully!');
