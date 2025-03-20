// script.js

// Show the booking page when the button is clicked
function showBookingPage() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('booking').style.display = 'block';
}

// Handle form submission and display confirmation
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const service = document.getElementById('service').value;

  // You can add more logic here to store the form data or send an email

  // For now, just show the thank-you page
  document.getElementById('booking').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';

  // Optionally, open WhatsApp for confirmation
  const whatsappMessage = `Hello, I have booked an appointment for ${service} on ${date}.`;
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, '_blank');
});

