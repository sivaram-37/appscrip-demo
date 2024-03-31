import React from "react";
import {
  FaAngleDown,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";

function HeadingComponent() {
  return (
    <div className="heading">
      <div className="namebar">
        {[1, 2, 3].map((index) => (
          <div className="namebar-grp" key={index}>
            <div className="namebar-logo"></div>
            <h5>Lorem ipsum dolor</h5>
          </div>
        ))}
      </div>
      <div className="t-line-1">
        <div className="t-logo"></div>
        <div className="t-name">
          <h3>LOGO</h3>
        </div>
        <div className="container">
          <div className="t-icons">
            <FaRegHeart className="t-c" />
            <FaSearch className="t-c" />
            <FaShoppingBag className="t-c" />
            <FaRegUser className="t-c" />
            <p style={{ paddingLeft: "10px" }}>
              ENG <FaAngleDown />
            </p>
          </div>
        </div>
      </div>
      <div className="t-line-2">
        <div className="shortcuts">
          {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"].map(
            (item, index) => (
              <p key={index}>{item}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default HeadingComponent;
