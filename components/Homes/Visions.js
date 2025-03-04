import React from "react";
import "../../css/visions.css"; // Custom styling

import image1 from "../../images/hero_img_1.png"; // Replace with actual images
import image2 from "../../images/hero_img_3.png";

const Visions = () => {
  return (
    <div className="container box_container">
      <div className="row justify-content-between">
        {/* Left Box */}
        <div className="col-md-5 box left">
          <div className="content">
            <img src={image1} alt="Image 1" className="circle-img" />
            <p className="para">
              <strong>HSK</strong> stands for “Hanyu Shuiping Kaoshi,” meaning
              Chinese Level Tests. They are the world’s most popular Chinese
              language proficiency tests. There are 9 levels, from beginner to
              advanced.
            </p>
            <a href="/choose-level" className="more">More &gt;</a>
          </div>
        </div>

        {/* Right Box */}
        <div className="col-md-5 box right">
          <div className="content">
            <img src={image2} alt="Image 2" className="circle-img" />
            <p className="para">
              <strong>YCT</strong> stands for “Youth Chinese Tests.” They are a
              version of the Chinese language proficiency tests adapted for
              younger learners. There are 4 levels, from beginner to
              intermediate.
            </p>
            <a href="/choose-level" className="more">More &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visions;
