import React from "react";

const Back_Button = ({ back, link }) => {
  return (
    <>
      <div className="container mt-3">
        <a
          href={link === "/choose-level" ? link : "/"}
          style={{
            textDecoration: "none",
            color: "rgb(77 77 78)",
            fontSize: "14px",
          }}
        >
          &lt; {back}
        </a>
      </div>
    </>
  );
};

export default Back_Button;
