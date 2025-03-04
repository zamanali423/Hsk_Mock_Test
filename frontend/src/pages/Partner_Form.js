import React, { useState } from "react";
import Back_Button from "../components/Back_Button";
import "../css/partner_form.css";
import Test_Booking from "../components/Homes/Test_Booking";

const Partner_Form = () => {
  // State to manage input focus
  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, event) => {
    if (!event.target.value) {
      setFocusedFields((prev) => ({ ...prev, [field]: false }));
    }
  };
  return (
    <>
      <Back_Button back="Home"/>
      <div className="container partner-container">
        <h3 className="partner-title">Could you be our</h3>
        <h1 className="partner-main-title">Local Partner?</h1>
        <div className="container">
          <p className="partner-description">
            As our local partner, you would be the primary point of contact with
            candidates, teachers, schools and universities in your country or
            region for our services.
          </p>
          <p className="partner-description">
            Our partner dashboard and api would enable you to sell our official
            HSK and YCT practice tests offline and/or on your own website in
            your local currency. Our partners are typically well-established and
            connected HSK testing and preparation centers looking to grow their
            business and increase their official recognition.
          </p>
          <p className="partner-description">
            If you would like to explore the possibility of becoming our local
            partner, please first{" "}
            <a href="/login" style={{ color: "#fbb65e" }}>
              log in
            </a>{" "}
            with a personal HSK Mock account. Then let us know some basic
            details below and we will be in contact to arrange a time to talk.
          </p>
        </div>

        <div className="form-container">
          {/* Company Name */}
          <div className="form-group">
            <label className={focusedFields.companyName ? "focused" : ""}>
              Company name *
            </label>
            <input
              type="text"
              className="form-input"
              onFocus={() => handleFocus("companyName")}
              onBlur={(e) => handleBlur("companyName", e)}
            />
          </div>

          {/* Company Website */}
          <div className="form-group">
            <label className={focusedFields.companyWebsite ? "focused" : ""}>
              Company website *
            </label>
            <input
              type="text"
              className="form-input"
              onFocus={() => handleFocus("companyWebsite")}
              onBlur={(e) => handleBlur("companyWebsite", e)}
            />
          </div>

          {/* HSK Teachers & Learners (Side by Side) */}
          <div className="form-row">
            <div className="form-group">
              <label className={focusedFields.teachers ? "focused" : ""}>
                Number of HSK teachers you work with *
              </label>
              <input
                type="number"
                className="form-input"
                onFocus={() => handleFocus("teachers")}
                onBlur={(e) => handleBlur("teachers", e)}
              />
            </div>

            <div className="form-group">
              <label className={focusedFields.learners ? "focused" : ""}>
                Number of HSK learners you work with *
              </label>
              <input
                type="number"
                className="form-input"
                onFocus={() => handleFocus("learners")}
                onBlur={(e) => handleBlur("learners", e)}
              />
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label className={focusedFields.message ? "focused" : ""}>
              Feel free to add a message to us if you would like to
            </label>
            <input
              className="form-input"
              onFocus={() => handleFocus("message")}
              onBlur={(e) => handleBlur("message", e)}
            ></input>
          </div>

          {/* Best Contact Method */}
          <div className="form-group">
            <label className={focusedFields.contact ? "focused" : ""}>
              How best to contact you? *
            </label>
            <input
              type="text"
              className="form-input"
              onFocus={() => handleFocus("contact")}
              onBlur={(e) => handleBlur("contact", e)}
            />
          </div>

          {/* Submit Button */}
          <button className="submit-btn">Send</button>
        </div>
      </div>
      <Test_Booking />
    </>
  );
};

export default Partner_Form;
