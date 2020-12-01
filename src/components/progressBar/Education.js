import React from "react";
import { PersonalDetails } from "../constants/data/ConstantData";
import "./Education.scss";

const Education = () => {
  return (
    <div className="work">
      <h2 className="edu">Education</h2>
      <h3>
        <a className="company" href={PersonalDetails.UniUrl}>
          {PersonalDetails.UniName}
        </a>
      </h3>
      <p class="info">
        {PersonalDetails.studyMajor}
        <span> • </span>
        <span class="info-summary">{PersonalDetails.location}</span>
        <span> • </span>
        <em class="date">{PersonalDetails.studyTime}</em>
      </p>
    </div>
  );
};

export default Education;
