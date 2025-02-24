import React from 'react'
import "./blogScreen.css"
import Marquee from "react-fast-marquee";

const BlogScreen = () => {
    const blogs = [
        {
            category: "Web Development",
            title: "MASTERING THE ART OF RESPONSIVE WEB DESIGN",
            image: "https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/678139815749a4c87323dff1_blog-img-01.png",
        },
        {
            category: "No Code Development",
            title: "NO-CODE DEVELOPMENT SIMPLIFY, BUILD, LAUNCH",
            image: "https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67812e7b697287ca9a234b33_blog-img-02.png",
        },
        {
            category: "UI / UX Design",
            title: "BOOSTING ENGAGEMENT WITH SMART UX DESIGN",
            image: "https://cdn.prod.website-files.com/677faa5aee8ef72f2cbe14d6/67812f8e030cff0c0237ab2d_blog-img-03.png",
        },
    ];
    return (
        <section className="gryphon-about-section ">
            <div className='perf-sec'>
                <div className='performance-head'>
                    <div className="marquee-width">
                        <Marquee speed={30}>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Latest Blog</h3>
                            </div>
                            <div className="gryphon-about-header">
                                <span className="gryphon-dot"></span>
                                <h3 className="gryphon-about-heading">Latest Blog</h3>
                            </div>
                        </Marquee>
                    </div>

                    <div className='perfamance-title'>
                        Our Blog Insights
                    </div>
                </div>
            </div>
            <div className="blog-container">
                {blogs.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <div className="blog-content">
                            <p className="blog-category">• {blog.category}</p>
                            <h3 className="blog-title">{blog.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default BlogScreen
