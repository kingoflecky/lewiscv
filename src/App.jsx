import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./components/Header";
import BriefIntro from "./components/BriefIntro";
import MySkills from "./components/MySkills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <HeaderComponent />
      </div>

      <div className="card">
        <BriefIntro />
      </div>

      <div className="card">
        <MySkills />
      </div>
    </>
  );
}

export default App;
