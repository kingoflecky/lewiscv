import "../css/MySkills.css";

const MySkills = () => {
  return (
    <>
      <h3>My Skills</h3>

      <div className="skillsTable">
        <div className="skillsItem">
          <p>Front-End</p>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS/SASS</li>
            <li>HTML5</li>
          </ul>
        </div>

        <div className="skillsItem">
          <p>Back-End/Cloud Computing</p>
          <ul>
            <li>AWS - studying for Certified Developer DVA-C02</li>
            <li>Express JS</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skillsItem">
          <p>Other/Non-technical</p>
          <ul>
            <li>Accessibility & WCAG</li>
            <li>Agile & Scrum</li>
            <li>CI/CD Configuration & Pipelines</li>
            <li>Git & GitHub/BitBucket</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MySkills;
