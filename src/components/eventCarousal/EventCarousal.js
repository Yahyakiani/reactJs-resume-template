import React from "react";
import { ProjectDetails } from "../constants/data/ConstantData";
import "./event.scss";

const EventCarousal = () => {
  return (
    <div class="event-carousel">
      {ProjectDetails.slice(0,4).map((project) => {
        return (
          <div class="event">
            <div class="entry-date">
              <div class="date">{project.date.day}</div>
              <span class="month">{project.date.month}</span>
            </div>
            <h2 class="entry-title">
              <a href="#">{project.title}</a>
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
