document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const errorMessage = document.getElementById('errorMessage');
    const confirmationMessage = document.getElementById('confirmationMessage');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear previous messages
        errorMessage.textContent = '';
        confirmationMessage.textContent = '';

        // Get form values
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const food = document.getElementById('food').value;
        const quantity = document.getElementById('quantity').value;

        // Basic validation
        if (!name || !address || !food || !quantity) {
            errorMessage.textContent = 'Please fill out all fields.';
            return;
        }

        // Display confirmation message
        confirmationMessage.innerHTML = `
            <h2>Order Confirmation</h2>
            <p>Thank you, ${name}!</p>
            <p>Your order for ${quantity} ${food}(s) will be delivered to:</p>
            <p>${address}</p>
        `;
    });
