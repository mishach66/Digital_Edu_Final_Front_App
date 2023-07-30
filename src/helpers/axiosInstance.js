import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error?.response?.data?.message === "token not valid"
    ) {
      const refreshToken = localStorage.getItem("refreshToken");

      axios
        .post("http://localhost:3001/users/refresh", {
          refresh_token: refreshToken,
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          return axiosInstance(originalRequest);
        });
    }
    return Promise.reject(error);
  }
);
