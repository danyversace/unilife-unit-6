import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import './CityDetailsPage.css'
import Slider from '../../components/Slider/Slider'
import HomeCard from '../../components/HomeCard/HomeCard'

import axios from 'axios'





function CityDetailsPage() {


    // extract city id from url
    const { cityId } = useParams()


    const [cityDetails, setCityDetails] = useState('')
    const [properties, setProperties] = useState([])

    const [cityInfo, getCityInfo] = useState([])

    // const [cityProperties, setCityProperties] =useState()


    const [propCount, setPropCount] = useState(0)

    const [bedroom, setBedroom] = useState('')

    // state variable useState({...query})
    const [bathroom, setBathroom] = useState('')

    const [price, setPrice] = useState('')

    const [propType, setPropType] = useState('')

    const bedNums = [1,2,3,4,5,6]

    const bathNums = [1,2,3]

    const prices = [500, 1000, 1500, 2000, 10000]

    const propTypes = ['Detached', 'Apartment','Semi-Detached']






    useEffect(
        ()=> {
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
            .then(res=>{


                console.log(res)
                setCityDetails(res.data)
                setProperties(res.data.response)
            })
            .catch(err=>console.log(err))
        }, [] 
    )

    useEffect(
        ()=> {
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then((res)=>{
                // console.log(res.data.data)

                // set index to 0 to get info for the city in array
                getCityInfo(res.data.data[0])
            })
            .catch(err=>console.log(err))
        },[]
    )

    useEffect(
        ()=>{
            const query={
                city_id: cityId, 
                bedroom_count:bedroom,
                bathroom_count:bathroom,
                rent:price,
                property_type:propType 
              }
              console.log('its running')
              axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
              .then(res=>{
                  console.log(res.data.response)
                  setProperties(res.data.response)
                  setPropCount(res.data.count)
              })
              .catch(err=>console.log(err))
        },[bedroom, bathroom, price, propType]
    )

    const filterProperties=()=>{
        const query={
          city_id: cityId,
          bedroom_count:bedroom,
          bathroom_count:bathroom,
          rent:price,
          property_type:propType 
        }
  
        axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
        .then(res=>{
            console.log(res.data.response)
        })
        .catch(err=>console.log(err))
   }



 


  return (
    <div className='city-details-page-container'>
        <Slider headLine2="Search Accomodation" 
        textLine2="Whatever you're after, we can help you find 
        the right student accommodation for you. "
        />
        <div className='city-details-page-container-filter'>
            <div className="city-details-page-container-filter-item">
                <h2>Min Bedroom</h2>
                <div className='container-filter-item-box'>
                    <select onChange={(e)=>setBedroom(e.target.value)} name="" id="" className='city-details-page-container-filter-select'>
                        <option value="">Any bedroom</option>
                        {
                        bedNums.map((num) =>
                         <option key={num} value={num}>
                            {num}
                            </option>
                             )
                        }
                    </select>
                </div>
            </div>
            <div className="city-details-page-container-filter-item">
                <h2>Min Bathroom</h2>
                <div>
                    <select onChange={(e) => setBathroom(e.target.value)} name="" id="" className='city-details-page-container-filter-select'>
                        <option value="">Any bathroom</option>
                        {
                            bathNums.map((num) => 
                                <option key={num} value={num}>
                                    {num}
                                </option>
                                )
                        }
                    </select>
                </div>
            </div>
            <div className="city-details-page-container-filter-item">
                <h2>Max Price</h2>
                <div>
                    <select onChange={(e) => setPrice(e.target.value)} name="Please select" id="" className='city-details-page-container-filter-select'>
                        <option value="">Any price</option>
                        {
                        prices.map((numbers) => 
                        <option key={numbers} value={numbers}>
                            {numbers === 10000 ?  '2500+' : numbers}
                        </option>)
                        }
                    </select>
                </div>
            </div>
            <div className="city-details-page-container-filter-item">
                <h2>Home Type</h2>
                <div>
                    <select onChange={(e) => setPropType(e.target.value)} name="" id="" className='city-details-page-container-filter-select'>
                        <option value="">Any type</option>
                        {
                        propTypes.map((type) => <option key={type} value={type}>{type}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
        <div className='city-details-page-item'>
           <h2>{propCount} Properties in {cityDetails.city_name}</h2>

           <div className='properties-container'>
                {
                    properties?.map((item) => <HomeCard key={item.id} property={item} cityId={cityId}/>)
                }
           </div>
        </div>
        <div className='city-container-bottom'>
            <div className='city-container-bottom-info'>
                <h3>Being a student in <em>{cityDetails.city_name}</em></h3>
                <p className=''>
                    {cityInfo?.student_life}
                </p>
                <p className=''>
                {cityInfo?.universities}
                </p>
            </div>
            <div className=''>
                <img src='/student-img.png' alt="" className='city-container-bottom-img'/>
            </div>
        </div>
    </div>
  )
}

export default CityDetailsPage



