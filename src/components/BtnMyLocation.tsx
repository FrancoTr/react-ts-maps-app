import React, { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Mapbox is currently unavailable");
    if (!userLocation) throw new Error("The location could not be established");

    map?.flyTo({ zoom: 14, center: userLocation });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={onClick}
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: "999" }}
    >
      My Location
    </button>
  );
};
