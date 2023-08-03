import axios from "axios";
import { checkTokenValidity } from "./utils";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("token");
  const refresh_token = localStorage.getItem("refreshToken");
  if (!token || !refresh_token) return req;
  // davsetot Authorization .headeri
  req.headers.Authorization = `Bearer ${token}`;
  // shevamowmot vada aqvs gasuli tu ara
  const isExpired = checkTokenValidity(token);
  // vada ar gasavlia
  if (!isExpired) return req;
  // vada gauvida
  const { data } = await axios.post("http://localhost:3001/users/refresh", {
    refresh_token,
  });
  const { token: newAccessToken } = data;
  localStorage.setItem("token", newAccessToken);
  req.headers.Authorization = `Bearer ${newAccessToken}`;
  return req;
});

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       error?.response?.data?.message === "token not valid"
//     ) {
//       const refreshToken = localStorage.getItem("refreshToken");

//       axios
//         .post("http://localhost:3001/users/refresh", {
//           refresh_token: refreshToken,
//         })
//         .then(({ data }) => {
//           localStorage.setItem("token", data.token);
//           return axiosInstance(originalRequest);
//         });
//     }
//     return Promise.reject(error);
//   }
// );
