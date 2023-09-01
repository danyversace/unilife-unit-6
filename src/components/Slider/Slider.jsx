import React from 'react'
import './Slider.css'

function Slider({headLine, textLine, headLine1, textLine1, headLine2, textLine2}) {
  return (
    <div className='slider-container'>
        <div className='slider-box'>
            <h1 className='slider-box-item h'>{headLine}</h1>
            <p className='slider-box-item p'>{textLine}</p>

            <h1 className='slider-box-item h'>{headLine1}</h1>
            <p className='slider-box-item p'>{textLine1}</p>

            <h1 className='slider-box-item h'>{headLine2}</h1>
            <p className='slider-box-item p'>{textLine2}</p>
        </div>
    </div>
  )
}

export default Slider