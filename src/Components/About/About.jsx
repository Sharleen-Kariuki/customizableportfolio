import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                <p>Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance:</p>
                <p>Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                 <div className="about-skill">
                    <p>ReactJs</p><hr style={{width:"70%"}}/>
                </div>
                 <div className="about-skill">
                    <p>Javascript</p><hr style={{width:"60%"}}/>
                </div>
                 <div className="about-skill">
                    <p>NextJs</p><hr style={{width:"50%"}}/>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement"> 
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
         <div className="about-achievement"> 
            <h1>90+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
         <div className="about-achievement"> 
            <h1>100+</h1>
            <p>Happy Clients</p> 
            </div>
      </div>
    </div>
  )
}

export default About
