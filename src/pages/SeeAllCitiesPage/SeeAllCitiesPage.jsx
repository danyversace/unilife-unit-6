import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import './SeeAllCitiesPage.css'
import Slider from '../../components/Slider/Slider'


import axios from 'axios'

function SeeAllCitiesPage() {

    const [citie, getAllCities] = useState([])


    useEffect(
        ()=> {
            axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
            .then(res=>{
               // console.log(res.data.response)

                getAllCities(res.data.response)
            })
            .catch(err=>console.log(err))
        }, []
    )


  return (
    <div className='main-cities-container'>
        <Slider headLine1="Student Accomodation" textLine1="UniLife have student 
        accommodation available across the UK.
Whatever you're after, we can help you find the right student accommodation for you. "/>

<h1 className='cities-heading'>Search by City</h1>
            <div className='cities-item'>
                
                {
                    citie.map((item,index)=> <Link key={item?._id} to={`/citydetails/${item?._id}`} ><button className='citie-btn'>{item.name}</button></Link> )
                }
            </div>
    </div>
  )
}

export default SeeAllCitiesPage