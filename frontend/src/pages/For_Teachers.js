import React from "react";
import "../css/for_teachers.css";
import Back_Button from "../components/Back_Button";
import Practise_Section from "../components/Homes/Practise_Section";
import Result_Section from "../components/Homes/Result_Section";
import image1 from "../images/through.png";
import image2 from "../images/practice.png";
import image3 from "../images/instant.png";
import image4 from "../images/answers.png";
import image5 from "../images/progress.png";
import Test_Booking from "../components/Homes/Test_Booking";

const For_Teachers = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f4eeea", marginTop: "-16px" }}>
        <Back_Button back="Home"/>
      </div>

      <div className="centered-container">
        <h1 className="teacher-title">Put your students forward for</h1>
        <p className="teacher-sub-title">HSK with confidence</p>
        <button className="btn btn-primary tryBtn">Try it out</button>
      </div>

      <Practise_Section
        title="Walk them through"
        paragraph="the features and functions available, either one-to-one or as a whole class. Familiarise them with the description of each level and the format of each test. Preview and review the prescribed vocabulary together."
        image={image1}
      />
      <Result_Section
        title="Assign practice papers"
        paragraph="to your students to complete by a date and time of your choosing.  Use the papers as formal assessments or to get your students used to answering the different types of question in the HSK tests and to completing each section within the prescribed time."
        image={image2}
      />
      <Practise_Section
        title="Get instant results"
        paragraph="with no marking!  See which students have already completed your assignments and which have not.  View the scores your students have achieved in every paper they have completed."
        image={image3}
      />
      <Result_Section
        title="Review their answers"
        paragraph="Drill down into your students' test results class by class, skill by skill, part by part and even question by question. Review the actual answers your students gave so you can identify exactly what each person still needs your help with and give them focussed feedback."
        image={image4}
      />
      <Practise_Section
        title="Track progress"
        paragraph="A complete and detailed history is compiled for each of your students, showing how their results for each skill are changing from one test to the next so that you know when they are ready to take the next real test and can put them forward with confidence."
        image={image5}
      />

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary tryBtn">Try it out</button>
      </div>

      <div className="container-fluid resource">
        <h1 className="resource-title">Get your students to the next level</h1>
        <p className="resource-sub-title">
          Our sister platform has the official HSK and YCT course material and
          all the tools and resources you need to teach and to support each of
          your students on their personal learning journey to their next exam
          goal.
        </p>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary tryBtn">Teaching resources</button>
        </div>
      </div>
      <Test_Booking />
    </>
  );
};

export default For_Teachers;
