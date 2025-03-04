import React, { useCallback, useState } from "react";
import "../../css/profile.css";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../images/avatar-moren.png";
import Back_Button from "../../components/Back_Button";
import Model from "../../components/Users/Model";

const Profile = () => {
  const [focusedFields, setFocusedFields] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [profileImage, setProfileImage] = useState(avatar);

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, event) => {
    if (!event.target.value) {
      event.target.blur(); // Blurs the focus if value is empty
      setFocusedFields((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleShowModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Back_Button back={"Back"} />
      <div className="profile-container">
        {/* Title */}
        <h1 className="profile-title">Complete your profile</h1>

        {/* Avatar Section */}
        <div className="avatar-container">
          <div className="avatar">
            <img src={profileImage} alt="Avatar" />
            <label className="camera-icon">
              <FontAwesomeIcon icon={faCamera} onClick={handleShowModal} />
            </label>
          </div>
          <h1 className="avatar-text">Xyz@gmail.com</h1>
        </div>

        {/* Pass setProfileImage to update profile picture */}
        <Model
          openModal={openModal}
          setOpenModal={setOpenModal}
          setProfileImage={setProfileImage}
        />

        {/* Form Section */}
        <form className="profile-form">
          <div className="form-row">
            <div className="input-group">
              <input
                type="text"
                id="givenName"
                required
                onFocus={() => handleFocus("givenName")}
                onBlur={(e) => handleBlur("givenName", e)}
              />
              <label
                htmlFor="givenName"
                className={focusedFields.givenName ? "focused" : ""}
              >
                Given name *
              </label>
            </div>

            <div className="input-group">
              <input
                type="text"
                id="familyName"
                required
                onFocus={() => handleFocus("familyName")}
                onBlur={(e) => handleBlur("familyName", e)}
              />
              <label
                htmlFor="familyName"
                className={focusedFields.familyName ? "focused" : ""}
              >
                Family name *
              </label>
            </div>

            <div className="input-group">
              <input type="date" id="dob" required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <select
                id="gender"
                value={focusedFields.gender ? undefined : ""}
                onFocus={() => handleFocus("gender")}
                onBlur={(e) => handleBlur("gender", e)}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label
                htmlFor="gender"
                className={focusedFields.gender ? "focused" : ""}
              >
                Select Gender
              </label>
            </div>

            <div className="input-group">
              <input
                type="text"
                id="nationality"
                required
                onFocus={() => handleFocus("nationality")}
                onBlur={(e) => handleBlur("nationality", e)}
              />
              <label
                htmlFor="nationality"
                className={focusedFields.nationality ? "focused" : ""}
              >
                Nationality
              </label>
            </div>

            <div className="input-group">
              <select
                id="currency"
                value={focusedFields.currency ? undefined : ""}
                onFocus={() => handleFocus("currency")}
                onBlur={(e) => handleBlur("currency", e)}
              >
                <option value=""></option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <label
                htmlFor="currency"
                className={focusedFields.currency ? "focused" : ""}
              >
                Preferred Currency
              </label>
            </div>
          </div>

          {/* Display Name Checkbox */}
          <div className="checkbox-row">
            <label htmlFor="display-name-yes">Display name as is</label>
            <input type="radio" id="display-name-yes" name="display-name" />
            <input type="radio" id="display-name-no" name="display-name" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
