import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact_page'>
      <h2><span>Contact</span>DentiCare</h2>
      <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</p>
      <div className="contact_card_container">
        <div className="contact_services_container">
          <div className="contact_services_img_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrK_pvHrzRtrQeqM2u0PQw0TtY9rpuFtgGqY8NQ_Hjh8YKTpXi" alt="" />
          </div>
          <div className="contact_services_text_container">
            <h2>Emergency Phone</h2>
            <span className='contact_services_text_span'>415-205-5550</span>
            <span>Call us Anytime 24/7</span>
          </div>
        </div>
        <div className="contact_services_container">
          <div className="contact_services_img_container">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8TJUw943t0WxkMoIm7FLGXx_SwFDFWuISFabZ-icIm3VtVxR_" alt="" />
          </div>
          <div className="contact_services_text_container">
            <h2>Address</h2>
            <span className='contact_services_text_span'>500 Linden Ave, South San Francisco ,</span>
            <span>CA 94080, United States</span>
          </div>
        </div>
        <div className="contact_services_container">
          <div className="contact_services_img_container">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR4SPX1WSpN9f84Roh14sc5EJ8LmTU76AtYpunnWT5r6uJPNBsa" alt="" />
          </div>
          <div className="contact_services_text_container">
            <h2>Book By Phone</h2>
            <span className='contact_services_text_span'>415-205-5550</span>
            <span>405-222-5551</span>
          </div>
        </div>
        <div className="contact_services_container contact_services_container_border_none ">
          <div className="contact_services_img_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafLQ2wW27YZjMjJ8iRIbvjdRU3BgUA3K5nFcTwyDMp6_wlws8" alt="" />
          </div>
          <div className="contact_services_text_container">
            <h2>Email Us</h2>
            <span className='contact_services_text_span'>office@denticare.com</span>
            <span>emergencies@denticare.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
