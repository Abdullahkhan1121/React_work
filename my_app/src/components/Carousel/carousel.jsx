import React from 'react'
import c_image_1 from '../../assets/carousel-img-1.jpg'
import c_image_2 from '../../assets/carousel-img-2.jpg'
import c_image_3 from '../../assets/carousel-img-3.webp'


const Carousel = () => {
  return (
    <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c_image_1} className="d-block w-100" alt="..." height={600} />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='bg-success'>Huge Library of Preowmed Games.</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c_image_2} className="d-block w-100" alt="..." height={600} />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='bg-success'>Latest Xbox CDs availible for best price.</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c_image_3} className="d-block w-100" alt="..." height={600} />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='bg-success'>Latest Xbox CDs availible for best price.</h5>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel
