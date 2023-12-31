import { useState } from "react";
import "./App.css";
import UsercontextProvider from "./context/UsercontextProvide";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UsercontextProvider>
      <h1 className="text-black bg-lime-600 text-center p-4">Hello World!</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  );
}

export default App;
