import React, { useReducer, useContext } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { mapReducer } from "./mapReducer";
import { PlacesContext } from "../";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
};
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  const setMap = (map: Map) => {
    const myLocationPopUp = new Popup().setHTML(`<h4>You're Here</h4>`);
    new Marker({ color: "#61DAFB" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopUp)
      .addTo(map);
    dispatch({ type: "setMap", payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
