import React, { useState, useContext } from "react";
import UserContext from "../context/usercontext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={Username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
        name=""
        id=""
      />{" "}
      <input
        type="text"
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
        name=""
        id=""
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
