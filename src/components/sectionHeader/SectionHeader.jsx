import React from "react";
import "./sectionHeader.scss";

const SectionHeader = ({ subText, mainText }) => {
  return (
    <div className="sectionHeader">
      <span>{subText}</span>
      <h3>{mainText}</h3>
    </div>
  );
};

export default SectionHeader;
