import axios from "axios";

const api = axios.create({
  baseURL: "https://leaddistributionbackend.onrender.com/SmartLead",
  withCredentials: true,
});

export default api;