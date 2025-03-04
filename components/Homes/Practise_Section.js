import React from "react";
import "../../css/practise_section.css";

const Practise_Section = ({ title, paragraph, image }) => {
  return (
    <>
      <section className="more-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={image}
                alt="HSK Preparation"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">{title}</h2>
              <p className="section-text">{paragraph}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practise_Section;
