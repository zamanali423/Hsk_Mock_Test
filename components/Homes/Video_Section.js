import React from "react";
import "../../css/video_section.css";
import promo from "../../videos/promo.mp4";

const Video_Section = () => {
  return (
    <>
      <section class="video-section text-center">
        <div class="container">
          <h2 class="video-title">Take your HSK with confidence</h2>
          <div class="video-container mt-4">
            <video controls>
              <source src={promo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video_Section;
