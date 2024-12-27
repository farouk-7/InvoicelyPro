import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider.jsx";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
