// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Find all button elements with the class "order-button"
    const orderButtons = document.querySelectorAll(".order-button");

    // Define the WhatsApp link with the phone number and message
    const phoneNumber = "+260779769456"; // Replace with the recipient's phone number
    const message = "I'd like to place an order"; // Replace with your desired message
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Add a click event listener to each "Order Now" button
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Open WhatsApp in a new tab or window
            window.open(whatsappLink);
        });
    });
});
