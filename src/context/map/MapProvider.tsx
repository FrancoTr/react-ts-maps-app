import React, { useReducer, useContext, useEffect } from "react";
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

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove());
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`<h6>${place.text_es}</h6><p>${place.place_name}</p>`);
      const newMarker = new Marker().setPopup(popup).setLngLat([lng, lat]).addTo(state.map!);

      newMarkers.push(newMarker);
    }
  }, [places]);

  const setMap = (map: Map) => {
    const myLocationPopUp = new Popup().setHTML(`<h4>You're Here</h4>`);
    new Marker({ color: "#61DAFB" })
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopUp)
      .addTo(map);
    dispatch({ type: "setMap", payload: map });
  };

  const getRouteBetweenPoints = async (start: [number, number], end: [number, number]) => {};

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
        getRouteBetweenPoints,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
