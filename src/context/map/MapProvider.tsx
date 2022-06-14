import React, { useReducer } from "react";
import { Map } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = () => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  return (
    <MapContext.Provider
      value={{
        ...state,
      }}
    ></MapContext.Provider>
  );
};
