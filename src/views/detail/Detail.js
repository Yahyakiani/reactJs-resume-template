import React, { useEffect } from "react";
import Post from '../../components/post/Post'
import { SideBarContainer } from "../../components/sidebar/SideBarContainer";
import {
  ArticleDetails,
  CertificateDetails,
  ProjectDetails,
} from "../../components/constants/data/ConstantData";
import { route_constants } from "../../components/constants/Routes";

const Detail = () => {
  const location = window.location;

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 500);
    }
  }, [location]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="content">
            <h2 className="entary-title">{location.pathname === route_constants.PROJECT ? 
            'Project Details' : 'Published Articles'}</h2>
            { location.pathname === route_constants.PROJECT ? 
            ProjectDetails.map((project) => (
              <Post
                id={project.id}
                key={`${project.title}-${project.id}`}
                date={project.date}
                title={project.title}
                description={project.description && project.description}
                link={project.link}
                imgName={project.img}
              />
            )) :
            ArticleDetails.map((project) => (
              <Post
                id={project.id}
                key={`${project.title}-${project.id}`}
                date={project.date}
                title={project.title}
                link={project.link}
                imgName={project.img}
              />
            ))
            }
          </div>
        </div>
        <SideBarContainer Details={CertificateDetails} title={"Certificates"} />
      </div>
    </div>
  );
};

export default Detail;
