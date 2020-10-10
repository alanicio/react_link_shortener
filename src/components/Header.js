import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="half">
        <div className="text-block">
          <span className="title">More than just shorter links<br/></span>
          <span className="text">
            Build your brand's recognition and get detailed insights on how your
            links are performing<br/>
          </span>
          <button className="rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="half">
        <div className="ilustration-working"></div>
      </div>
    </div>
  );
};

export default Header;
