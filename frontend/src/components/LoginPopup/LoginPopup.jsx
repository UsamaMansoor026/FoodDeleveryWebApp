import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currStatus, setCurrentStatus] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currStatus}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {currStatus === "Login" ? (
            ""
          ) : (
            <input type="text" placeholder="Your Name..." required />
          )}

          <input type="email" placeholder="Your Email..." required />
          <input type="password" placeholder="Your Password..." required />
        </div>
        <button>{currStatus === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the Terms & Policies.</p>
        </div>

        {currStatus === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrentStatus("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentStatus("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
