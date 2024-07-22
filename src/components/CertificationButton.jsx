import '../css/certificationButton.css';

const CertificationButton = ({
  certificationName,
  certificateUrl,
  certificateDate,
}) => {
  return (
    <div className="grid-item">
      <h4>{certificationName}</h4>
      <a href={certificateUrl} target="_blank">
        <button id="certificateBtn" type="button">Show Credential 🔗</button>
      </a>
      <p>{certificateDate}</p>
    </div>
  );
};

export default CertificationButton;
