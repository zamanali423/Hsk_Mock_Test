import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/testimonial.css"; // Custom styling

import image1 from "../../images/feedback-photo-1.png";
import image2 from "../../images/feedback-photo-2.png";
import image3 from "../../images/feedback-photo-3.png";
import image4 from "../../images/feedback-photo-4.png";
import image5 from "../../images/feedback-photo-5.png";
import image6 from "../../images/feedback-photo-6.png";
import image7 from "../../images/feedback-photo-7.png";
import image8 from "../../images/feedback-photo-8.png";
import image9 from "../../images/feedback-photo-9.png";
import Shape_Divider from "../Homes/Shape_Divider";

const Testimonial = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    dots: false,
  };

  const data = [
    {
      id: 1,
      image: image1, // ✅ Corrected Syntax
      title: "Mandarin Excellence Programme Director, United Kingdom",
      description:
        "Life-changing for my students ... Very excited to be working with Wo Hui Mandarin on this ... Will really help the teachers.",
    },
    {
      id: 2,
      image: image2,
      title: "YCT 1 Teacher, Spain",
      description:
        "All the first-time test-takers in our school passed, most got more than 85% and two got full marks.",
    },
    {
      id: 3,
      image: image3,
      title: "HSK 3 Learner, China",
      description:
        "This really helped me to pass HSK 3. I have also recommended it to my friend who is studying for HSK 4.",
    },
    {
      id: 4,
      image: image4,
      title: "Head of Mandarin, United Kingdom",
      description:
        "The HSK mock platform is excellent. My students really enjoyed using it ... HSK mock will certainly form part of our budget.",
    },
    {
      id: 5,
      image: image5,
      title: "HSK 4 Learner, Malaysia",
      description:
        "Because of your support, I am so glad to share that I scored 211 in HSK 4. I am so happy! Now I am planning to pass my HSK 5. I am very thankful to you.",
    },
    {
      id: 6,
      image: image6,
      title: "HSK 5 Candidate, Malaysia",
      description:
        "I think the most difficult part is the third part of the writing section. Using the mock exam platform, I have a better grasp and more confidence in the difficult parts of the exam.",
    },
    {
      id: 7,
      image: image7,
      title: "HSK 6 Candidate, Malaysia",
      description:
        "After doing the mock exams, I am very confident in facing the exam!",
    },
    {
      id: 8,
      image: image8,
      title: "HSK 6 Candidate, Malaysia",
      description:
        "Through the mock exams, I got more practice on the parts I was unsure about—finding errors in my sentences. I believe I can now achieve great results in the official exam!",
    },
    {
      id: 9,
      image: image9,
      title: "HSK 6 Candidate, Malaysia",
      description:
        "Doing the mock exams made me realize that I need to improve on the reading section. Doing several more sets of mock exams will make me more confident in the exam!",
    },
  ];

  return (
    <>
      <div className="carousel-wrapper">
        {/* Shape Divider */}
        <Shape_Divider />

        {/* Content Section */}
        <div className="carousel-container">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="carousel-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                />
                <h3 className="carousel-title">{item.title}</h3>
                <p className="carousel-description">{item.description}</p>
              </div>
            ))}
          </Slider>
          <div className="crousel_btn">
            <a href="/choose-level" className="btn btn-primary btn-lg mt-4">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
