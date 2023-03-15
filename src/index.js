import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { createStore } from "redux";
import RootReducer from "../src/redux/index";
import { Provider } from "react-redux";
const store = createStore(RootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </Provider>
);
