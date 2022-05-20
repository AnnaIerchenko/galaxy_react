import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className='left'>
          <div className="location">
            <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem' }} />
            <div>
            <p>123 Acme str.</p>
            <h4>Houston, Tx</h4>
            </div>
          </div>
        <div className="phone">
          <h4><FaPhone  size={20} style={{color: '#fff', marginRight: '2rem' }}/>
           1 -800-123-1234
           </h4>
        </div>
        <div className="mail">
          <h4><FaMailBulk  size={20} style={{color: '#fff', marginRight: '2rem' }}/>
           trips@galaxy.com
           </h4>
        </div>
      </div>
      <div className='right'>
        <h4>
          About Company
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
           laborum ipsum delectus consequatur praesentium dignissimos 
           nulla? Magni esse maxime accusantium sint natus laudantium 
           perspiciatis voluptatum eaque repellat, 
           voluptate aliquid qui.
        </p>
        <div>
          <FaFacebook  size={30} style={{color: '#fff', marginRight: '1rem' }}/>
          <FaTwitter  size={30} style={{color: '#fff', marginRight: '1rem' }}/>
          <FaLinkedin  size={30} style={{color: '#fff', marginRight: '1rem' }}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer