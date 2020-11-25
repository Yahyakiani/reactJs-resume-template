import React from 'react'
import EventCarousal from '../../components/eventCarousal/EventCarousal';
import Slider from "../../components/slider/Slider";
import  Testimonial  from '../../components/testimonial/Testimonial';
import './_homepage.scss'

const Home = () => {
    return (
        <>
            <Slider />
           <EventCarousal />
            <Testimonial />


        </>
    )
}

export default Home
