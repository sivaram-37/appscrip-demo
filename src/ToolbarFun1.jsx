import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ToolbarFun1() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="t-filter">
      <button id="filterValue" onClick={toggleFilterVisibility}>
        {isFilterVisible ? <FaAngleLeft /> : <FaAngleRight />}
        {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
      </button>
    </div>
  );
}

export default ToolbarFun1;
