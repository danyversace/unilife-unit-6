import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

import './HomeCard.css'

import { GiBed, GiBathtub, GiFamilyHouse, GiMushroomHouse } from "react-icons/gi";
import { BsCurrencyPound } from "react-icons/bs";


import axios from 'axios';

function HomeCard({property}) {


  const [homeInfo, getHomeInfo] = useState([])

  useEffect(
    ()=>{
      axios.get(`https://unilife-server.herokuapp.com/properties`)
      .then(res=>{
        console.log(res)
      })
      .catch(err=> console.log(err))
    },[]
  )



  return (
    <div className='home-card-container' key={property?._id}>
      <img src={property?.images[0]} alt=""  className='home-card-img'/>
      <div className='home-card-container-info'>
        <div className='home-info'>
          <div>
          <p>{property?.rent} <BsCurrencyPound /></p>
          <p className='bill-text'>pppw including bills</p>
            </div>    
          <div className='home-icons'>
            <GiBed />
            <p>{property?.bedroom_count}</p>
            <GiBathtub />
            <p>{property?.bathroom_count}</p>
          </div>
        </div>
      </div>
      <div className='home-card-details-container'>
        <div className='home-card-details-container-item'>
          <h4>{property?.property_type}</h4>
          <h4>{property?.furnished}</h4>
        </div>
          <div className='home-address-container'>
            <div className='home-address-container-info'>
              <GiFamilyHouse />
              <p>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</p>
            </div>
          </div>
      </div>
      <hr />
      <div className='home-card-container-bottom'>
        < GiMushroomHouse className='mushroom-home'/>
        <Link to={`/homedetails/${property?._id}`}  className='mushroom-home-link'>
        <p>View Home</p>
        </Link>
      </div>
    </div>
  )
}

export default HomeCard

