import React from 'react'
import { NavLink } from 'react-router-dom'
import sliderLogo from '../../assets/dummy/slide-1.jpg'
import { route_constants } from '../constants/Routes'
import './_slider.scss'


const Slider = () => {
	return (
		<div class="hero">
			<div class="slider">
				<ul class="slides">
					<li class="lazy-bg" data-background={sliderLogo} >
						<div class="container">
							<h2 class="slide-title">Yahya Kayani</h2>
							<h3 class="slide-subtitle">Software Engineer</h3>
							<p class="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br> Fugiat aliquid minus nemo sed est.</p>
							<NavLink
								to={route_constants.ABOUT}
								className="button cut-corner"
							>About Me</NavLink>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Slider