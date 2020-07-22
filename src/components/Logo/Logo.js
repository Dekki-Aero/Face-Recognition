import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logo from "./logo.png";

const Logo = () => {
  return (
    <div className="ml2 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            style={{
              height: "150px",
              width: "150px",
            }}
            src={logo}
            alt="logo"
          ></img>{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
