import React from 'react'
import './CityCard.css'

import { Link } from 'react-router-dom'

function CityCard({cities}) {
  return (
      <div className='city-card-container'>
        <Link to={`/citydetails/${cities?._id}`}><img src={cities.image_url} alt="" className='city-card-img'/></Link>
        <div className='city-container-info'>
          <h3>{cities.name}</h3>
          <p>{cities.property_count}Properties</p>
        </div>
      </div> 
  )
}

export default CityCard