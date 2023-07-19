import React from "react";
import Facebook from "../assets/Facebook.png";
import Pinterest from "../assets/Pinterest.png";
import Twitter from "../assets/Twitter.png";
import LinkedIn from "../assets/LinkedIn.png";

const Leftbar = () => {
  return (
    <div className="">
      <a href="https://facebook.com/">
        {" "}
        <div className="h-6 w-6 mb-6">
          <img src={Facebook} alt="Facebook Logo"></img>
        </div>
      </a>

      <a href="https://pinterest.com">
        <div className="h-6 w-6 mb-6">
          <img src={Pinterest} alt="Pinterest Logo"></img>
        </div>
      </a>

      <a href="https://twitter.com">
        <div className="h-6 w-6 mb-6">
          <img src={Twitter} alt="Twitter Logo"></img>
        </div>
      </a>

      <a href="https://linkedin.com">
        <div className="h-6 w-6 mb-6">
          <img src={LinkedIn} alt="LinkedIn Logo"></img>
        </div>
      </a>
    </div>
  );
};

export default Leftbar;
