import React from 'react'
import "./getInTouchScreen.css"


const GetInTouchScreen = () => {
  return (
    <div className="get-in-touch-container">
    <div className="floating-image1 left">
      <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67811a93a3b2340b2adb86e5_cta-img-03.avif" alt="Laptop" />
    </div>
    <div className="main-image">
      <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/678119d4403b928439f2b997_cta-img-01.avif" alt="Futuristic Person" />
    </div>
    <div className="floating-image2 right">
      <img src="https://cdn.prod.website-files.com/674d642066f1a19abb9e6dfb/67811ad045ba2ada3f44475d_cta-img-02.avif" alt="Coffee Cup" />
    </div>
    <h1 className='g-i-t-h1'>LET’S WORK TOGETHER</h1>
    <button className="cta-button">GET IN TOUCH →</button>
  </div>
  )
}

export default GetInTouchScreen
