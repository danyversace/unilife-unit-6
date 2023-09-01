// rcfce
import React, {useState} from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

import { FaAirbnb } from "react-icons/fa"
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai"

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));


function Header() {

  //create state to control Modal

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='header-container'>
      <div className='header-item'>
      <Link to="/">< img src='/home.png' className='header-img home-img'/></Link>
      <h3 className='homepage-btn'>UniLife</h3>
      </div>
      <div className='header-item'>
        <AiOutlineHeart className='header-img'/>
          <Link to='/shortlist'  className='link-to'><h4 className='header-schort-list link-to'>Shortlist</h4></Link>
        <AiOutlineMail className='header-img '/>
        <h4 className='link-to' onClick={()=>setIsOpen(true)}>Contact Us</h4>
                    <Modal
                    isOpen={isOpen}
                    onRequestClose={()=>setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Contact Us Modal"
                  >
                      <div className='contact-us-top'>
                        <div className='contact-us-container'>
                        <h2>
                        Contact us
                        </h2>   
                        <p>
                          Feel free to contact us if you have any questions. 
                          Looking forward to hear from you.
                        </p>
                        </div>
                        <img src="/post.png" alt="" className='contact-us-img'/>
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

                  </Modal>
      </div>
    </div>
  )
}

export default Header