import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // this is work like buch of packges going to render of that
  };

  const RemoveValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
