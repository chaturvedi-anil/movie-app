import axios from "axios";
import { loadToken } from "../utils/storage";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((cfg) => {
  const token = loadToken();
  if (token) {
    cfg.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return cfg;
});

export default axiosInstance;
