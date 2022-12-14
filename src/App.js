import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ``}>
      <div className="dark:bg-slate-800 min-h-screen px-10 sm:px-20 md:px-32">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main />
      </div>
    </div>
  );
}

export default App;
