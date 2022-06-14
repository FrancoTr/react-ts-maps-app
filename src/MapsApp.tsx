import React from "react";
import { HomeScreen } from "./screens";
import { PlacesProvider, MapProvider } from "./context";

import "./globalStyles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
