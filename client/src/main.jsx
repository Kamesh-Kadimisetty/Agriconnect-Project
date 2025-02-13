import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth.jsx";
import global_english from "./translations/english/global.json";
import global_hindi from "./translations/hindi/global.json";
import global_telugu from "./translations/telugu/global.json";
import i18next, { reloadResources } from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "english",
  resources: {
    english: {
      global: global_english,
    },
    hindi: {
      global: global_hindi,
    },
    telugu: {
      global: global_telugu,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </AuthProvider>
);
