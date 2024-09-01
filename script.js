// Select elements from the DOM
const btn = document.querySelector('.btn');
const code = document.querySelector('.code');
const input = document.querySelector('.input');
const toast = document.querySelector('#toast');

// Add event listener to the button
btn.addEventListener('click', generate);

// Function to generate QR code
function generate() {
    const data = input.value.trim(); // Trim whitespace from input
    if (data) { // Check if input is not empty
        const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
        code.src = URL;
        showToast("Successfully Generated!!!");
    } else {
        showToast("Please enter text or a link.");
    }
}

// Function to display toast notification
function showToast(message) {
    toast.textContent = message; // Set the message
    toast.style.display = 'block'; // Show the toast
    setTimeout(function() {
        toast.style.display = 'none'; // Hide the toast after 2 seconds
    }, 2000);
}
