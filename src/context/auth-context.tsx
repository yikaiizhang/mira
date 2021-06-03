import React, { useState, useEffect, ReactNode } from "react";
import { IUser } from "../pages/project-list/ProjectFilter";
import * as auth from "../auth";
import { makeRequest } from "../utils/api";

interface IForm {
  username: string;
  password: string;
}

interface IAuthContextValue {
  user: IUser | null;
  login: (form: IForm) => Promise<void>;
  register: (form: IForm) => Promise<void>;
  logout: () => Promise<void>;
}

// const initUser = () => {
//   const token = auth.getToken();
//   let user = null;
//   if (token) {
//     makeRequest("/me", { token }).then((data) => {
//       user = data.user;
//       console.log("inside then", user);
//     });
//   }
//   console.log("outside block", user);
//   console.log("I'm executed!!");
//   return user;
// };

// order is 40: outsideblock, null -> 41:I'm executed! -> return user as null -> 37: inside then, null

const initUser = async () => {
  const token = auth.getToken();
  let user = null;
  if (token) {
    const data = await makeRequest("/me", { token });
    console.log("after await");
    user = data.user;
  }
  console.log("outside block");
  console.log(user);

  return user;
};
// order is after await -> outside block -> user

export const AuthContext =
  React.createContext<IAuthContextValue | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    initUser().then((user) => {
      setUser(user);
    });
  }, []);

  const login = (form: IForm) =>
    auth.login(form).then((data) => {
      if (data instanceof Error) {
        console.log(data);
      } else {
        setUser(data);
      }
    });
  // this can be written as auth.login(form).then(setUser) -> this is called: point free

  const register = (form: IForm) =>
    auth.register(form).then((user) => setUser(user));

  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
