import React from 'react'
import "./marqueeSection.css"
import Marquee from "react-fast-marquee";


const MarqueeSection = () => {
    return (
        <div className='marq-sec'>
            <Marquee speed={30}>
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d21bee722a8458e7f39_showcase-img-03.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d206023abae40b4eaef_showcase-img-04.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d2097573ca47f51b01e_showcase-img-06.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d219c4f22257316ad66_showcase-img-01.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d21ea836401efcaac4d_showcase-img-02.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d20beec625ade491068_showcase-img-05.avif" alt="marquee-img" className='marquee-img' />
                <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67756d1f4e4f74f02fb2adb6_showcase-img-07.avif" alt="marquee-img" className='marquee-img' />

            </Marquee>
            <div className='mar-get-in-touch'>
                <div className='marq-git-cont'>
                    UI/UX, Branding, Development. Got a project?
                </div>
                <a href="#" className="details-link">GET IN TOUCH →</a>

            </div>

        </div>
    )
}

export default MarqueeSection
