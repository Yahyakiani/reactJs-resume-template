import React from "react";
import { Link } from "react-router-dom";
import { ProjectDetails } from "../constants/data/ConstantData";
import { route_constants } from "../constants/Routes";
import "./event.scss";

const EventCarousal = () => {
  return (
    <div className="event-carousel">
      {ProjectDetails.slice(0,4).map((project,index) => {
        return (
          <div className="event" key={index}>
            <div className="entry-date">
              <div className="date">{project.date.day}</div>
              <span className="month">{project.date.month}</span>
            </div>
            <h2 className="entry-title">
              <Link to={`${route_constants.PROJECT}#${project.id}`}>{project.title}</Link>
            </h2>
            <p>
            {project.shortDescription}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EventCarousal;
