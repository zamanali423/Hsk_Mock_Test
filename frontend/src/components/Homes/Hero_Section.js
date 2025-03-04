import React from "react";
import "../../css/hero_section.css";
import hero_img_1 from "../../images/hero_img_1.png";
import hero_img_2 from "../../images/hero_img_2.png";
import hero_img_3 from "../../images/hero_img_3.png";

const Hero_Section = () => {
  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">The only official HSK platform</h1>
          <p className="hero-subtitle">
            For practicing the world’s most popular Chinese language proficiency
            tests
          </p>
          <div className="d-flex justify-content-center mt-4">
            <div className="circle-img mx-3">
              <img src={hero_img_1} alt="Feature 1" />
            </div>
            <div className="circle-img mx-3">
              <img src={hero_img_2} alt="Feature 2" />
            </div>
            <div className="circle-img mx-3">
              <img src={hero_img_3} alt="Feature 3" />
            </div>
          </div>
          <a href="/choose-level" className="btn btn-primary btn-lg mt-4">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero_Section;
