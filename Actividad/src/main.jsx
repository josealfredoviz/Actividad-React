import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AlumnoProvider } from "./context/AlumnoContext";

function Root() {
  return (
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <Root />
);

