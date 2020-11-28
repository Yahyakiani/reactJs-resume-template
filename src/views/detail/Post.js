import React, { useEffect, useState } from "react";
import SmartText from "../../components/smartText/SmartText";

const Post = (props) => {
  const { date, title, description, link, imgName, id, key } = props;

  const [image, setImage] = useState(null);
  useEffect(() => {
    imgName &&
      import(`../../assets/images/${imgName}`).then((image) =>
        setImage(image.default)
      );
  }, []);

  return (
    <div className="post" id={id}>
      <div className="entry-date">
        <div className="date">{date.day}</div>
        <span className="month">{date.month}</span>
      </div>
      <div className="featured-image">
        <img src={image && image} alt="" />
      </div>
      <h2 className="entry-title">
        <a href={link}>{title}</a>
      </h2>
      <SmartText text={description} />
    </div>
  );
};

export default Post;
