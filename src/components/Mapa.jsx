import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Mapa() {
  useEffect(() => {
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    const map = L.map("map").setView([-46.436891307387704, -67.53444347244996], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(map);

    L.marker([-46.436891307387704, -67.53444347244996]).addTo(map).bindPopup("MortaGym");

    return () => {
      map.remove(); 
    };
  }, []);

  return <div id="map" className="mapa-container"></div>;
}

export default Mapa;