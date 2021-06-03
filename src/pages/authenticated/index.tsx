import React from "react";
import ProjectListPage from "../project-list";
import { useAuth } from "../../hooks";

export default function AuthenticatedPage() {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectListPage />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
