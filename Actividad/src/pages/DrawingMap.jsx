import { useState } from "react";
import {
  GoogleMap,
  DrawingManager,
  useJsApiLoader,
} from "@react-google-maps/api";

const libraries = ["drawing"];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

function DrawingMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [overlays, setOverlays] = useState([]);
  const [selectedOverlay, setSelectedOverlay] = useState(null);

  const selectOverlay = (overlay) => {
    if (selectedOverlay && selectedOverlay !== overlay) {
      selectedOverlay.setOptions({ strokeColor: "#2f80ed" });
    }

    overlay.setOptions({ strokeColor: "#ff0000" });
    setSelectedOverlay(overlay);
  };

  const onOverlayComplete = (event) => {
    const overlay = event.overlay;
    overlay.type = event.type;

    overlay.addListener("click", () => selectOverlay(overlay));

    setOverlays((current) => [...current, overlay]);
    selectOverlay(overlay);
  };

  const clearSelected = () => {
    if (!selectedOverlay) return;

    selectedOverlay.setMap(null);
    setOverlays((current) => current.filter((overlay) => overlay !== selectedOverlay));
    setSelectedOverlay(null);
  };

  const clearAll = () => {
    overlays.forEach((overlay) => overlay.setMap(null));
    setOverlays([]);
    setSelectedOverlay(null);
  };

  if (!isLoaded) {
    return <p>Cargando mapa...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dibujar figuras en Google Maps</h2>

      <p>
        Usa las herramientas del mapa para dibujar una línea y un rectángulo.
      </p>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={clearSelected}
          disabled={!selectedOverlay}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: selectedOverlay ? "#d32f2f" : "#ccc",
            color: "white",
            cursor: selectedOverlay ? "pointer" : "not-allowed",
          }}
        >
          Eliminar figura seleccionada
        </button>
        <button
          onClick={clearAll}
          disabled={overlays.length === 0}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: overlays.length ? "#1976d2" : "#ccc",
            color: "white",
            cursor: overlays.length ? "pointer" : "not-allowed",
          }}
        >
          Eliminar todas las figuras
        </button>
        {selectedOverlay && (
          <span style={{ alignSelf: "center", color: "#333" }}>
            Figura seleccionada: {selectedOverlay.type || "Figura"}
          </span>
        )}
      </div>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <DrawingManager
          onOverlayComplete={onOverlayComplete}
          options={{
            drawingControl: true,
            drawingControlOptions: {
              position: window.google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                window.google.maps.drawing.OverlayType.POLYLINE,
                window.google.maps.drawing.OverlayType.RECTANGLE,
              ],
            },
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default DrawingMap;