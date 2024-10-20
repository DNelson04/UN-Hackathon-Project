document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([40.7128, -74.0060], 12); 
  
   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    
    const normalIcon = L.icon({
        iconUrl: 'images/normal-icon.png',
        iconSize: [40, 41], 
        iconAnchor: [12, 45], 
        popupAnchor: [1, -34] 
    });

    const hoverIcon = L.icon({
        iconUrl: 'images/hover-icon.png',
        iconSize: [45, 41], 
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34] 
    });

    console.log('Map initialized');
    var marker = L.marker([40.7536, -73.9832], { icon: normalIcon }).addTo(map)
        .bindPopup(`
            <div class="popup-content">
                <h3>Restroom</h3>
                <p>Location: Bryant Park</p>
                <p>Clean and accessible!</p>
            </div>
        `)
        .openPopup();
        console.log('Marker added');

    
    marker.on('mouseover', function() {
        this.setIcon(hoverIcon); 
    });

    marker.on('mouseout', function() {
        this.setIcon(normalIcon); 
    });

    


    const locations = [
        { lat: 40.7496, lng: -73.9877, name: 'Location 1' },
        { lat: 40.7580, lng: -73.9855, name: 'Location 2' }
    ];

    locations.forEach(location => {
        var dynamicMarker = L.marker([location.lat, location.lng], { icon: normalIcon }).addTo(map)
            .bindPopup(`
                <div class="popup-content">
                    <h3>${location.name}</h3>
                    <p>Location details here.</p>
                </div>
            `);

      
        dynamicMarker.on('mouseover', function() {
            this.setIcon(hoverIcon); 
        });

        dynamicMarker.on('mouseout', function() {
            this.setIcon(normalIcon); 
        });
    });
});