import React from "react";
import "../../css/result_section.css";

const Result_Section = ({ title, paragraph, image }) => {
  return (
    <>
      <section className="more-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h2 className="section-title">{title}</h2>
              <p className="section-text">{paragraph}</p>
            </div>
            <div className="col-md-6 text-end">
              <img
                src={image}
                alt="HSK Preparation"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Result_Section;
