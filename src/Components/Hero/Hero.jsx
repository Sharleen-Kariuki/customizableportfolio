import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <h1>
        <span>I am Jefferson Waithaka</span>
        <br />
        Advocate of the High Court of Kenya
      </h1>
      <p>Passionate about justice Law and Order</p>
      
      <div className="hero-action">
        <div className='hero-connect'>
          <AnchorLink  className='anchor-link' offset={50} href='#contact'>
          Connect with Me
          </AnchorLink>
          </div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
