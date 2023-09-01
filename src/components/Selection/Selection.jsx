import React from 'react'
import './Selection.css'

function Selection() {
  return (
    <div className='main-selection-container'>
        <div className='selection-container-box'>
          <div className="selection-item">
            <h2>Best selection</h2>
            <p>Best selection of student accommodations. 
              Never been easier to find a home that's right for you.
            </p>
          </div>
          <div className="selection-item">
          <h2>Your favorite</h2>
          <p>Shortlist your favourite properties 
            and send enquiries in one click.
          </p>
          </div>
          <div className='selection-item'>
            <button>Search & Compare</button>
          </div>
        </div>
        
    </div>
  )
}

export default Selection