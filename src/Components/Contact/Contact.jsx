import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        
        // Web3Forms access key for JJWaithakalaw@gmail.com
        formData.append("access_key", "be4f913a-dba2-496e-93b8-d57f4b5779c3");
        
        // Add additional fields for better email organization
        formData.append("subject", "New Contact Form Submission from Portfolio");
        formData.append("from_name", formData.get("name"));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✅ Message sent successfully! I'll get back to you soon.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("❌ Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("❌ Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
            // Clear the result message after 5 seconds
            setTimeout(() => setResult(""), 5000);
        }
    };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            {/* <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>JJWaithakalaw@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                       <img src={location_icon} alt="" /> 
                       <p>Ruiru, Kiambu County</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>0717254878</p>
                        
                    </div>
                </div>
            </div> */}
            <form onSubmit={onSubmit} className='contact-right'>
                <input type="hidden" name="access_key" value="be4f913a-dba2-496e-93b8-d57f4b5779c3" />
                
                <label htmlFor="name">Your Name *</label>
                <input 
                    type="text" 
                    placeholder='Enter your name' 
                    name='name' 
                    id='name'
                    required 
                />
                
                <label htmlFor="email">Your Email *</label>
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    name='email' 
                    id='email'
                    required 
                />
                
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input 
                    type="tel" 
                    placeholder='Enter your phone number' 
                    name='phone' 
                    id='phone'
                />
                
                <label htmlFor="message">Your Message *</label>
                <textarea 
                    name="message" 
                    id="message"
                    rows="4" 
                    placeholder='Enter your message'
                    required
                ></textarea>   
                
                <button 
                    type='submit' 
                    className="contact-submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Submit now'}
                </button>
                
                {result && (
                    <div className={`result-message ${result.includes('✅') ? 'success' : 'error'}`}>
                        {result}
                    </div>
                )}
            </form>
        </div>
    </div>
  )
}

export default Contact
