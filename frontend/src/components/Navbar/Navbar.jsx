import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleActiveLink = (menuLink) => {
    setMenu(menuLink);
  };

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => handleActiveLink("home")}
        >
          home
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => handleActiveLink("menu")}
        >
          menu
        </li>
        <li
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => handleActiveLink("mobile-app")}
        >
          mobile-app
        </li>
        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => handleActiveLink("contact-us")}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
