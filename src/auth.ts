import { IUser } from "./pages/project-list/ProjectFilter";

const apiURL = process.env.REACT_APP_API_URL;
const localStorageKey = "__auth_provider_token__";

export const getToken = window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: IUser }) => {
  window.localStorage.setItem(localStorageKey, user.token);
  return user;
};

export const login = (data: { username: string; password: string }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${apiURL}/login`, options)
    .then((response) => response.json())
    .then((data) => {
      return handleUserResponse(data);
    });
};

export const register = (data: { username: string; password: string }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${apiURL}/register`, options)
    .then((response) => response.json())
    .then((data) => {
      return handleUserResponse(data);
    });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
