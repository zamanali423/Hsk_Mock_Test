import React from "react";
import "../css/login.css";
import login from "../images/Login_new.png";

const Login = () => {
  return (
    <>
      <section
        className=""
        style={{ backgroundColor: "#fff", height: "120vh" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card login-card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-6 col-lg-5 d-none d-md-block"
                    style={{ backgroundColor: "#faae56" }}
                  >
                    <div className="text-white login-title">
                      <h2>HSK Mock</h2>
                      <h6>The official mock testing platform</h6>
                      <p>
                        for the world’s most popular Chinese language
                        proficiency tests.
                      </p>
                    </div>
                    <img
                      src={login}
                      alt="login form"
                      className="img-fluid login-img"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          {/* <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i> */}
                          <span className="h3 fw-bold mb-0">
                            Log in / Sign up
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ fontSize: "16px" }}
                        >
                          for our China (.cn) service
                        </h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Email address"
                          />
                          {/* <label className="form-label" for="form2Example17">
                            Email
                          </label> */}
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                          <p
                            style={{
                              fontSize: "12px",
                              color: "rgb(186 176 176)",
                              marginTop: "10px",
                              width: "60%",
                              marginLeft: "5px",
                            }}
                          >
                            If you don’t yet have an account, set a password
                            between 6 and 20 characters long.
                          </p>
                          {/* <label className="form-label" for="form2Example27">
                            Password
                          </label> */}
                        </div>
                        <input type="checkbox" name="terms" id="terms" />{" "}
                        <span style={{ fontSize: "14px" }}>
                          I agree to{" "}
                          <a href="#" className="check">
                            Terms of Services
                          </a>{" "}
                          and{" "}
                          <a href="#" className="check">
                            Privacy Policy
                          </a>
                        </span>
                        <div className="pt-1 mt-2">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
