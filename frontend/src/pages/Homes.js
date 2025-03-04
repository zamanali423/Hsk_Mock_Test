import React from "react";
import Hero_Section from "../components/Homes/Hero_Section";
import Video_Section from "../components/Homes/Video_Section";
import Practise_Section from "../components/Homes/Practise_Section";
import Result_Section from "../components/Homes/Result_Section";
import image_1 from "../images/tests.png";
import image_2 from "../images/results.png";
import image_3 from "../images/step-by-step.png";
import image_4 from "../images/certificates.png";
import image_5 from "../images/next-level.png";
import Testimonial from "../components/Homes/Testimonial";
import Visions from "../components/Homes/Visions";
import Preparing_Test from "../components/Homes/Preparing_Test";
import Test_Booking from "../components/Homes/Test_Booking";

const Homes = () => {
  return (
    <>
      <Hero_Section />
      <Video_Section />
      <Practise_Section
        title="Practice HSK and YCT tests"
        paragraph="using actual recent past HSK papers from the HSK examination board, so that you are used to the format of the HSK test, to answering the different types of HSK question, and to completing each section within the prescribed time."
        image={image_1}
      />
      <Result_Section
        title="Get instant results"
        paragraph="and review each test question by question.  Your tests are not only graded for you, but you can see exactly which questions you got right.  For those you got wrong, you can also see the correct answer so that you know what specifically you still need to work on."
        image={image_2}
      />
      <Practise_Section
        title="Track your progress step-by-step"
        paragraph="so that you know exactly when you are ready to take the next real HSK test and can go in to it assured of getting the best possible result. Your history shows you the date and time that you took each HSK practice test and how your results for each skill have changed from one HSK test to the next."
        image={image_3}
      />
      <Result_Section
        title="Receive official HSK Mock certificates"
        paragraph="for every practice HSK test you pass. These certificates provide evidence that you have achieved a certain HSK level of Chinese language proficiency."
        image={image_4}
      />
      <Practise_Section
        title="Be ready for the next HSK level"
        paragraph="Check out the description of your next HSK level so you know what you are aiming for. Familiarise yourself with the format of the HSK test so you know what to expect. Preview and review the prescribed HSK vocabulary so you know you’ve covered everything you might be tested on."
        image={image_5}
      />

      <Testimonial />
      <Visions />
      <Preparing_Test
        title="Helping students to prepare for their HSK tests?"
        paragraph="Teachers have a vital role to play in helping learners reach their next HSK exam goal."
        subpara="We liberate and empower teachers to support each of their students on their personal HSK learning journey."
        link="For Teachers"
        link_word="/for-teachers"
      />
      <Preparing_Test
        title="Become our local partner"
        paragraph="There is nothing like a local point of contact for candidates where they can talk to someone about tests in their own language and make"
        subpara="payments via their preferred local payment methods."
        link="Explore partnership"
        link_word="/partner-explore"
      />
      <Test_Booking />
    </>
  );
};

export default Homes;
