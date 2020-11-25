import React from 'react'
import sliderLogo from '../../assets/dummy/slide-1.jpg'
import './_slider.scss'


const Slider = () => {
    return (
        <div class="hero">
				<div class="slider">
					<ul class="slides">
						<li class="lazy-bg" data-background={sliderLogo} >
							<div class="container">
								<h2 class="slide-title">Header goes here</h2>
								<h3 class="slide-subtitle">Less important text goes here</h3>
								<p class="slide-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br> Fugiat aliquid minus nemo sed est.</p>
								<a href="#" class="button cut-corner">Read More</a>
							</div>
						</li>

					</ul>
				</div>
			</div>
    )
}

export default Slider