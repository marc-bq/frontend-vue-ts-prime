import axios from "axios";
import { useMainStore } from "../store";

const backend_url = import.meta.env.VITE_BACKEND_URL;
const backend_port = import.meta.env.VITE_BACKEND_PORT;
console.log({ backend_url, backend_port });
let url: string = backend_url ? backend_url.toString() : "http://localhost:3000";
if (backend_port) {
  url += ":" + backend_port;
}
console.log("Backend URL: " + url);

//REGULAR HTTP JSON
const http = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const store = useMainStore();
  const token = store.userToken;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

//HTTP FORM DATA
const httpForm = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "multipart/form-data",
  },
});

httpForm.interceptors.request.use((config) => {
  const store = useMainStore();
  const token = store.userToken;

  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === "Network Error") {
      if (error.response.status === 504) {
        throw {
          message: "Something went wrong. Please try again later.",
        };
      } else {
        throw {
          message: "You are not connected to the internet. Verify your connection and then try again.",
        };
      }
    }
    if (error.response) {
      if (error.response.status === 500) {
        throw {
          message: "Something went wrong. Please try again later.",
        };
      }
      if (error.response.status === 401) {
        // logout logic
      }
      if (error.response.status === 403) {
        // redirect user to some home page since that action is not allowed
      }
      throw { ...error.response.data, statusCode: error.response.status };
    }
    throw {
      message: "Something went wrong. Please try again later.",
    };
  }
);

export { http, httpForm };
