import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import MaterialUIProvider from "./frameworks/providers/materialUIProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/frameworks/components/theme";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MaterialUIProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MaterialUIProvider>
    </React.StrictMode>
  );
} else {
  console.error("El elemento con ID 'root' no se encontró.");
}
