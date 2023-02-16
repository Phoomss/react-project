import React from 'react'
import './pagecss/contact.css'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="container-contact">
      <div className="contact-box">
          <div className="left-contact" />
            <div className="right-contact">
              <h2>Contact Us</h2>
              <input type="text" className="field-contact" placeholder="Your Name" />
              <input type="text" className="field-contact" placeholder="Your Email" />
              <input type="text" className="field-contact" placeholder="Phone" />
              <textarea placeholder="Message" className="field-contact" defaultValue={""} />
              <button className="btn-contact" onClick={() => navigate("/")}>Send</button>
            </div>
      </div>
  </div>

  )
}

export default Contact