import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      
      <div className="footer-contact">
        <h1>Let's talk</h1>
        <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
        
        <hr />
        
        <div className="contact-details">
          <div className="contact-row">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>JJWaithakalaw@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0717254878</p>
            </div>
            <div className="contact-detail">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077b5"/>
              </svg>
              <p>
                <a 
                  href="https://www.linkedin.com/in/jefferson-waithaka-056059180" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: '#d4d4d4', textDecoration: 'none'}}
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-address">
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nyongo Plaza, 2nd Floor, Room H8, Ruiru, Kiambu County</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>John Jefferson Waithaka</p>
      </div>
      
    </div>
  )
}

export default Footer
