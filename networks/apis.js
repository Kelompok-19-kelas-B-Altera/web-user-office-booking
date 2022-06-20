import axios from "axios";

const isDev = process.env.NODE_ENV === "development"

const axiosInstance = axios.create({
  baseURL: isDev && process.env.NEXT_PUBLIC_BASE_URL,
});

export default axiosInstance