import React, {useState, useEffect, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import './HomeDetailsPage.css'
import axios from 'axios'

import { AiOutlineHeart, AiOutlineDown, AiOutlineDoubleLeft, AiFillHeart } from "react-icons/ai"
import { BsCurrencyPound } from "react-icons/bs"
import { BiBed, BiBath, BiPound } from "react-icons/bi"


import Modal from 'react-modal';

import { FavoritesContext } from '../../contexts/FavoritesContext'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)"
    }
  };
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement(document.getElementById('root'));


export default function HomeDetailsPage() {

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
            setIsFavorite(favorites?.find(item=>item?._id===homeDetails?._id))

        },[favorites] // runs anytime favorites changes
    )

    const { homeId } = useParams()



    const [homeDetails, setHomeDetails] = useState([])
    const [images, getImages] = useState([])
    const [price, setHomePrice] =useState([])
    const [keyFeatures, setKeyFeatures] = useState([])

    useEffect(
        ()=>{
            axios(`https://unilife-server.herokuapp.com/properties/${homeId}`)
            .then(res=>{
                console.log(res.data)
               setHomeDetails(res.data)
               getImages(res.data.images)
               setHomePrice(res.data.bedroom_prices)
               setKeyFeatures(res.data.key_features)
               
            })
            .catch(err=>console.log(err))
        },[]
    )

    const changeImages = (index) => {
        let imgIndx = document.getElementById('imageIndex');
        imgIndx.setAttribute('src', images[index]);
    }

    const [isOpenModal, setIsOpenModal] = useState(false)

    

  return (
    <div className='home-details-container'>
        <div className='back-to-serach-container'>
        <AiOutlineDoubleLeft className='back-to-serach-img'/>
        <Link className='back-to-serach-link' to={`/citydetails/${homeDetails?.city_id?._id}`}><p>Back to search</p></Link>
        </div>
        <div className='home-details-container-top'>
            <div className='home-details-container-img'>
                <div className='big-image-container'>
                    <img id='imageIndex' src={images[0]} alt="" />
                </div>
                    <div className='small-images-container'>
                        <div className="small-img">
                            <img onClick={()=>changeImages(0)} src={images[0]} alt="home-room" />
                        </div>
                        <div className="small-img">
                            <img onClick={()=>changeImages(1)} src={images[1]} alt="home-room" />
                        </div>
                        <div className="small-img">
                            <img onClick={()=>changeImages(2)} src={images[2]} alt="home-room" />
                        </div>
                        <div className="small-img">
                            <img onClick={()=>changeImages(3)} src={images[3]} alt="home-room" />
                        </div>
                    </div>
            </div>
            <div className='home-info-container'>
                <div className='info-top'>
                    <p>{homeDetails?.address?.street}, {homeDetails?.address?.city}, {homeDetails?.address?.postcode}</p>
                </div>
                <div className='horisontal-line'></div>
                < div className='info-bottom-container'>
                    <div className='info-bottom-container-box-one'>
                        <div className="info-bottom-container-box-one-first">
                        <p>Bedrooms</p>
                        <p className='dark-blue-color'><BiBed /> {homeDetails?.bedroom_count}</p>
                        </div>
                        <div className="info-bottom-container-box-one-second">
                        <p>Bathrooms</p>
                        <p className='dark-blue-color'><BiBath /> {homeDetails?.bathroom_count}</p>                       
                        </div>
                        <div className="info-bottom-container-box-one-third">
                        <p>Property Type</p>
                        <p className='dark-blue-color'>{homeDetails?.property_type}</p>
                        </div>
                    </div>
                    <div className='info-bottom-container-box-two'>
                        <div className="info-bottom-container-box-two-first">
                            <p>Price</p>
                            <p className='dark-blue-color'><BiPound /> {homeDetails?.rent}</p>
                        </div>
                        <div className="info-bottom-container-box-two-second">
                            <p>Furnished type</p>
                            <p className='dark-blue-color'>{homeDetails?.furnished}</p>
                        </div>
                        <div className="info-bottom-container-box-two-third">
                            <p>Available from</p>
                            <p className='dark-blue-color'>{homeDetails?.availability}</p>
                        </div>
                    </div>
                </div>
                <div className='info-bottom-container-buttons'>
                    {
                        isFavorite?
                        <button><AiFillHeart onClick={()=>removeProperty(homeDetails?._id)} className='short-list-style' /> Shortlist</button>
                        :
                        <button><AiOutlineHeart onClick={()=>addProperty(homeDetails)} className='short-list-style' /> Shortlist</button>
                    }
                    <button className='info-bottom-book' onClick={()=>setIsOpenModal(true)}>Book Viewing</button>
                        <Modal
                            isOpen={isOpenModal}
                            onRequestClose={()=>setIsOpenModal(false)}
                            style={customStyles}
                            contentLabel="Modal"
                        >
                            <div className='modal-book'>
                                <div className='modal-container-top'>
                                <h2>Book a Viewing</h2>
                                <img src="/addhome.png" alt="" />
                                </div>
                                <div>
                                    <p>
                                    {homeDetails?.address?.street}, {homeDetails?.address?.city}
                                    </p>
                                    <p>
                                    {homeDetails?.address?.postcode} 
                                    </p>
                                </div>
                                <div className='form-container-buttom'>
                                    <form className='form-left-container'>
                                        <label for="fname">Name: </label> <br/><br />
                                        <input type="text" id="fname" placeholder='Enter your name'/><br /><br />
                                        <label for="number">Phone Number: </label><br /><br />
                                        <input type="number" id="lname" name="number" placeholder='Enter your phone number'/><br /><br />
                                        <label for="student">Are you a...</label><br /><br />
                                        <input type="text" id="lname" name="student" placeholder='Student'/>
                                    </form>
                                    <div className='form-right-container'>
                                        <h2>Message</h2>
                                        <textarea name="" id="" cols="30" rows="11"></textarea>
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                         </Modal>
                </div>
            </div>

        </div>
        <div className='home-details-container-middle'>
            <div className='home-details-container-middle-left'>
                <div className='home-details-container-description'>
                    <h2>Description</h2>
                    <p>{homeDetails?.property_description}</p>
                </div>               
            </div>
            <div className='home-details-container-middle-right'>
                <div className='home-details-container-prices'>
                    <h2>Bedroom Prices</h2>
                    <div className='home-details-container-bedroom'>
                        {
                            Object.values(price).map((item,index)=>

                                <div className='home-details-container-bedroom-prices'>
                                    <p>{`Bedroom ${index+1}`}</p>
                                    <p className='bedroom-price'><BsCurrencyPound/>{item}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div> 
            <div className='home-details-container-bottom'>
                <div className='home-details-container-bottom-key-features'>
                    <h2>Key Features</h2>
                    <div className='home-details-container-bottom-box'>
                        {
                            keyFeatures.map(item=><p><AiOutlineDown /> {item}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}
