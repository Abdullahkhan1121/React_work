import React from 'react'

const Hero = ({ title, banner, desc }) => {
  return (
    <div className="container my-5 text-white">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
        <img src={`/${banner}`} alt={title} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 col-md-6">
          <h2 className="mb-3">{title}</h2>
          <p className="mb-4">{desc}</p>
          <button className="btn btn-primary">Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
