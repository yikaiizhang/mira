import React from "react";
import { useAuth } from "../../context/auth-context";

export default function LoginPage() {
  const { login, user } = useAuth();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? `User Name is ${user?.name}` : null}
      <div>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
