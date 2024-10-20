document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([40.7128, -74.0060], 12); // Coordinates for map center
  
    // Add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    

    var marker = L.marker([40.7536, -73.9832]).addTo(map)
    .bindPopup(`
            <div class="popup-content">
              <h3>Restroom</h3>
              <p>Location: Bryant Park</p>
              <p>Clean and accessible!</p>
            </div>
      `)
    .openPopup();
  
    // You can make API requests here, e.g., to fetch locations from your API
    fetch('https://api.example.com/get-map-data')
      .then(response => response.json())
      .then(data => {
        data.forEach(location => {
          L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`
                        <div class="popup-content">
                          <h3>${location.name}</h3>
                          <p>Location details here.</p>
                        </div>
              
              `)
            .openPopup();
        });
      })
      .catch(error => console.log('Error fetching map data:', error));
  });

