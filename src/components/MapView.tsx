import React, { useContext } from "react";
import { PlacesContext } from "../context";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);

  return <div>{userLocation?.join(",")}</div>;
};
