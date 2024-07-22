import CertificationButton from "./CertificationButton";

const Certifications = () => {
  return (
    <>
      <h3>My Certifications</h3>

      <div className="grid-container">
        <CertificationButton
          certificationName={"Learn JavaScript Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
          }
          certificateDate={"Jan 2023"}
        />

        <CertificationButton
          certificationName={"Learn React Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/af00e5032d0a68cc84879983f5d8333b"
          }
          certificateDate={"Apr 2023"}
        />

        <CertificationButton
          certificationName={"Learn React Testing Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/1790781f3857d258b06a24f3c53424cd"
          }
          certificateDate={"May 2023"}
        />

        <CertificationButton
          certificationName={"Learn Build Tools Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/abe75630eb1ba0fda976c5d1053ecd29"
          }
          certificateDate={"Jan 2024"}
        />

        <CertificationButton
          certificationName={"Learn CSS Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/9a5bb1fc45b4281af1fffec93b0aaf05"
          }
          certificateDate={"Mar 2023"}
        />

        <CertificationButton
          certificationName={"Learn HTML Course"}
          certificateUrl={
            "https://www.codecademy.com/profiles/lewisquinn/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7"
          }
          certificateDate={"Jan 2023"}
        />
      </div>
    </>
  );
};

export default Certifications;
