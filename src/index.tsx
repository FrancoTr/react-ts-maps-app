import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2w0YWdzcGZ3MG82YjNwc2V0dmJueWFuYiJ9.o9VxhFgqcUiTNaLGaHBi0Q";

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
