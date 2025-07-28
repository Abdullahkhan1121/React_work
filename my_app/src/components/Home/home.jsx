import React from 'react'
import './home.css'


const Home = ({games}) => {
  return (
    <div className="home">
      <h2 className="home-title">Featured Games</h2>
      <div className="card-row">
        {games.map((game) => (
          <div key={game.id} className="product-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Rs. {game.price.toLocaleString()}</p>
    <button className="btn btn-sm btn-outline-primary me-2">Details</button>
    <button className="btn btn-sm btn-outline-success">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
