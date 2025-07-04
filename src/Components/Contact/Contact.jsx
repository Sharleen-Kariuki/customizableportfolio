import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e996af56-fbbd-406e-94b0-a442b3434a");

    const response = await fetch("https://api.web3forms.com/submit", {
      mode: 'no-cors',
        method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        alert("Form Submitted Successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
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
            <form onSubmit={onSubmit} className='contact-right'>
                <input type="hidden" name="access_key" value="e996af56-fbbd-406e-94b0-a442b3434a"></input>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>   
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
             <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
