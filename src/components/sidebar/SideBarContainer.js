import React from 'react'
import { SideBar } from './SideBar'

export const SideBarContainer = ({title,Details}) => {
    return (
        <div className="col-md-4 col-md-push-1">
					<aside className="sidebar">
						<div className="widget">
							<h3 className="widget-title">{title}</h3>
							<ul className="discography-list">
								{Details.map((details,index) => <SideBar
									id={`${title}#${index}`}
									key={`${title}#${index}`}
									date={details.date}
									thumbnail={details.thumbnail}
									subtitle={details.subtitle}
									link={details.link}
									organization={details.organization}
								/>)}
							</ul>
						</div>
					</aside>
				</div>
    )
}
