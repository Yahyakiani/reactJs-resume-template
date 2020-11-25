import React, { useEffect } from 'react'
// import $ from 'jquery'
import './_testimonial.scss'

const Testimonial = () => {

    useEffect(() => {
        // $(".quote-slider").flexslider({
		// 	directionNav: true,
		// 	controlNav: false,
		// 	prevText: "<i class='fa fa-caret-left'></i>",
		// 	nextText: "<i class='fa fa-caret-right'></i>",
		// });

    }, [])
    return (
        <div class="fullwidth-block testimonial-section">
        <div class="container">
            <div class="quote-slider">
                <ul class="slides">
                    <li>
                        <blockquote>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</p>
                            <cite>John Smith</cite>
                            <span>Corporation CEO, books author</span>
                        </blockquote>
                    </li>
                    <li>
                        <blockquote>
                            <p>"Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</p>
                            <cite>John Smith</cite>
                            <span>Corporation CEO, books author</span>
                        </blockquote>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Testimonial