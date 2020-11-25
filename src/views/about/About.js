import React from 'react'
import { AwardDetails, PersonalDetails } from '../../components/constants/data/ConstantData'
import { SideBarContainer } from '../../components/sidebar/SideBarContainer'
import './about.scss'

const About = () => {
	const { summary, description, detail, img } = PersonalDetails
	return (
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<div class="content">
						<h2 class="entry-title">History</h2>
						<figure class="featured-image" >
							<img src="dummy/post-image.jpg" alt="post image" />
						</figure>
						<p class="leading">{summary}</p>
						<p>{description}</p>

						<p>{detail}</p>
					</div>
				</div>
				<SideBarContainer Details={AwardDetails} title={'Awards'} />
			</div>
		</div>
	)
}

export default About