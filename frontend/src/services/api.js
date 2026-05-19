import axios from "axios";

const API = axios.create({
  baseURL: "https://aifsd-backend-qpkf.onrender.com/api",
});

export default API;