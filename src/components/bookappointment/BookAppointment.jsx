import React, { useState } from 'react'
import './BookAppointment.css'
import FormDropdown from '../formDropdown/FormDropdown'

function BookAppointment() {
  return (
    <div className='book_appointment_page'>
      <div className="book_appointment_container">
        <div className="book_appointment_form_container">
          <div className="book_appoinment_title_container">
            <h2>Write To Our</h2>
            <h1>Dental Office</h1>
          </div>
          <p>Contact our office and we will contact you back regarding the intervention you require.</p>
          <form>
            <div className="book_appoinment_form_input_container">
              <label>Your name</label>
              <input type="text" />
            </div>
            <div className="book_appoinment_form_input_container">
              <label>Your Email Address</label>
              <input type="email" />
            </div>
            <div className="book_appoinment_form_input_container">
              <label>Choose your Dentist</label>
              {/* <div className='book_appoinment_button_accordion'>Select Dentst here</div> */}
              <FormDropdown/>
            </div>
            <div className="book_appoinment_form_input_container">
              <label>Appointment date</label>
              <input type="datetime-local" />
            </div>
            <button type='submit'>Book Appoinment Now</button>
          </form>
        </div>
        <div className="book_appointment_img_container">
          <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/portfolio_05.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BookAppointment
