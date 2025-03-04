import React from "react";
import "../../css/test_booking.css";
import Shape_Divider from "../Homes/Shape_Divider";

const Test_Booking = () => {
  return (
    <>
      <div className="container-fluid test_box">
        <Shape_Divider />
        <div className="row justify-content-evenly main-box">
          {/* Left Box */}
          <div className="col-md-5 rect-box-left">
            <h3 className="box-title">Check HSK test dates</h3>
          </div>

          {/* Right Box */}
          <div className="col-md-5 rect-box rect-box-right">
            <h3 className="box-title">Book an HSK test</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test_Booking;
