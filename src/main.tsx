import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactLenis from "lenis/react";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (x) => {
          return 1 - Math.pow(1 - x, 4);
        },
        wheelMultiplier: 0.4,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>,
);
