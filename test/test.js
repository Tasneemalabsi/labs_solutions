const bookListing = document.getElementById('book-listing');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Array to store the books in the cart
let cartBooks = [];

// Function to add a book to the cart
function addToCart(book) {
  cartBooks.push(book);
}

// Function to update the cart
function updateCart() {
  // Clear existing cart items
  cartItems.innerHTML = '';

  // Calculate total price
  let total = 0;

  // Add each book to the cart items list
  cartBooks.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = book.title + ' - $' + book.price;
    cartItems.appendChild(li);
    total += book.price;
  });

  // Update the total price
  cartTotal.textContent = 'Total: $' + total.toFixed(2);
}

// Event listener for adding a book to the cart
bookListing.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const bookItem = event.target.closest('li');
    const bookId = bookItem.getAttribute('data-id');
    const bookTitle = bookItem.querySelector('h3').textContent;
    const bookPrice = 10.99; // Replace with actual price retrieval logic

    // Create a book object
    const book = {
      id: bookId,
      title: bookTitle,
      price: bookPrice
    };

    addToCart(book);
    updateCart();
  }
});

// Event listener for checkout button
cart.addEventListener('click', (event) => {
  if (event.target.id === 'checkout-btn') {
    alert('Checkout process initiated.'); // Replace with your desired checkout logic
  }
});