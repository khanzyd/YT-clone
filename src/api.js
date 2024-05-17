import axios from "axios";

let request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_GOOGLEAPI_YT_APIKEY,
  },
});

export default request;