import React from 'react'
import "./testimonialScreen.css"
import Marquee from "react-fast-marquee";

const TestimonialScreen = () => {
  return (
    <section className="gryphon-about-section ">
    <div className='perf-sec'>
        <div className='performance-head'>
            <div className="marquee-width">
                <Marquee speed={30}>
                    <div className="gryphon-about-header">
                        <span className="gryphon-dot"></span>
                        <h3 className="gryphon-about-heading">Testimonials</h3>
                    </div>
                    <div className="gryphon-about-header">
                        <span className="gryphon-dot"></span>
                        <h3 className="gryphon-about-heading">Testimonials</h3>
                    </div>
                </Marquee>
            </div>

            <div className='perfamance-title'>
          What say about us
            </div>
        </div>
        </div>
        </section>
  )
}

export default TestimonialScreen
