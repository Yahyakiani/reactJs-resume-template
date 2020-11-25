import React from 'react'

export const SideBar = (props) => {
    const { date, thumbnail, subtitle, link, organization } = props;
    return (
        <li>
            <figure class="cover"><img src={thumbnail} alt="thumbnail 1" /></figure>
            <div class="detail">
                <h3><a href={link}>{subtitle}</a></h3>
                <span class="year">{date.year}</span>
                <span class="track">{organization}</span>
            </div>
        </li>
    )
}
