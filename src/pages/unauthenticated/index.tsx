import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function UnauthenticatedPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button
        onClick={() => {
          setIsRegister(!isRegister);
        }}
      >
        Switch to {isRegister ? "Login" : "Register"}
      </button>
    </div>
  );
}
