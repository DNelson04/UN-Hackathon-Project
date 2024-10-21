document.addEventListener('DOMContentLoaded', () => {
  var map = L.map('map').setView([40.7128, -74.0060], 12);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  
  const restroomIcon = L.icon({
      iconUrl: 'images/normal-icon.png', 
      iconSize: [40, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
  });
  const restroomhoverIcon = L.icon({
    iconUrl: 'images/normal-icon.png', 
    iconSize: [45, 43],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });
  const trashcanhovericon = L.icon({
    iconUrl: 'images/trash-can-icon.png', 
    iconSize: [45, 43],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
  });

  const trashCanIcon = L.icon({
      iconUrl: 'images/trash-can-icon.png', 
      iconSize: [40, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
  });

  
  const restroomLocations = [
    { lat: 40.7536, lng: -73.9832, name: 'Restroom 1', details: 'Location: Bryant Park, Clean and accessible!' },
    { lat: 40.7496, lng: -73.9877, name: 'Restroom 2', details: 'Location: Grand Central Terminal, Clean and accessible!' },
    { lat: 40.7580, lng: -73.9855, name: 'Restroom 3', details: 'Location: Times Square, Clean and accessible!' },
    { lat: 40.7306, lng: -73.9352, name: 'Restroom 4', details: 'Location: Central Park, Clean and accessible!' },
    { lat: 40.7410, lng: -73.9937, name: 'Restroom 5', details: 'Location: The High Line, Clean and accessible!' },
    { lat: 40.7127, lng: -74.0134, name: 'Restroom 6', details: 'Location: Battery Park, Clean and accessible!' },
    { lat: 40.7490, lng: -73.9754, name: 'Restroom 7', details: 'Location: Empire State Building, Clean and accessible!' },
    { lat: 40.7851, lng: -73.9683, name: 'Restroom 8', details: 'Location: Metropolitan Museum of Art, Clean and accessible!' },
    { lat: 40.7233, lng: -73.9976, name: 'Restroom 9', details: 'Location: Near Chelsea Market, Clean and accessible!' },
    { lat: 40.7061, lng: -74.0083, name: 'Restroom 10', details: 'Location: Near One World Trade Center, Clean and accessible!' },
    { lat: 40.7655, lng: -73.9742, name: 'Restroom 11', details: 'Location: Near Lincoln Center, Clean and accessible!' },
    { lat: 40.7404, lng: -73.9883, name: 'Restroom 12', details: 'Location: Near The Vessel, Clean and accessible!' },
    { lat: 40.7316, lng: -73.9865, name: 'Restroom 13', details: 'Location: Near NYU Campus, Clean and accessible!' },
    { lat: 40.7515, lng: -73.9933, name: 'Restroom 14', details: 'Location: Near Madison Square Garden, Clean and accessible!' },
    { lat: 40.7281, lng: -73.9922, name: 'Restroom 15', details: 'Location: Near Washington Square Park, Clean and accessible!' },
    { lat: 40.7587, lng: -73.9796, name: 'Restroom 16', details: 'Location: Near Rockefeller Center, Clean and accessible!' },
    { lat: 40.7602, lng: -73.9813, name: 'Restroom 17', details: 'Location: Near Times Square Subway Station, Clean and accessible!' },
    { lat: 40.7049, lng: -74.0133, name: 'Restroom 18', details: 'Location: Near the Battery Park City, Clean and accessible!' },
    { lat: 40.7499, lng: -73.9781, name: 'Restroom 19', details: 'Location: Near the New Amsterdam Theater, Clean and accessible!' },
    { lat: 40.7233, lng: -73.9865, name: 'Restroom 20', details: 'Location: Near the Bowery, Clean and accessible!' },
    { lat: 40.7055, lng: -74.0091, name: 'Restroom 21', details: 'Location: Near South Street Seaport, Clean and accessible!' },
    { lat: 40.7190, lng: -74.0035, name: 'Restroom 22', details: 'Location: Near the East River Park, Clean and accessible!' },
    { lat: 40.6887, lng: -74.0270, name: 'Restroom 23', details: 'Location: Near the Staten Island Ferry Terminal, Clean and accessible!' },
    { lat: 40.7203, lng: -73.9940, name: 'Restroom 24', details: 'Location: Near the Hudson River Park, Clean and accessible!' }
  ];

 
  const trashCanLocations = [
    { lat: 40.7536, lng: -73.9842, name: 'Trash Can 1', details: 'Location: Near Bryant Park' },
    { lat: 40.7496, lng: -73.9860, name: 'Trash Can 2', details: 'Location: Grand Central Terminal Entrance' },
    { lat: 40.7585, lng: -73.9850, name: 'Trash Can 3', details: 'Location: Times Square' },
    { lat: 40.7308, lng: -73.9353, name: 'Trash Can 4', details: 'Location: Central Park Entrance' },
    { lat: 40.7411, lng: -73.9940, name: 'Trash Can 5', details: 'Location: The High Line' },
    { lat: 40.7120, lng: -74.0120, name: 'Trash Can 6', details: 'Location: Battery Park' },
    { lat: 40.7494, lng: -73.9758, name: 'Trash Can 7', details: 'Location: Empire State Building' },
    { lat: 40.7854, lng: -73.9685, name: 'Trash Can 8', details: 'Location: Metropolitan Museum of Art' },
    { lat: 40.7585, lng: -73.9865, name: 'Trash Can 9', details: 'Location: Near M&M'},
    { lat: 40.7200, lng: -73.9880, name: 'Trash Can 10', details: 'Location: Washington Square Park' },
    { lat: 40.7420, lng: -73.9840, name: 'Trash Can 11', details: 'Location: Near the New York Public Library' },
    { lat: 40.7652, lng: -73.9795, name: 'Trash Can 12', details: 'Location: Near the UN Headquarters' },
    { lat: 40.7074, lng: -74.0128, name: 'Trash Can 13', details: 'Location: Near One World Trade Center' },
    { lat: 40.7763, lng: -73.9797, name: 'Trash Can 14', details: 'Location: Near Lincoln Center' },
    { lat: 40.7499, lng: -73.9683, name: 'Trash Can 15', details: 'Location: Near the Vessel at Hudson Yards' },
    { lat: 40.7584, lng: -73.9799, name: 'Trash Can 16', details: 'Location: Near Radio City Music Hall' },
    { lat: 40.7510, lng: -73.9945, name: 'Trash Can 17', details: 'Location: Near Madison Square Garden' },
    { lat: 40.7375, lng: -73.9952, name: 'Trash Can 18', details: 'Location: Near Chelsea Market' },
    { lat: 40.7302, lng: -73.9940, name: 'Trash Can 19', details: 'Location: Near the High Line Entrance' },
    { lat: 40.7300, lng: -73.9905, name: 'Trash Can 20', details: 'Location: Near the Whitney Museum' },
    { lat: 40.7427, lng: -73.9998, name: 'Trash Can 21', details: 'Location: Near the Hudson River Park' },
    { lat: 40.7190, lng: -74.0035, name: 'Trash Can 22', details: 'Location: Near the Battery Park City Esplanade' },
    { lat: 40.7576, lng: -76.9810, name: 'Trash Can 23', details: 'Location: Near the New Amsterdam Theater' },
    { lat: 40.7343, lng: -73.9855, name: 'Trash Can 24', details: 'Location: Near the Bowery' },
    { lat: 40.7114, lng: -74.0080, name: 'Trash Can 25', details: 'Location: Near Wall Street' },
    { lat: 40.7030, lng: -74.0174, name: 'Trash Can 26', details: 'Location: Near South Street Seaport' },
    { lat: 40.7307, lng: -73.9358, name: 'Trash Can 27', details: 'Location: Near the East River Park' },
    { lat: 40.6887, lng: -94.0270, name: 'Trash Can 28', details: 'Location: Near the Staten Island Ferry Terminal' },
    { lat: 40.7054, lng: -74.0170, name: 'Trash Can 29', details: 'Location: Near Battery Park' },
    { lat: 40.7121, lng: -104.0145, name: 'Trash Can 30', details: 'Location: Near the World Trade Center' },
    { lat: 40.7516, lng: -73.9933, name: 'Trash Can 31', details: 'Location: Near Times Square Subway Station' },
    { lat: 40.7282, lng: -73.9870, name: 'Trash Can 32', details: 'Location: Near the NYU Campus' }
  ]


  restroomLocations.forEach(location => {
      var marker = L.marker([location.lat, location.lng], { icon: restroomIcon }).addTo(map)
          .bindPopup(`
              <div class="popup-content">
                  <h3>${location.name}</h3>
                  <p>${location.details}</p>
              </div>
          `);


      marker.on('mouseover', function() {
          this.setIcon(restroomhoverIcon); 
      });

      marker.on('mouseout', function() {
          this.setIcon(restroomIcon); 
      });
  });

  
  trashCanLocations.forEach(location => {
      var trashMarker = L.marker([location.lat, location.lng], { icon: trashCanIcon }).addTo(map)
          .bindPopup(`
              <div class="popup-content">
                  <h3>${location.name}</h3>
                  <p>${location.details}</p>
              </div>
          `);

      
      trashMarker.on('mouseover', function() {
          this.setIcon(trashcanhovericon); 
      });

      trashMarker.on('mouseout', function() {
          this.setIcon(trashCanIcon); 
      });
  });
});