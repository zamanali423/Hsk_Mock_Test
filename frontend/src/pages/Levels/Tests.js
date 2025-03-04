import React from "react";
import Back_Button from "../../components/Back_Button";
import "../../css/test.css";
import fileTypeB from "../../papers/beginner/hskk-primary-pdf.pdf";
import audioTypeB from "../../papers/beginner/HSKK(Primary).mp3";
import fileTypeI from "../../papers/intermediate/hskk-intermediate-pdf.pdf";
import audioTypeI from "../../papers/intermediate/hskk-intermediate.mp3";
import fileTypeA from "../../papers/advance/hskk-advanced-pdf.pdf";
import audioTypeA from "../../papers/advance/hskk-advanced.mp3";

import RectangleCard from "../../components/Tests/RectangleCard";
import Test_Header from "../../components/Tests/Test_Header";
import { useParams } from "react-router";
import Hskk_Test from "../../components/Tests/Hskk_Test";

const Tests = () => {
  const param = useParams();

  return (
    <>
      <Back_Button back="Pick Your Level" link="/choose-level" />
      <h1 className="test-title">Take a practice test</h1>
      <Test_Header />
      {!param.level_no.startsWith("hskk") ? (
        <RectangleCard level={param.level_no} />
      ) : param.level_no === "hskk1" ? (
        <Hskk_Test
          fileName="HSKK (Primary) test questions and answers.pdf"
          fileType={fileTypeB}
          audioName="HSKK (Primary) .mp3"
          audioType={audioTypeB}
        />
      ) : param.level_no === "hskk2" ? (
        <Hskk_Test
          fileName="HSKK (Intermediate) test questions and answers.pdf"
          fileType={fileTypeI}
          audioName="HSKK (Intermediate) .mp3"
          audioType={audioTypeI}
        />
      ) : (
        <Hskk_Test
          fileName="HSKK (Advanced) test questions and answers.pdf"
          fileType={fileTypeA}
          audioName="HSKK (Advanced) .mp3"
          audioType={audioTypeA}
        />
      )}
    </>
  );
};

export default Tests;
