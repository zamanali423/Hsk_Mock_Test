import React from "react";
import image1 from "../../images/hero_img_1.png";
import image2 from "../../images/hero_img_3.png";
import { useParams } from "react-router";

const Test_Header = () => {
  const param = useParams();
  return (
    <>
      <div className="container main-test-box">
        <div className="test-container">
          {/* Circle Images with Connection */}
          <div className="circle-container">
            <img
              src={param.level_no.startsWith("yct") ? image2 : image1}
              alt="Circle 1"
              className="circle image-circle"
            />
            <div className="circle text-circle">
              <h5>Level</h5>
              <p>
                {param.level_no === "hskk1"
                  ? "B"
                  : param.level_no === "hskk2"
                  ? "I"
                  : param.level_no === "hskk3"
                  ? "A"
                  : param.level_no.slice(3)}
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="test-action-btn">About this level</button>

          {/* Paragraph */}
          <p className="test-description">
            <strong>¥30</strong> Chinese Yuan/ test session{" "}
            <a href="#" style={{ textDecoration: "none", color: "#faae5d" }}>
              Get a discount
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Test_Header;
