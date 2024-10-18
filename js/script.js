document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([51.505, -0.09], 13); // Coordinates for map center
  
    // Add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // You can make API requests here, e.g., to fetch locations from your API
    fetch('https://api.example.com/get-map-data')
      .then(response => response.json())
      .then(data => {
        data.forEach(location => {
          L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(location.name)
            .openPopup();
        });
      })
      .catch(error => console.log('Error fetching map data:', error));
  });