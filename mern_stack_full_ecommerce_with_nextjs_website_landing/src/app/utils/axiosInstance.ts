"use client";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.frexxa.com/api/v1",
  //   timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + "",
  },
});

export default axiosInstance;
