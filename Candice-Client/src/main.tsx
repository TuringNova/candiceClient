import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";
import RouterProvider from "./router/RouterProvider";
import { Provider } from "react-redux";
import {store} from './store/store';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  </Provider>
  </StrictMode>
);
