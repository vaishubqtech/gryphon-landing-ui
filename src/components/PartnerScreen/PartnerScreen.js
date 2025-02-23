import React from 'react'
import Marquee from "react-fast-marquee";
import "./partnerScreen.css"

const PartnerScreen = () => {
    // for light theme https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/677e6a2b6e28abf24cb8786c_client-logo-01.svg
    const partners = [
        { name: "Epicurious", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "Acme Corp", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "Codecraft_", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "CoreOS", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "Catalog", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "ContrastAI", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "3Portals", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "Ephemeral", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "Alt+Shift", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
        { name: "AlphaWave", img: "https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/6784fb474da11a51e1231381_client-logo-01-light.svg" },
    ];
    return (
        <section className="gryphon-about-section ">
            <div className='perf-sec'>
                <div className='performance-head'>
                    <div className="marquee-width">
                        <Marquee speed={30}>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Our Clients</h3>
                            </div>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Our Clients</h3>
                            </div>
                        </Marquee>
                    </div>

                    <div className='perfamance-title'>
                        Our Partner
                    </div>
                </div>
                <div className="partners-container">
                    <div className="partners-grid">
                        {partners?.map((partner, index) => (
                            <div key={index} className="partner-card">
                                <img src={partner.img} alt={partner.name} className="partner-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnerScreen
