import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

if (!navigator.geolocation) {
  alert("Your current browser geolocation settings are disabled");
  throw new Error("Your current browser geolocation settings are disabled");
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
