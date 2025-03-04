import React from "react";
import "../../css/preparing_test.css";

const Preparing_Test = ({ title, paragraph, subpara, link,link_word }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="content-box">
          <h2 className="title">{title}</h2>
          <p className="description">{paragraph}</p>
          <p className="description">{subpara}</p>
          <a href={link_word} className="custom-link">
            {link}
          </a>
        </div>
      </div>
    </>
  );
};

export default Preparing_Test;
