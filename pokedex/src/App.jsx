import { useState } from "react";
import "./App.css";
import Pokedex from "./component/Pokedex/Pokedex";
import CoustmRoutes from "./component/routes/CoustmRoutes";
import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="outer-pokedex">
      <h1 id="pokedex-heading">
        <Link to={"/"}>Pokedex</Link>
      </h1>
      <CoustmRoutes />
    </div>
  );
}

export default App;
