import React from 'react'
import './Compare.css'

function Compare() {
  return (
    <div className='just-div'>  
    <h2>Compare all inclusive student homes.</h2>
      <div className='compare-container'>
        <div className="compare-info-box">
            <img src='/vector.png' alt="" className='compare-info-box-img'/>
            <h3>Search</h3>
            <p>Find your dream home in the 
            perfect area near your university.
            </p>
        </div>
        <div className="compare-info-box">
            <img src='/rule.png' alt="" className='compare-info-box-img'/>
            <h3>Compare</h3>
            <p>Compare student accommodation to 
               find the right home for you.
            </p>
        </div>
        <div className="compare-info-box">
            <img src='/bill.png' alt="" className='compare-info-box-img'/>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. 
               No hidden fees.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Compare