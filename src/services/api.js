import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: process.env.REACT_APP_OMDB_API_KEY,
  },
});

export default api;