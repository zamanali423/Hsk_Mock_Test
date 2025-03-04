import React from "react";
import "../css/choose_level.css";
import arrow from "../images/arrow.png";

const Levels = ({
  image,
  hook,
  description,
  sub_para,
  levels,
  bg,
  clr,
  main_color,
  yct_para,
}) => {
  const chooseLevel = (hook, level) => {
    if (hook === "HSK") {
      window.location.href = `/tests/level/hsk${level}`;
    } else if (hook === "YCT") {
      window.location.href = `/tests/level/yct${level}`;
    } else if (hook === "HSKK") {
      window.location.href = `/tests/level/hskk${level}`;
    }
  };
  return (
    <>
      {/* levels section */}
      <div className="container text-center mt-5 hsk-container">
        {/* Circle Image */}
        <div className="profile-image">
          <img src={image} alt="User" className="img-fluid" />
        </div>

        {/* Description */}
        <p className="sub-description mt-4">
          <strong>{hook}</strong> {description}
        </p>
        <p className="sub-description">{sub_para}</p>

        {/* Levels Section */}
        <div
          className="levels-container"
          style={{ backgroundColor: main_color }}
        >
          <div className={hook === "HSKK" ? "level hskk-level" : "level"}>
            <h4
              onClick={() => {
                if (hook === "HSKK") {
                  chooseLevel(hook, 1);
                }
              }}
            >
              Beginner
            </h4>

            <div className="levels">
              {levels?.level1 && (
                <p
                  style={{ backgroundColor: bg, color: clr }}
                  onClick={() => chooseLevel(hook, 1)}
                >
                  {levels.level1}
                </p>
              )}
              {levels?.level2 && (
                <p onClick={() => chooseLevel(hook, 2)}>{levels.level2}</p>
              )}
            </div>
          </div>
          <div className={hook === "HSKK" ? "level hskk-level" : "level"}>
            <h4
              onClick={() => {
                if (hook === "HSKK") {
                  chooseLevel(hook, 2);
                }
              }}
            >
              Intermediate
            </h4>
            <div className="levels">
              {levels?.level3 && (
                <p onClick={() => chooseLevel(hook, 3)}>{levels.level3}</p>
              )}
              {levels?.level4 && (
                <p onClick={() => chooseLevel(hook, 4)}>{levels.level4}</p>
              )}
            </div>
          </div>
          <div className={hook === "HSKK" ? "level hskk-level" : "level"}>
            <h4
              onClick={() => {
                if (hook === "HSKK") {
                  chooseLevel(hook, 3);
                }
              }}
            >
              Advanced
            </h4>
            <div className="levels">
              {levels?.level5 && (
                <p onClick={() => chooseLevel(hook, 5)}>{levels.level5}</p>
              )}
              {levels?.level6 && (
                <p onClick={() => chooseLevel(hook, 6)}>{levels.level6}</p>
              )}
              {levels?.level7 && (
                <p onClick={() => chooseLevel(hook, "7-9")}>{levels.level7}</p>
              )}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: main_color, paddingBottom: "10px" }}>
          <img src={arrow} alt="arrow image" />
        </div>
        <p
          style={{
            backgroundColor: main_color,
            color: "white",
            fontSize: "15px",
            paddingBottom: "10px",
          }}
        >
          {yct_para}
        </p>
      </div>
    </>
  );
};

export default Levels;
