import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Them";
import ThemeBtn from "./components/ThemBtn";
import Card from "./components/Card";

function App() {
  const [themMode, setThemMode] = useState("light");

  const lightThem = () => {
    setThemMode("light");
  };

  const darkThem = () => {
    setThemMode("dark");
  };

  // actual change in them

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themMode);
  }, [themMode]);

  return (
    <ThemeProvider value={(themMode, lightThem, darkThem)}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
