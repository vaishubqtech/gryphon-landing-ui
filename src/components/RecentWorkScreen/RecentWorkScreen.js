import React from 'react'
import Marquee from "react-fast-marquee";
import "./recentWorkScreen.css"

const RecentWorkScreen = () => {
    return (
        <section className="gryphon-about-section ">
            <div className='perf-sec'>
                <div className='performance-head'>
                    <div className="marquee-width">
                        <Marquee speed={30}>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Recent Works</h3>
                            </div>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Recent Works</h3>
                            </div>
                        </Marquee>
                    </div>

                    <div className='perfamance-title'>
                        Our Recent Work
                    </div>
                </div>
                <div className="portfolio-item" >
                    <div className='work-collection-list'>
                        <div className='work-card'>
                                <img src="https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/677fab19604761a513669e49_project-img-01.png" alt="image1" className="portfolio-image" />
                            <div className="portfolio-text">
                                <h3>Redefining UX</h3>
                                <div class="work-card-category-block">
                                    <div class="work-card-dot work-card-dot-dark"></div>
                                    <p>UX/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <div className='work-card'>
                                <img src="https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/677fae00025b268ded35a243_project-img-02.png" alt="image1" className="portfolio-image" />
                            <div className="portfolio-text">
                                <h3>Products Expertise</h3>
                                <div class="work-card-category-block">
                                    <div class="work-card-dot work-card-dot-dark"></div>
                                    <p>Product Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='work-collection-list margin-top-dynamic'>
                        <div className='work-card'>
                                <img src="https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/677fb0b278b6e70c5cd86594_project-img-03.png" alt="image1" className="portfolio-image" />
                            <div className="portfolio-text">
                                <h3>Brand Identities</h3>
                                <div class="work-card-category-block">
                                    <div class="work-card-dot work-card-dot-dark"></div>
                                    <p>Branding</p>
                                </div>
                            </div>
                        </div>
                        <div className='work-card'>
                                <img src="https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/677fb292913c6789b09d960f_project-img-04.png" alt="image1" className="portfolio-image" />
                            <div className="portfolio-text">
                                <h3>Design Development</h3>
                                <div class="work-card-category-block">
                                    <div class="work-card-dot work-card-dot-dark"></div>
                                    <p>Web Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default RecentWorkScreen
