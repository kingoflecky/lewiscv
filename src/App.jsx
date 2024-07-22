import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header";
import BriefIntro from "./components/BriefIntro";
import MySkills from "./components/MySkills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="card">
        <HeaderComponent />
      </section>

      <section className="card">
        <BriefIntro />
      </section>

      <section className="card">
        <MySkills />
      </section>

      <section className="card">
        <Experience />
      </section>

      <section className="card">
        <Education />
      </section>
      
      <section className="card">
        <Certifications />
      </section>
      
    </>
  );
}

export default App;
