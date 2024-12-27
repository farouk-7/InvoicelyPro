import axios from "axios";
import { APP_CONSTANTS } from "../constants/app";

export * from "./routes.constants";

export const baseURL =
  // "https://72c8-102-216-181-0.ngrok-free.app/api"
  "https://6a34-197-210-29-56.ngrok-free.app/api"

const axiosInstance = axios.create({
  baseURL,
  // mode: 'no-cors',
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Headers": "Content-Type",
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  },
});

export const axiosInstanceMultipart = axios.create({
  baseURL,
  // mode: 'no-cors',
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  },
});

const addTokenToRequest = async (req) => {
  const token = sessionStorage.getItem(APP_CONSTANTS.token);
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);
axiosInstanceMultipart.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
