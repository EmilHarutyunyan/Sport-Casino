import axios from "axios";
import { API_ENDPOINT } from "../config/config";
import TokenService from "./token.service";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let authTokens = TokenService.getUser() || "";
    if (authTokens) {
      config.headers["token"] = `${authTokens.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== `${API_ENDPOINT}/auth/login` && err.response) {
      // Access Token was expired
      if (err.response.status === 500 && !originalConfig._retry) {
        originalConfig._retry = true;
        let authTokens = TokenService.getUser() || "";
      
        try {
          let config = {
            method: "post",
            url: `${API_ENDPOINT}user/refresh-token`,
            headers: {
              Accept: "application/json",
              token: `${authTokens.token}`,
            },
          };

         const response = await axios.request(config)
            

          const newToken = response.data.item;
          TokenService.setUser({
            ...authTokens,
            JwtToken: newToken.jwtToken,
            JwtTokenExpiresUtc: newToken.jwtTokenExpiresUtc,
            RefreshToken: newToken.refreshToken,
            RefreshTokenExpiresUtc: newToken.refreshTokenExpiresUtc,
          });

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInstance;
