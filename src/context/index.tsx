import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

// This also can be written as <AuthProvider children={children} />, because children nodes are actually the children property in their parent node
