import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>A World of Flavors at Your Fingertips</h2>
        <p>
          Order your favorite dishes from your go-to spots, or discover hidden
          gems you never knew existed. Our app tailors recommendations to your
          taste and dietary needs, making it easier than ever to find the
          perfect meal. No more waiting in line or battling traffic -
          deliciousness awaits, delivered straight to you.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
