import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '15px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
  margin: '20px 0'
};

const center = {
  lat: 23.2494,
  lng: -106.4111
};

const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
  gestureHandling: 'greedy'
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p style={{ textAlign: 'center' }}>Cargando mapa...</p>;
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '10px' }}>
        🗺️ Mi Ubicación en Mazatlán
      </h2>
      <GoogleMap 
        mapContainerStyle={containerStyle} 
        center={center} 
        zoom={14}
        options={mapOptions}
      >
        <Marker position={center} onClick={() => setMostrarInfo(true)} />

        {mostrarInfo && (
          <InfoWindow position={center} onCloseClick={() => setMostrarInfo(false)}>
            <div style={{ padding: '5px' }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#3f51b5' }}>📍 Mi ubicación</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>Mazatlán, Sinaloa, México</p>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
      <p style={{ textAlign: 'center', color: '#666', marginTop: '10px' }}>
        Haz clic en el marcador para ver más información
      </p>
    </div>
  );
}

export { Mapa };