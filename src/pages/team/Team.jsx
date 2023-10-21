import React from 'react'
import SadafOwner from '../../components/sadafowner/SadafOwner'
import PersentageCard from '../../components/persentagecard/PersentageCard'
import BookAppointment from '../../components/bookappointment/BookAppointment'
import Contact from '../../components/contact/Contact'
import Location from '../../components/location/Location'


function Team() {
  return (
    <div >
      <SadafOwner />
      <PersentageCard />
      <BookAppointment />
      <Contact />
      <Location />
    </div>
  )
}

export default Team
