import React, { useState, useContext, ReactNode } from "react";
import { IUser } from "../pages/project-list/ProjectFilter";
import * as auth from "../auth-provider";

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

const AuthContext =
  React.createContext<IAuthContextValue | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = (form: IForm) => auth.login(form).then((user) => setUser(user));
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UseAuth must be used inside AuthProvider");
  }
  return context;
};
