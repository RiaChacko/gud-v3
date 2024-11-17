import React from 'react';
import "./ContactUs.css"
function ContactUs() {
    const email = "guduf@gmail.com";
    const subject = "Request a Design Team";
    const body = "Body of the email";
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    return (
      <a href={mailtoLink}>
        <button className='contact-btn'>Contact Us</button>
      </a>
    );
  }
  
  export default ContactUs;