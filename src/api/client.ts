import axios from "axios";
import { getStore } from "../store/storeProvider";
import {
  setAccessDenied,
  setAuthExpired,
  showNotification,
} from "../store/slices/uiSlice";

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
    const store = getStore();

    // Network Error (No Internet / Server Unreachable)
    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        store?.dispatch(
          showNotification({
            message: "Request timed out. Please try again.",
            type: "warning",
          }),
        );
      } else {
        store?.dispatch(
          showNotification({
            message:
              "Network connection lost. Please check your internet connection.",
            type: "error",
          }),
        );
      }

      return Promise.reject(error);
    }

    switch (status) {
      case 401:
        localStorage.removeItem("accessToken");

        store?.dispatch(setAuthExpired());

        store?.dispatch(
          showNotification({
            message: "Your session has expired. Please sign in again.",
            type: "warning",
          }),
        );
        break;

      case 403:
        store?.dispatch(setAccessDenied());

        store?.dispatch(
          showNotification({
            message: "You do not have permission to access this resource.",
            type: "error",
          }),
        );
        break;

      case 404:
        store?.dispatch(
          showNotification({
            message: "Requested resource was not found.",
            type: "error",
          }),
        );
        break;

      case 500:
        store?.dispatch(
          showNotification({
            message: "Something went wrong on the server.",
            type: "error",
          }),
        );
        break;

      default:
        store?.dispatch(
          showNotification({
            message: "An unexpected error occurred.",
            type: "error",
          }),
        );
    }

    return Promise.reject(error);
  },
);

export default api;
