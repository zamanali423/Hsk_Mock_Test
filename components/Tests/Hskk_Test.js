import React from "react";
import "../../css/hskk_test.css";
import {
  faArrowDown,
  faFileAudio,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hskk_Test = ({ fileName, fileType, audioName, audioType }) => {
  return (
    <>
      <div className="resource-container container">
        {/* Paragraph */}
        <p className="resource-text">
          Practice papers are being prepared for this level. In the meantime,
          please download:
        </p>

        {/* Horizontal Line */}
        <hr className="divider" />

        {/* PDF File Box */}
        <div className="resource-box">
          <div>
            <FontAwesomeIcon
              icon={faFilePdf}
              style={{ color: "red", fontSize: "20px" }}
            />{" "}
            <span className="file-name">{fileName}</span>
          </div>
          <a href={fileType} className="download-btn" download={fileName}>
            <FontAwesomeIcon icon={faArrowDown} className="pe-1" />
            Download
          </a>
        </div>

        {/* Audio File Box */}
        <div className="resource-box">
          <div>
            <FontAwesomeIcon
              icon={faFileAudio}
              style={{ color: "#9a57ef", fontSize: "20px" }}
            />{" "}
            <span className="file-name">{audioName}</span>
          </div>
          <a href={audioType} className="download-btn" download={audioName}>
            <FontAwesomeIcon icon={faArrowDown} className="pe-1" />
            Download
          </a>
        </div>
      </div>
    </>
  );
};

export default Hskk_Test;
