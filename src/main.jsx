import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./Components/Store/store";

import MainApp from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
      <MainApp />
    </Provider>
  </StrictMode>
);
