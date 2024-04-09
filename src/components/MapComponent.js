import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 


function MapComponent({latitude,longitude,ip}) {
  const mapRef = useRef(null);

  useEffect(() => {
   
    if(latitude !== 0 && longitude !== 0){
        if (!mapRef.current) {
    
            mapRef.current = L.map('map').setView([latitude, longitude], 15);
      
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors'
            }).addTo(mapRef.current);
      
           
            const customIcon = L.icon({
              iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
              iconSize: [25, 41], 
              iconAnchor: [12, 41], 
              popupAnchor: [1, -34] 
            });
      
            
            const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(mapRef.current);
            marker.bindPopup("<b>WELL WELL WELL</b><br> is this where u live?").openPopup();
          }
    }
  }, [ip,latitude,longitude]); 

  return (
    <div id="map" style={{ height: '400px',width:"1000px",}}></div>
  );
}

export default MapComponent;
{/* <div id="map" style={{ height: '400px',width:"1000px",display:"flex", alignItems:'center'}}></div> */}