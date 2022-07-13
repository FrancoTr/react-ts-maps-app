import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
    access_token:
      "pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg",
  },
});

export default directionsApi;
