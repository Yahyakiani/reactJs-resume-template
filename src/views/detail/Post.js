import React, { useEffect, useState } from 'react'
import SmartText from '../../components/smartText/SmartText';


const Post = (props) => {

    const { date, title, description, link,imgName } = props;

    const [image, setImage] = useState(null)
    useEffect(() => {
        imgName && import(`../../assets/images/${imgName}`).then(image => setImage(image.default))
    }, [])

    return (
        <div class="post">
            <div class="entry-date">
                <div class="date">{date.day}</div>
                <span class="month">{date.month}</span>
            </div>
            <div class="featured-image">
                <img src={image && image} alt="" />
            </div>
            <h2 class="entry-title"><a href={link}>{title}</a></h2>
            {/* <p>{description}</p>
            <a>Read more</a> */}
            <SmartText text={description} />
        </div>
    )
}

export default Post
