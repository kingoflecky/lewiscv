import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import BriefIntro from "./components/BriefIntro";
import MySkills from "./components/MySkills";
import Experience from "./components/Experience";

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

      <div className="card">
        <Experience />
      </div>
      
    </>
  );
}

export default App;
