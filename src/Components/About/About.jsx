import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/portfolio_img.jpeg'

const About = () => {
  return (
    <div id = "about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Jefferson Waithaka is an Advocate of the High Court of Kenya with expertise in Conveyancing and Real Estate Transactions, Commercial Law, Banking, Data Protection Laws, and Cybersecurity Laws. He has advised individuals, corporations, and institutions on complex legal matters, consistently delivering practical and strategic solutions.</p>
                <p>With a background in real estate, banking, and commercial transactions, he combines legal knowledge with business insight to safeguard client interests. His experience enables him to handle both routine and complex matters with precision and efficiency.</p>
                <p>Known for his professionalism, integrity, and results-driven approach, Jefferson is committed to providing dependable legal support that empowers clients to make informed decisions with confidence.</p>
            </div>
           
          
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement"> 
            <h1>2+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
         <div className="about-achievement"> 
            <h1>5+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
         <div className="about-achievement"> 
            <h1>15+</h1>
            <p>Happy Clients</p> 
            </div>
      </div>
    </div>
  )
}

export default About
