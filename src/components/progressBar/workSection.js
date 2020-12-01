import React from "react";
import { PersonalDetails } from "../constants/data/ConstantData";
import "./workSection.scss";

const WorkSection = () => {
  return (
    <div className="work">
      <h2>Work</h2>
      <h3>
        <a className="company" href={PersonalDetails.companyUrl}>
          {PersonalDetails.companyName}
        </a>
      </h3>
      <p class="info">
        {PersonalDetails.position}
        <span> • </span>
        <span class="info-summary">{PersonalDetails.location}</span>
        <span> • </span>
        <em class="date">{PersonalDetails.workingTime}</em>
      </p>
      <ul className="block-list">
        {PersonalDetails.detail.map((detail) => (
          <li>{detail.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSection;
