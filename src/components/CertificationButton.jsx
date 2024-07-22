const CertificationButton = (
  {certificationName, 
  certificateUrl, 
  certificateDate}
) => {

  return (
    <div className="grid-item">
      <h4>{certificationName}</h4>
      <a id="certificateBtn" href={certificateUrl} target="_blank">Show Credential 🔗</a>
      <p>{certificateDate}</p>
    </div>
  );
};

export default CertificationButton;