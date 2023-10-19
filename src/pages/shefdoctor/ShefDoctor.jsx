import React from 'react'
import ResultShef from '../../components/resultshef/ResultShef'
import BookAppointment from '../../components/bookappointment/BookAppointment'
import ShefBiography from '../../components/Shefbiography/ShefBiography'
import CommentCarousel from '../../components/commentcarousel/CommentCarousel'

function ShefDoctor() {
  return (
    <div>
      <h1>ShefDoctor</h1>
     {/* < ResultShef /> */}
       <BookAppointment />
       <ShefBiography />
       <CommentCarousel /> 
    </div>
  )
}

export default ShefDoctor
