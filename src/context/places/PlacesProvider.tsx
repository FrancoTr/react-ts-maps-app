import React from "react";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

const PlacesProvider = () => {
  return <div>PlacesProvider</div>;
};

export default PlacesProvider;
