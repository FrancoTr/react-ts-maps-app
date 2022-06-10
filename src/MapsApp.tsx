import React from "react";
import { HomeScreen } from "./screens";
import { PlacesProvider } from "./context";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Maps App</h1>
      <HomeScreen />
    </PlacesProvider>
  );
};
