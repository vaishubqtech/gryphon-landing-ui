// AboutGryphon.js
import React from "react";
import "./aboutScreen.css";
import Marquee from "react-fast-marquee";

const AboutGryphon = () => {
    return (
        <section className="gryphon-about-section">
            <div className="gryphon-container">
                <div className="gryphon-left">
                    <div className="marquee-width">
                        <Marquee speed={30}>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">About Gryphon</h3>
                            </div>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">About Gryphon</h3>
                            </div>
                        </Marquee>
                    </div>
                    <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/677f8660b50f366a4f4585c5_home-about-image.avif" alt="Gryphon Branding" className="gryphon-image" />
                </div>
                <div className="gryphon-right">
                    <h2 className="gryphon-heading">
                        WHERE BRANDING GOES BEYOND VISUALS IT'S ABOUT CREATING A STORY THAT RESONATES.
                    </h2>
                    <p className="gryphon-description">
                        Gryphon Studio creates compelling brand identities with distinctive logos, typography, and visuals that
                        resonate. We craft seamless digital experiences that elevate brands, foster connections, and drive results.
                    </p>
                    <button className="gryphon-button">MORE ABOUT US ↗</button>
                </div>
            </div>
        </section>
    );
};

export default AboutGryphon;
