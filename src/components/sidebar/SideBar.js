import React, { useEffect, useState } from "react";

export const SideBar = (props) => {
  const { date, thumbnail, subtitle, link, organization, id } = props;
  const [image, setImage] = useState(null);
  useEffect(() => {
    thumbnail &&
      import(`../../assets/images/${thumbnail}`).then((image) =>
        setImage(image.default)
      );
  });
  return (
    <li id={id} key={id}>
      <figure className="cover">
        <img src={image} alt="thumbnail 1" />
      </figure>
      <div className="detail">
        <h3>
          <a href={link}>{subtitle}</a>
        </h3>
        <span className="year">{date.year}</span>
        <span className="track">{organization}</span>
      </div>
    </li>
  );
};
