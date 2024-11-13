function predictClimate() {
    const date = document.getElementById("future-date").value;
    const result = document.getElementById("prediction-result");
  
    if (date) {
      result.innerText = `Fetching climate prediction for ${date}... (Add your ML model here!)`;
    } else {
      result.innerText = "Please enter a valid date.";
    }
  }
// Initialize Leaflet Map
const map = L.map('map').setView([22.5726, 88.3639], 12); // Centered on Kolkata

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Add a draggable marker
const marker = L.marker([22.5726, 88.3639], { draggable: true }).addTo(map);

// Update location input when marker is dragged
marker.on('dragend', function() {
  const position = marker.getLatLng();
  document.getElementById('location').value = `Lat: ${position.lat.toFixed(4)}, Lng: ${position.lng.toFixed(4)}`;
});

// Climate prediction function
function predictClimate() {
  const years = document.getElementById("years").value;
  const months = document.getElementById("months").value;
  const location = document.getElementById("location").value;
  const result = document.getElementById("prediction-result");

  if (years && months && location) {
    result.innerText = `Fetching climate prediction for ${location} in ${years} years and ${months} months... (Add your ML model here!)`;
  } else {
    result.innerText = "Please enter valid values for years, months, and location.";
  }
}
// Smooth navigation function
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  // Add a click event listener to all navigation links
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default navigation

      // Add fade-out animation
      document.body.classList.add("fade-out");

      // Navigate to the link after the fade-out animation completes
      setTimeout(() => {
        window.location.href = this.href;
      }, 300); // Match this with the fade-out animation duration
    });
  });
});
