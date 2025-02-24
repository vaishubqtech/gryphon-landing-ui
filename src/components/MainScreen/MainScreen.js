import React from "react";
import "./mainScreen.css";

const HomePage = () => {
  return (
    <div className="gryphon-homepage">
      <nav className="gryphon-navbar">
        <div className="gryphon-logo"> <span className="gryphon-icon">G</span> </div>
        <div className="gryphon-nav-buttons">
          <button className="gryphon-menu">MENU</button>
        </div>
      </nav>
      <div className="gryphon-content">
        <h1 className="gryphon-title">gryphon</h1>
        <p className="gryphon-subtitle">CREATIVE STUDIO</p>
      </div>
      <button className="gryphon-contact">GET IN TOUCH &rarr;</button>
    </div>
  );
};

export default HomePage;