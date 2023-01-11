import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response.status === 401) {
      return Promise.reject({ message: "Notauthorize" });
    }
  }
);

/**
 * Api class
 */

export default class ApiClass {
  get(url: any) {
    return axiosInstance.get(url);
  }

  post(url: string, payload: any) {
    return axiosInstance.post(url, payload);
  }
}
