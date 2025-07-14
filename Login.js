// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation
    if (username === 'kishor' && password === '12345') {
        alert('Login successful');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        alert('Invalid credentials');
    }
});



// Function to update the price for a specific item
function updatePrice(item, pricePerItem) {
    var quantity = document.getElementById(item + '-quantity').value;
    var totalPrice = quantity * pricePerItem;
    document.getElementById(item + '-price').textContent = totalPrice;
    updateTotalBill(); // Update total bill whenever item price changes
}

// Function to calculate and update the total bill
function updateTotalBill() {
    // Define item prices
    const prices = {
        pizza: 100,
        salad: 200,
        pasta: 150,
        burger: 120,
        fries: 80,
        icecream: 60,
        soup: 90,
        cake: 250
    };

    // Initialize total bill
    let totalBill = 0;

    // Loop through each item and add its total price to the total bill
    for (const item in prices) {
        const quantityElement = document.getElementById(item + '-quantity');
        if (quantityElement) {
            const quantity = quantityElement.value;
            totalBill += quantity * prices[item];
        }
    }

    // Display the total bill amount
    const totalBillElement = document.getElementById('total-bill');
    if (totalBillElement) {
        totalBillElement.textContent = totalBill;
    }
}

// Call updateTotalBill initially to set the starting total amount
window.onload = function() {
    updateTotalBill();
};