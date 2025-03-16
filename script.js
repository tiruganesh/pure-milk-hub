document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    // WhatsApp message content
    const message = `Hello, I want to order ${quantity} liters of milk. 
    \nName: ${name} 
    \nDelivery Address: ${address}`;

    // Your WhatsApp number
    const phoneNumber = "9121556689"; // Replace with your actual WhatsApp number

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open WhatsApp
    window.open(whatsappLink, "_blank");
});
