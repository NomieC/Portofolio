import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import Background from "./Section/Background.jsx";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Background />
    <App />
  </StrictMode>,
);

