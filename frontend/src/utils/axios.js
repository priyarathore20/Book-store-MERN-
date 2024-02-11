import axios from "axios";

// Define base URL for development and production environments
const baseURL = import.meta.env.VITE_BASE_URL;

// Create Axios instance
const instance = axios.create({
  baseURL,
  timeout: 10000, // Adjust timeout as needed
  // Add other configurations like headers, interceptors, etc.
});

export default instance;
