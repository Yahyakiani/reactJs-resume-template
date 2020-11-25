import React from 'react'
import './event.scss'

 const EventCarousal = () => {

    return (
        <div class="event-carousel">

        <div class="event">
            <div class="entry-date">
                <div class="date">23</div>
                <span class="month">Jun</span>
            </div>
            <h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
        </div>

        <div class="event">
            <div class="entry-date">
                <div class="date">23</div>
                <span class="month">Jun</span>
            </div>
            <h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
        </div>

    </div>
    )
}

export default EventCarousal