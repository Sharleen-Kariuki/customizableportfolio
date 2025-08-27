import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-contact">
        <h1>Let's talk</h1>
        <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
        <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>greatstackdev@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>The Parklands</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon} alt="" />
            <p>0723413013</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Copyright</p>
        <div className="footer-bottom-right">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer