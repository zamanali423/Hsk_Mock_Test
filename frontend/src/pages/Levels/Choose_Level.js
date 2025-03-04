import React from "react";
import Levels from "../../components/Levels";
import image1 from "../../images/hero_img_1.png";
import image2 from "../../images/hsk_speaking_test.png";
import image3 from "../../images/hero_img_3.png";

const Choose_Level = () => {
  return (
    <>
      <h1 className="level-title">Which level are you working towards?</h1>
      <p className="level-description">
        If you’re not sure, take a{" "}
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <strong>free level test &gt;</strong>
        </a>
      </p>
      <Levels
        image={image1}
        hook="HSK"
        description="stands for “Hanyu Shuiping Kaoshi,” meaning
          Chinese Level Tests."
        sub_para="They are the world’s most popular Chinese language proficiency tests."
        levels={{
          level1: "Level 1",
          level2: "Level 2",
          level3: "Level 3",
          level4: "Level 4",
          level5: "Level 5",
          level6: "Level 6",
          level7: "Level 7-9",
        }}
        bg="white"
        clr="black"
        main_color="#4d8346"
      />
      <Levels
        image={image2}
        hook="HSKK"
        description="Speaking Test assesses the test takers’ oral Chinese abilities. It consists of three levels, including primary, intermediate, and advanced."
        sub_para="The HSK speaking test is conducted in the form of an audio recording."
        levels={{}}
        main_color="#4d8346"
        yct_para="HSK3 candidates must take an HSKK Beginner test; HSK4 candidates an
          Intermediate; and HSK 5 or 6 candidates an Advanced"
      />
      <Levels
        image={image3}
        hook="YCT"
        description=" stands for “Youth Chinese Tests."
        sub_para="They are a version of the Chinese language proficiency tests adapted for younger learners."
        levels={{
          level1: "Level 1",
          level2: "Level 2",
          level3: "Level 3",
          level4: "Level 4",
        }}
        clr="white"
        main_color="#c97025"
      />
      <div style={{marginTop: "25px"}}></div>
    </>
  );
};

export default Choose_Level;
