import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: "en",
    access_token:
      "pk.eyJ1IjoiZnJhbmNvdHIiLCJhIjoiY2trc3VxNzluMW9sNDJvbnZtenFwbDA1NSJ9.HSp8UxneFQJmH5SUZ6VYZg",
  },
});

export default searchApi;
