import React, {useEffect, useState} from 'react'
import './Homepage.css'
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import CityCard from '../../components/CityCard/CityCard'
import Compare from '../../components/Compare/Compare'
import Selection from '../../components/Selection/Selection'
import { Link } from 'react-router-dom'


function Homepage() {

const [cities, setCities] = useState([])

const [cityId, getCityId] = useState('')


useEffect(
    ()=>{
        axios('https://unilife-server.herokuapp.com/cities?limit=20')
        .then(res=>{
            console.log(res.data.response)

            setCities(res.data.response)
        })
        .catch(err=>console.log(err))
    }, []
)
//<div>
//{
//   cities.slice(0,10).map(item => <p>{item.name}</p>)
//}
//</div>


const selectFunction = (e) => {
    console.log('select', e.target.value)

    getCityId(e.target.value)
}

  return (
    <div className='homepage-container'>
        <Slider headLine="Find student homes with bills included" textLine="A simple and faster way to search for student accommodation"/>
            <div className='select-container'>
        <select onChange={selectFunction} required className='select-container-select'>
            <option value="disable selected" >Search by Cities...</option>
                {
                    cities.map(item=> <option className='select-container-options' value={item._id} key={item._id}>
                        {item.name}
                    </option>)
                }
        </select>

          <Link to={`/citydetails/${cityId}`}><button className='select-btn'>Find Homes</button></Link> 
         </div>

         <div className='cities-card-container'>
            <div className='cities-card-container-box'>
                {
                    cities.slice(0,9).map(item =><CityCard key={item.id} cities={item} />)
                }
            </div>
        </div>

        <Link to={`/cities/`}><button className='see-all-cities-button'>See All Cities</button></Link>
        <div className='compare-part'>
            <Compare />
        </div>
        <div className='selection-container'>
            <Selection />
            <img src='src\assets\phoneman.png' alt="" className='phone-man'/>
        </div>
    </div>
  )
}

export default Homepage