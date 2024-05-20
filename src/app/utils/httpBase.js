import axios from "axios";

export const adminHttpBase = () => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    headers: headers,
    responseType: "json",
  });
  return api;
};

export const userHttpBase = () => {
  const userApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    responseType: "json",
  });
  return userApi;
};
