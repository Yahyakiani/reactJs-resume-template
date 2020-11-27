import React, { useEffect, useState } from "react";
import {
  AwardDetails,
  PersonalDetails,
} from "../../components/constants/data/ConstantData";
import ProgressBar from "../../components/progressBar/ProgressBar";
import { SideBarContainer } from "../../components/sidebar/SideBarContainer";
import "./about.scss";

const About = () => {
  const { summary, description, detail, img, skills } = PersonalDetails;
  const [image, setImage] = useState(null);
  useEffect(() => {
    img &&
      import(`../../assets/images/${img}`).then((image) =>
        setImage(image.default)
      );
  });
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="content">
            <h2 class="entry-title">About Me</h2>
            <figure class="featured-image">
              <img src={image} alt="Yahya" width={"350px"} height={"350px"} />
            </figure>
            <p class="leading">{summary}</p>
            <p>
              <ProgressBar skills={skills} description={description} />
            </p>
            <p>{detail}</p>
          </div>
        </div>
        <SideBarContainer Details={AwardDetails} title={"Awards"} />
      </div>
    </div>
  );
};

export default About;
