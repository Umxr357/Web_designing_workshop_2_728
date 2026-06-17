// Cart functionality
let cart = [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Add to cart
function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: parseFloat(price),
            quantity: 1
        });
    }
    
    updateCartCount();
    renderCart();
    
    // Show brief notification
    showNotification(`${productName} added to cart!`);
}

// Render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        document.getElementById('cart-total-amount').textContent = '0';
        return;
    }
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/80/80" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₹${item.price} × ${item.quantity}</p>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <div style="text-align: right;">
                <p>₹${itemTotal}</p>
                <button onclick="removeFromCart(${index})" style="color: red; background: none; border: none; cursor: pointer;">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    
    document.getElementById('cart-total-amount').textContent = total.toFixed(0);
}

// Change quantity
window.changeQuantity = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    renderCart();
}

// Remove from cart
window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#232f3e';
    notification.style.color = 'white';
    notification.style.padding = '12px 24px';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '2000';
    notification.style.opacity = '0.9';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Cart sidebar controls
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners to all add-to-cart buttons
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const container = e.target.closest('.box') || e.target.closest('.grid-item');
            if (container) {
                const productName = container.dataset.product;
                const price = container.dataset.price;
                if (productName && price) {
                    addToCart(productName, price);
                }
            }
        });
    });
    
    // Cart icon click
    const cartIcon = document.getElementById('nav-cart');
    cartIcon.addEventListener('click', toggleCart);
    
    // Close cart
    const closeCartBtn = document.getElementById('close-cart');
    closeCartBtn.addEventListener('click', toggleCart);
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your purchase! (Demo)');
            cart = [];
            updateCartCount();
            renderCart();
            toggleCart();
        }
    });
    
    // Initial render
    updateCartCount();
    renderCart();
    
    // Back to top functionality
    const backToTop = document.querySelector('.foot-panel1');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});