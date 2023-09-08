import React, {useEffect, useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'

import './HomeCard.css'

import { GiBed, GiBathtub, GiFamilyHouse, GiMushroomHouse } from "react-icons/gi";
import { BsCurrencyPound } from "react-icons/bs";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"


import axios from 'axios';

import { FavoritesContext } from '../../contexts/FavoritesContext';

function HomeCard({property}) {

    // get the global state
    //NOTE {} NOT []

    const {addProperty, favorites, removeProperty} = useContext(FavoritesContext)

    // const isFavorite = false
    // change to state in order to toggle it

    const [isFavorite, setIsFavorite] = useState(false)

    // how do we know  if this particular property is in favorites?

    useEffect(
        ()=>{
            // is property in favorites?
            setIsFavorite(favorites?.find(item=>item?._id===property?._id))

        },[favorites] // runs anytime favorites changes
    )


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
        {
          isFavorite?
          <AiFillHeart onClick={()=>removeProperty(property?._id)} className='heart-icon-home'/>
          :
          <AiOutlineHeart onClick={()=>addProperty(property)} className='heart-icon-home'/>
        }
      </div>
    </div>
  )
}

export default HomeCard

