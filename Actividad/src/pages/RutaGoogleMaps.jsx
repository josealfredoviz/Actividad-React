// Hook para manejar estado
import { useState } from "react";

// Componentes de Google Maps para React
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

// Coordenadas del punto de inicio: FIMAZ (más precisas)
const origen = {
  lat: 23.231447239682304,
  lng: -106.4265640681122
};

// Coordenadas del destino: Plazuela Machado
const destino = {
  lat: 23.1986,
  lng: -106.4211,
};

// Estilo del mapa
const containerStyle = {
  width: "100%",
  height: "550px",
  borderRadius: "15px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
};

export default function RutaGoogleMaps() {
  // Estado donde guardamos la ruta
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(false);

  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Función para calcular la ruta
  const calcularRuta = () => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps no está disponible");
      return;
    }

    setLoading(true);
    
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        setLoading(false);
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", status);
        }
      }
    );
  };

  // Mientras carga el mapa
  if (!isLoaded) return <p>Cargando mapa...</p>;

  // Estilos
  const buttonStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: directions ? "#4caf50" : "#3f51b5",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>
        🚗 Ruta de FIMAZ a Plazuela Machado
      </h2>
      
      <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
        Calcula la ruta desde la Facultad de Ingeniería hasta el centro histórico
      </p>

      {/* Contenedor con botón y mapa lado a lado */}
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "20px", 
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        {/* Botón */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center",
          padding: "20px"
        }}>
          <button 
            onClick={calcularRuta} 
            disabled={loading}
            style={{
              ...buttonStyle,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
            onMouseOver={(e) => !loading && (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            {loading ? "⏳ Calculando..." : directions ? "✓ Ruta Calculada" : "🛣️ Calcular Ruta"}
          </button>
          
          {directions && (
            <p style={{ 
              marginTop: "15px", 
              color: "#4caf50", 
              fontWeight: "bold",
              textAlign: "center"
            }}>
              📍 Distancia: {directions.routes[0].legs[0].distance.text}
              <br/>
              ⏱️ Tiempo: {directions.routes[0].legs[0].duration.text}
            </p>
          )}
        </div>

        {/* Mapa */}
        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={origen}
            zoom={13}
          >
            {/* Marcador origen */}
            <Marker position={origen} label="FIMAZ" />

            {/* Marcador destino */}
            <Marker position={destino} label="Machado" />

            {/* Render de la ruta */}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
