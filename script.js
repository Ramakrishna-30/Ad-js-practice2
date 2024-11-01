 // Sample Product Data
const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Headphones', price: 200 },
    { id: 3, name: 'Keyboard', price: 150 },
    { id: 4, name: 'Monitor', price: 300 }
];

// Destructuring Example - Display Products
function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(({ id, name, price }) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${name}</h3>
            <p>Price: $${price}</p>
            <button onclick="addToCart(${id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}
displayProducts();

// Cart array and functions to manage the cart
let cart = [];

// Function to add items to the cart
function addToCart(id) {
    const product = products.find(product => product.id === id);
    cart.push(product);
    updateCart();
    alert(`${product.name} has been added to your cart!`);
}

// Function to display the cart contents and total price
function updateCart() {
    const cartList = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');

    // Clear current cart display
    cartList.innerHTML = '';

    // Display each item in the cart
    cart.forEach(({ name, price }) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<p>${name}</p><p>$${price}</p>`;
        cartList.appendChild(cartItem);
    });

    // Calculate and display the total cost
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Total: $${total}`;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCart();
    alert('The cart has been cleared.');
}

// Higher Order Functions - Filter Expensive Products
function filterExpensiveProducts() {
    const expensiveProducts = products.filter(product => product.price > 300);
    console.log('Expensive Products:', expensiveProducts);
}
filterExpensiveProducts();

// Asynchronous Function - Simulating an API Fetch
async function placeOrder() {
    document.getElementById('orderStatus').textContent = 'Placing order...';

    try {
        const orderResult = await processOrder();
        document.getElementById('orderStatus').textContent = orderResult;
    } catch (error) {
        document.getElementById('orderStatus').textContent = 'Order failed. Please try again.';
    }
}

// Promise Example - Order Processing Simulation
function processOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cart.length > 0) {
                resolve('Order placed successfully!');
            } else {
                reject('Cart is empty. Please add items to the cart.');
            }
        }, 2000);
    });
}
