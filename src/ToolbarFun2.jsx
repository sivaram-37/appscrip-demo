import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ToolbarFun2 = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsFilterVisible(false); // Hide the dropdown overlay after selecting an option
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="t-rec-container">
      {/* Additional content to show/hide */}
      {isFilterVisible && (
        <div className="dropdown-overlay">
          <ul>
            <li onClick={() => handleOptionSelect("RECOMMENDED")}>
              {selectedOption === "RECOMMENDED" && "✔"} RECOMMENDED
            </li>
            <li onClick={() => handleOptionSelect("NEWEST FIRST")}>
              {selectedOption === "NEWEST FIRST" && "✔"} NEWEST FIRST
            </li>
            <li onClick={() => handleOptionSelect("POPULAR")}>
              {selectedOption === "POPULAR" && "✔"} POPULAR
            </li>
            <li onClick={() => handleOptionSelect("PRICE : LOW TO HIGH")}>
              {selectedOption === "PRICE : LOW TO HIGH" && "✔"} PRICE : LOW TO
              HIGH
            </li>
            <li onClick={() => handleOptionSelect("PRICE : HIGH TO LOW")}>
              {selectedOption === "PRICE : HIGH TO LOW" && "✔"} PRICE : HIGH TO
              LOW
            </li>
            {/* Add other options here */}
          </ul>
        </div>
      )}
      <div className="t-rec">
        <input
          className="t-rec-inp"
          type="button"
          value={selectedOption}
          onClick={toggleFilterVisibility}
        />
        <FaAngleDown />
      </div>
    </div>
  );
};

export default ToolbarFun2;
