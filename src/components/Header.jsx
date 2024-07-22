import DownloadPDFButton from "./DownloadPDFButton";
import '../css/Header.css'

const HeaderComponent = () => {
  return (
    <div className="header-section">
      <div className="titles">
        <h1>Lewis Quinn</h1>
        <h3>Software Engineer and Creative Director</h3>
      </div>

      <div id="downloadBtn">
        <DownloadPDFButton />
      </div>
    </div>
  );
};

export default HeaderComponent;
