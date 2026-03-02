import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const locations = {
  Bengaluru: { lat: 12.9716, lng: 77.5946, isPrimary: true },
  Mysuru: { lat: 12.2958, lng: 76.6394 },
  Hubballi: { lat: 15.3647, lng: 75.124 },
  Dharwad: { lat: 15.4589, lng: 75.0824 },
  Belagavi: { lat: 15.8602, lng: 74.5054 },
  Mangaluru: { lat: 12.8654, lng: 74.884 },
  Tumakuru: { lat: 13.2184, lng: 77.1141 },
  Shivamogga: { lat: 13.7307, lng: 75.5678 },
  Ballari: { lat: 15.1394, lng: 76.925 },
  Davanagere: { lat: 14.4644, lng: 75.8961 },
  Hosapete: { lat: 15.258, lng: 76.3945 },
  Kolar: { lat: 13.1489, lng: 78.127 },
};

const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "1rem",
};

const center = {
  lat: 12.9716,
  lng: 77.5946,
};

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function BengaluruMap({ areas }) {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const filteredLocations = Object.fromEntries(
    Object.entries(locations).filter(([key]) => areas.includes(key))
  );

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-[var(--c-border)] bg-white shadow-[var(--shadow-sm)]">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={7}
          options={{
            streetViewControl: false,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          {Object.entries(filteredLocations).map(([name, location]) => (
            <Marker
              key={name}
              position={{ lat: location.lat, lng: location.lng }}
              title={name}
              onClick={() => setSelectedMarker(name)}
              icon={
                location.isPrimary
                  ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              }
            />
          ))}

          {selectedMarker && (
            <InfoWindow
              position={{
                lat: filteredLocations[selectedMarker].lat,
                lng: filteredLocations[selectedMarker].lng,
              }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div className="text-sm font-semibold text-[var(--c-ink)]">
                {selectedMarker}
                {filteredLocations[selectedMarker].isPrimary && (
                  <span className="ml-1 text-xs font-normal text-[var(--c-primary)]">
                    (Primary Base)
                  </span>
                )}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default BengaluruMap;
