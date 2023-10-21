import React, { useState, useEffect } from 'react';
import './Result.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SlLike } from 'react-icons/sl'

function Result() {
  const INtervention = 97;
  const clientStatification = 99
  const happyWithStaff = 100
  const quickRecovery = 95



  return (
    <div className='result'>
      <div className="result_top">
        <h3>
          Our Dental Service</h3>
        <h1>In  Numbers</h1>
        <p>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing processes.</p>
      </div>
      <div className="circular_result">

        <div className="circular_item">
          <CircularProgressbarWithChildren value={clientStatification} strokeWidth={4} className='Rounded'>
          </CircularProgressbarWithChildren>

          <h1>{clientStatification} <strong>%</strong></h1>
          <h1>clientStatification</h1>
        </div>
        <div className="circular_item">
          <CircularProgressbarWithChildren value={INtervention} strokeWidth={4} className='Rounded'>
          </CircularProgressbarWithChildren>;
          <h1>{INtervention} <strong>%</strong></h1>
          <h1>INtervention</h1>
        </div>
        <div className="circular_item">
          <CircularProgressbarWithChildren value={happyWithStaff} strokeWidth={4} className='Rounded'>
          </CircularProgressbarWithChildren>;
          <h1>{happyWithStaff} <strong>%</strong></h1>
          <h1>happyWithStaff</h1>
        </div>
        <div className="circular_item">
          <CircularProgressbarWithChildren value={quickRecovery} strokeWidth={4} className='Rounded'>
          </CircularProgressbarWithChildren>;
          <h1>{quickRecovery} <strong>%</strong></h1>
          <h1>quickRecovery</h1>
        </div>
      </div>
    </div>
  )
}

export default Result
