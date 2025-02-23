import React, { useState } from 'react'
import "./serviceScreen.css"
import Marquee from "react-fast-marquee";

const ServiceScreen = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Branding", content: "Our branding creates cohesive narratives that reflect your values, resonate with your audience, and ensure authenticity at every touchpoint.",image1:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/6782264e767307f9f887ba6e_service-01-img-01.png",image2:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822656298fa56d129ef6e8_service-01-img-02.png",image3:'https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/6782263997d7089a66e9714d_service-01-img-03.png'
        },
        { title: "UI/UX Design", content: "UI/UX design creates seamless, user-friendly experiences that engage and deliver results—blending creativity with strategy for impactful digital journeys.",image1:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822b10a67afe34e7083943_service-02-img-01.png",image2:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822b16e6f5b3c094be5953_service-02-img-02.png",image3:'https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822b1ba89fe1ac8c514362_service-02-img-03.png' },
        { title: "Web Development", content: "Web development builds your online presence with responsive, engaging websites. Tailored to your needs, we deliver speed, security, and seamless user experiences.",image1:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822c76245b1082c0d9e1d0_service-03-img-01.png",image2:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822c7e34f902896caa984c_service-03-img-02.png",image3:'https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822c85baf42ed064594b0f_service-03-img-03.png' },
        { title: "No Code Development", content: "No-code development allows fast creation of websites and apps with drag-and-drop tools, simplifying the process and enabling innovation without coding expertise.",image1:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822deef00f976eaebf25fa_service-04-img-01.png",image2:"https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822df5d33802d2be5f6eb9_service-04-img-02.png",image3:'https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67822dfc1a02cf16c0503c86_service-04-img-03.png' },
    ];


    return (
        <section className="gryphon-about-section ">
            <div className='perf-sec'>
                <div className='performance-head'>
                    <div className="marquee-width">
                        <Marquee speed={30}>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Our Services</h3>
                            </div>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Our Services</h3>
                            </div>
                        </Marquee>
                    </div>

                    <div className='perfamance-title'>
                        Top-Notch Services
                    </div>
                </div>
                <div className="accordion-container">
                    {sections.map((section, index) => (
                        <div key={index} className="accordion-item">
                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                <span className="title">{section.title}</span>
                                <span className="icon">{openIndex === index ? "−" : "+"}</span>
                            </div>
                            <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                                <div className="accordion-expanded-content">
                                    <div className='expand-image'>
                                    <img src={section?.image1} alt="Branding Example 1"  className='open-img-1'/>
                                    <img src={section?.image2} alt="Branding Example 2"  className='open-img-2'/>

                                    </div>
                                    <div className='expand-cont'>
                                        <p>
                                            {section.content}
                                        </p>
                                        <a href="#" className="details-link">CHECK DETAIL’S →</a>
                                        <div className="image-gallery">
                                            <img src={section?.image3} alt="Branding Example 1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceScreen
