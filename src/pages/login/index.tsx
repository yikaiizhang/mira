import React from "react";

const apiURL = process.env.REACT_APP_API_URL;

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ userName, password });
  };

  const login = (params: { userName: string; password: string }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    fetch(`${apiURL}/login`, options)
      .then((response) => response.json())
      .then((data) => {
        return;
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
