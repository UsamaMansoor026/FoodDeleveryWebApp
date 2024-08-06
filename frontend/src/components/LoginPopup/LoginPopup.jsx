import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const [currStatus, setCurrentStatus] = useState("Sign Up");
  const { url, setToken } = useContext(StoreContext);

  /* Use State for storing the data */
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* On change handler */
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  /* Login Handler */
  const handleLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currStatus === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currStatus}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {currStatus === "Login" ? (
            ""
          ) : (
            <input
              name="name"
              onChange={handleOnChange}
              value={data.name}
              type="text"
              placeholder="Your Name..."
              required
            />
          )}

          <input
            name="email"
            onChange={handleOnChange}
            value={data.email}
            type="email"
            placeholder="Your Email..."
            required
          />
          <input
            name="password"
            onChange={handleOnChange}
            value={data.password}
            type="password"
            placeholder="Your Password..."
            required
          />
        </div>
        <button type="submit">
          {currStatus === "Sign Up" ? "Create Account" : "Login"}
        </button>
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
