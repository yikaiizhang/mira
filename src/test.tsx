import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const postOptions = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Yikai", age: 23 }),
};

const getOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const patchOptions = {
  method: "PATCH",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Glen" }),
};

const deleteOptions = {
  method: "DELETE",
};

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/users/1", deleteOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
