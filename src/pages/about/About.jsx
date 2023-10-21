import React from 'react'
import AboutInfo from '../../components/aboutinfo/AboutInfo'
import Services from '../../components/services/Services'
import Result from '../../components/result/Result'
import CommentCarousel from '../../components/commentcarousel/CommentCarousel'
import BookAppointment from '../../components/bookappointment/BookAppointment'
import Location from '../../components/location/Location'

function About() {
  return (
    <div>
      <h1>fozilhonga general info </h1>
    <AboutInfo />
    <Services />
    <Result />
    <CommentCarousel />
    <BookAppointment />
    <Location />
    </div>
  )
}

export default About
