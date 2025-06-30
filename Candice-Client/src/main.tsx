import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";
import RouterProvider from "./router/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </StrictMode>
);
