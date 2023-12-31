import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Vipul",
    age: 23,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="Chai Aur Code" />
      <Card username="Vipul" btnText="Visit Me!" />
    </>
  );
}

export default App;
