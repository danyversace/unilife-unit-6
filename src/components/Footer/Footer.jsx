import React from 'react'
import './Footer.css'

import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

function Footer() {

  return (
    <div className='footer-container'>
        <div className='footer-container-top'>
            <div className='footer-container-top-item'>
            <h2>Keep in touch</h2>
            <p>
                Curious about new offerings? Sign up our
                weekly newsletter and stay informed.
            </p>
            <input type="email" placeholder='Your email' className='footer-container-top-item-input'/>
            </div>
            <div className='footer-container-top-item'>
                <h2>Let`s Socialize</h2>
                <div className='footer-container-top-item-box'>
                    <div className='footer-container-top-item-box-item'>
                    <CiFacebook />
                    <p>Facebook</p>
                    </div>
                    <div className='footer-container-top-item-box-item'>
                    <CiTwitter />
                    <p>Twitter</p>
                    </div>
                    <div className='footer-container-top-item-box-item'>
                    <CiInstagram />
                    <p>Instagram</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-container-bottom'>
            <div className="footer-container-bottom-item">
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy & Cookie Policies</p>
            </div>
            <div className="footer-container-bottom-item">
                <p>2022</p>
                <p>@ Unilife</p>
            </div>
        </div>

    </div>
  )
}

export default Footer