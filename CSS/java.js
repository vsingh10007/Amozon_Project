// Search Bar Functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const products = document.querySelectorAll('.product');

// Filter products based on the search term
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category').toLowerCase();
        if (productName.includes(query) || productCategory.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productName = productElement.querySelector('h2').textContent;
        const productPrice = productElement.querySelector('p').textContent;
        
        // Create product object
        const product = {
            name: productName,
            price: productPrice,
            quantity: 1
        };

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        // Save the cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} added to cart!`);
    });
});
