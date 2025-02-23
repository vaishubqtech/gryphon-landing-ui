import React from 'react'
import "./performanceScreen.css"
import Marquee from "react-fast-marquee";



const PerfCard = ({ title, percentage, description }) => {
    return (
      <div className="perf-card">
        <div className='card-interior'>
        <h2 className="perf-card-percentage">{percentage}<span className='interior-span'>%</span></h2>
        <div>
        <h3 className="perf-card-title">{title}</h3>
        <p className="perf-card-description">{description}</p>
        </div>
        </div>
      </div>
    );
  };



const PerformanceScreen = () => {
    const cards = [
        { title: "PROJECTS COMPLETED", percentage: "200", description: "Our SEO and content strategies drove a 175% increase in organic traffic, helping clients reach more potential customers and build." },
        { title: "CONVERSION FOCUSED", percentage: "100", description: "Websites so stunning that it will increase your conversion rate by 120%, decrease the bounce rate and improve user engagement." },
        { title: "SUCCESS AS A SERVICE", percentage: "95", description: "We have been transforming SaaS products for over 5 years by designing unique interfaces and driving growth." },
        { title: "STAY AHEAD MARKET", percentage: "92", description: "Designs that make you and your venture shine in the crowd of similar looking websites. Be the one that leads the industry." }
      ];
    
    return (
        <section className="gryphon-about-section ">
            <div className='perf-sec'>           
            <div className='performance-head'>
                <div className="marquee-width">
                    <Marquee speed={30}>
                        <div className="gryphon-about-header">
                            <span className="gryphon-dot"></span>
                            <h3 className="gryphon-about-heading">Our Performance</h3>
                        </div>
                        <div className="gryphon-about-header">
                            <span className="gryphon-dot"></span>
                            <h3 className="gryphon-about-heading">Our Performance</h3>
                        </div>
                    </Marquee>
                </div>

                <div className='perfamance-title'>
                Our Impact<br/>in Numbers
                </div>
            </div>

            <div className="perf-card-grid">
            <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/677ead6dc8d8dd38486621ad_performace-card-img-01.avif" alt="" className='pref-image-card' />
            {cards?.map((card, index) => (
                <PerfCard key={index} {...card} />
            ))}
            <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/677ead6d66f85adda6cd0f9a_performace-card-img-02.avif" alt="" className='pref-image-card'/>
            </div>
            </div>
        </section>
    )
}

export default PerformanceScreen
