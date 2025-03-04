import React from "react";
import Back_Button from "../components/Back_Button";
import image1 from "../images/hero_img_2.png";
import image2 from "../images/about.png";
import "../css/about_us.css";

const About_us = () => {
  return (
    <>
      <Back_Button back="Back"/>
      <div className="container text-center container-wrapper">
        <h2 className="main-title">About us</h2>
        <p className="main-description">
          <strong>HSK Mock</strong> is the only official platform for practice
          tests for HSK and YCT, the world’s most popular Chinese language
          proficiency tests. The platform is the product of a collaboration
          between <strong>Chinese Testing International</strong> and{" "}
          <strong>Wo Hui Mandarin</strong>.
        </p>

        <div className="row justify-content-center">
          {/* Left Box */}
          <div className="col-md-5 feature-box">
            <img src={image1} alt="Feature 1" className="feature-image" />
            <p className="feature-description">
              <strong>Chinese Testing International</strong> (CTI) is the
              examination board for HSK and YCT. They are a limited company
              headquartered in Beijing which promotes and supports the learning,
              teaching and testing of Chinese as a foreign language around the
              world by providing a range of services to both individuals and
              institutions.
            </p>
            <p className="feature-description">
              Discover more at:{" "}
              <a
                href="#"
                style={{
                  color: "#fabc81",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                www.chinesetest.cn &gt;
              </a>
            </p>
          </div>

          {/* Right Box */}
          <div className="col-md-5 feature-box">
            <img src={image2} alt="Feature 2" className="feature-image" />
            <p className="feature-description">
              <strong>Wo Hui Mandarin</strong> (Wo Hui) provides the official
              online platforms for HSK and YCT courses and practice tests. They
              are a limited company headquartered in Singapore which leverages
              technology to put learning in the hands of the student and empower
              their teachers to support them on their personal learning journey.
            </p>
            <p className="feature-description">
              Do get it touch if you’d like to explore more:
              <a
                href="#"
                style={{
                  color: "#fabc81",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                hello@wohuimandarin.com &gt;
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_us;
