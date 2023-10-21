import React from 'react'
import './Home.css'
import Booking from '../../components/booking/Booking'
import Carousel from '../../components/carousel/Carousel'
import Services from '../../components/services/Services'
import PersentageCard from '../../components/persentagecard/PersentageCard'
import BookAppointment from '../../components/bookappointment/BookAppointment'
import Solution from '../../components/solution/Solution'
import  Location  from '../../components/location/Location'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
     <Carousel />
     <Booking />
     <Services />
     <PersentageCard />
     <BookAppointment />
     <Solution />
     <Location />
    </div>
  )
}

export default Home
