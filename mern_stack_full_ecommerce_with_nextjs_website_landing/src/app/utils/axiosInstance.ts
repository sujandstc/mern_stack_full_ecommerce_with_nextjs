"use client";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  //   timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});

export default axiosInstance;
