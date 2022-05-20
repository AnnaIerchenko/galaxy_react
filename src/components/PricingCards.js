import React from 'react'
import { Link } from 'react-router-dom'
import "./PricingCards.css"


const PricingCards = () => {
  return (
    <div className='pricing'>
      <div className="card-container">
        <div className="card">
          <h2>- Basic -</h2>
          <span className='bar'>-</span>
          <p className='btc'>1 BTC</p>
          <p>- 3days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className='btn'>Book</Link>
        </div>
        <div className="card">
          <h2>- Suite -</h2>
          <span className='bar'>-</span>
          <p className='btc'>1 BTC</p>
          <p>- 3days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className='btn'>Book</Link>
        </div>
        <div className="card">
          <h2>- Executive -</h2>
          <span className='bar'>-</span>
          <p className='btc'>1 BTC</p>
          <p>- 3days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/contact" className='btn'>Book</Link>
        </div>
      </div>
    </div>
  )
}

export default PricingCards