import React from 'react'
import { SideBar } from './SideBar'

export const SideBarContainer = ({title,Details}) => {
    return (
        <div class="col-md-4 col-md-push-1">
					<aside class="sidebar">
						<div class="widget">
							<h3 class="widget-title">{title}</h3>
							<ul class="discography-list">
								{Details.map(details => <SideBar
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
