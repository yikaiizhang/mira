import qs from "qs";
import * as auth from "../auth";
import { useAuth } from "../hooks";

const apiURL = process.env.REACT_APP_API_URL;

interface IRequestConfig extends RequestInit {
  token?: string;
  data?: object;
}
export const makeRequest = (
  path: string,
  { token, data = {}, headers, ...restConfig }: IRequestConfig = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...restConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    path += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return fetch(`${apiURL}${path}`, config).then((response) => {
    if (response.status === 401) {
      auth.logout();
      window.location.reload();
      return Promise.reject({ message: "Please re-login." });
    } else {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(data);
      }
    }
  });
};

export const useRequest = () => {
  const { user } = useAuth();
  return (path: string, config: IRequestConfig = {}) =>
    makeRequest(path, { ...config, token: user?.token || "" });
};
