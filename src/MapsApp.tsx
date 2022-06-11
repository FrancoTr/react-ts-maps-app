import React from "react";
import { HomeScreen } from "./screens";
import { PlacesProvider } from "./context";

import "./globalStyles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Maps App</h1>
      <HomeScreen />
    </PlacesProvider>
  );
};
