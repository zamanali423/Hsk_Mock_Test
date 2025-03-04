import React, { useState } from "react";
import "../css/contact_us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Back_Button from "../components/Back_Button";

const Contact_us = () => {
  const [selectedImage, setSelectedImage] = useState(false);
  return (
    <>
      <Back_Button back="Back"/>
      <div className="container text-center upload-container">
        {/* Title */}
        <h2 className="main-title">Contact Us</h2>

        {/* Message Box */}
        <h4 className="message-title">
          Your message (required) <span style={{ color: "red" }}>*</span>
        </h4>
        <div>
          <textarea
            className="message-box"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="If you're describing an error, please provide as much detail as you can"
          ></textarea>
        </div>

        {/* Title Below Image Box */}
        <p className="upload-instruction">
          Upload up to 9x jpg/png images (optional), max. 2MB for each image.
        </p>

        {/* Image Upload Box */}
        <label className="image-upload-box" htmlFor="fileInput">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Uploaded"
              className="uploaded-image"
            />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
          )}
        </label>

        <input type="file" id="fileInput" accept="image/*" hidden />

        {/* Submit Button */}
        <button className="submit-button">Send</button>
      </div>
    </>
  );
};

export default Contact_us;
