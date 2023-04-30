import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
