import React from "react";
import "./progressBar.scss";

const ProgressBar = ({ skills, description }) => {
  return (
    <>
      <h2>Skills</h2>
      <p>{description}</p>
      {skills.map((skill,index) => {
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
    </>
  );
};
export default ProgressBar;
