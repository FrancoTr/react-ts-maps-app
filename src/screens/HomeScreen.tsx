import React from "react";
import { MapView, BtnMyLocation, ReactLogo } from "../components";

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  );
};
