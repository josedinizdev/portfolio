"use client";

import axios from "axios";
import { toast } from "react-hot-toast/headless";

const api = axios.create({
  baseURL: "/api"
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.authorization = token;
    }
  }

  return config;
});

export function threat(err: any) {
  if (err instanceof Error)
    toast.error(err.message);
  //localStorage.removeItem("token");
}

export default api;