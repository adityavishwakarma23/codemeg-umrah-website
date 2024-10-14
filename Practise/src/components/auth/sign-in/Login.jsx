import React from "react";
// import { LoginBg, Logo } from "../../../assets/images";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* <div class="login-page" style={{ "background-image": `url(${LoginBg})` }}>
        <div class="container">
        <div className="login-logo">
          <Link to=""><img src={Logo} alt="" /></Link>
          </div>
          <div className="login-wraper">
            <div class="login-main">
              <div class="login-inner-65">
                <div class="login-descrp">
                  <h1>Welcome to CYC</h1>
                  <p>
                    Sign-up to become a member, and get exclusive discounts.
                  </p>
                </div>
              </div>
              <div class="login-inner-35">
                <div class="signup-card">
                  <div class="card crd-login">
                    <div class="login-innerheading">
                      <h3>Login</h3>
                      <p>Enter Email ID & password to continue</p>
                    </div>
                    <div class="single-input">
                      <label for="">Email ID</label>
                      <input
                        type="number"
                        placeholder="Enter Your Email ID"
                      />
                    </div>
                    <div class="single-input">
                      <label for="">Password</label>
                      <input type="password" placeholder="Enter Your Password" />
                    </div>
                    <div className="rmbrfrgt-main">
                  <div className="rmembr-btn">
                    <div className="chkbx-main">
                      <label>
                        <input type="checkbox" name="" />
                        <span>
                          <em></em>Keep me signed in
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="frgot-btn">
                    <Link to="/forgot-password">Forgot Password </Link>
                  </div>
                </div>
                    <div class="login-btn">
                      <Link to="/" class="btn primary-btn">Login</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Login;
