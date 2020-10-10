import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar">
      
      <div className="element">
        <span className="title">
          Shortly
        </span>
      </div>

      <div className="element">
        <span className="option">
          Features
        </span>
      </div>

      <div className="element">
        <span className="option">
          Pricing
        </span>
      </div>

      <div className="element">
        <span className="option">
          Resources
        </span>
      </div>

      <div className="session-options">
        <button className="rounded">
          Sign Up
        </button>
      </div>

      <div className="element session-options">
        <span className="option">
          Login
        </span>
      </div>

    </div>
  )
}

export default Navbar
