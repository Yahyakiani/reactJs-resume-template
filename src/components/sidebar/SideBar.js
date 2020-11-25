import React, { useEffect, useState } from 'react'

export const SideBar = (props) => {
    const { date, thumbnail, subtitle, link, organization } = props;
    const [image, setImage] = useState(null)
    useEffect(() => {
        thumbnail && import(`../../assets/images/${thumbnail}`).then(image => setImage(image.default))
    })
    return (
        <li>
            <figure class="cover"><img src={image} alt="thumbnail 1" /></figure>
            <div class="detail">
                <h3><a href={link}>{subtitle}</a></h3>
                <span class="year">{date.year}</span>
                <span class="track">{organization}</span>
            </div>
        </li>
    )
}
