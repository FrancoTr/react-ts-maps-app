import React from "react";
import { PlacesContext } from "./PlacesContext";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const PlacesProvider = ({ children }) => {
  return (
    <PlacesContext.Provider
      value={{
        isLoading: true,
        userLocation: undefined,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesProvider;
