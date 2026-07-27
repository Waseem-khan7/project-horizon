import axios from "axios";

const api = axios.create({
  baseURL: "https://api.project-horizon.dev",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 401:
        console.warn("Session expired. Please log in again.");
        localStorage.removeItem("accessToken");
        break;

      case 403:
        console.warn("Access denied.");
        break;

      case 404:
        console.warn("Requested resource was not found.");
        break;

      case 500:
        console.error("Internal server error.");
        break;

      default:
        console.error("Unexpected API error.");
    }

    return Promise.reject(error);
  },
);

export default api;
