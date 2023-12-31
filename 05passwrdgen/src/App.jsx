import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllwed, setNumberAllowed] = useState(false);
  const [CharAllwed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // userefHook

  const passwordRef = useRef(null);

  const paswordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz";
    if (numberAllwed) str += "0123456789";
    if (CharAllwed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllwed, CharAllwed, setpassword]);

  const copyPasswordToCLipbord = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    paswordGenrator();
  }, [length, numberAllwed, CharAllwed, paswordGenrator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white my-3">Password Genrator</h1>
      </div>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToCLipbord}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="text-white">Length : {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllwed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="text-white">
            Numbers
          </label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={CharAllwed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
        </div>
        <label htmlFor="characterInput" className="text-white">
          characters
        </label>
      </div>
    </>
  );
}

export default App;
