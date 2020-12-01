import React from "react";
import  WorkSection  from "./workSection";
import "./progressBar.scss";
import Education from "./Education";

const ProgressBar = ({ skills, description }) => {
  return (
    <div className="progress">
      <h2>Skills</h2>
      <p>{description}</p>
      {skills.map((skill, index) => {
        const style = {
          width: skill.progress,
          background: "#c14a27",
        };
        return (
          <li key={`${index}-${skill.name}`}>
            <h3>{skill.name}</h3>
            <div className="progressBar">
              <div style={style}></div>
            </div>
          </li>
        );
      })}

      <WorkSection />
      <Education />
    </div>
  );
};
export default ProgressBar;
