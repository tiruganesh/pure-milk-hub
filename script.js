document.getElementById('milkOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('milk-name').value;
    const quantity = document.getElementById('milk-quantity').value;
    const address = document.getElementById('milk-address').value;

    // WhatsApp message content for milk order
    const message = `Hello, I want to order ${quantity} liters of milk. 
    \nName: ${name} 
    \nDelivery Address: ${address}`;

    // Your WhatsApp number
    const phoneNumber = "9121556689"; 

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");
});


document.getElementById('curdOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('curd-name').value;
    const quantity = document.getElementById('curd-quantity').value;
    const address = document.getElementById('curd-address').value;

    // WhatsApp message content for curd order
    const message = `Hello, I want to order ${quantity} kgs of curd. 
    \nName: ${name} 
    \nDelivery Address: ${address}`;

    // Your WhatsApp number
    const phoneNumber = "9121556689"; 

    // Encode the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");
});
