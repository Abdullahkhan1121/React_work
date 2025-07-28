import React from 'react'
import './home.css'

const games = [
  {
    id: 1,
    title: 'Call of Duty: Modern Warfare',
    price: 7999,
    image: 'https://m.media-amazon.com/images/M/MV5BODMyMjNjNjEtMDUxNy00YjM2LWI4ZGUtMWRmZDc4ZWI1MGE3XkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 2,
    title: 'Elden Ring',
    price: 8499,
    image: 'https://m.media-amazon.com/images/I/71GPiuyNtkL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    title: 'FIFA 23',
    price: 5999,
    image: 'https://m.media-amazon.com/images/M/MV5BZjU4NGI0ZWQtZjg4Yi00Y2ViLWFjOGItZTE1MGFmMzZjZDEyXkEyXkFqcGc@._V1_.jpg',
  },
  {
    id: 4,
    title: 'God of War: Ragnarok',
    price: 8999,
    image: 'https://www.vgstores.ng/wp-content/uploads/2022/11/God-of-War-Ragnarok-PS5-468x600-1.webp',
  },
  {
    id: 5,
    title: 'Sekiro : Shadows Die Twice',
    price: 7999,
    image: 'https://www.vgstores.ng/wp-content/uploads/2019/04/Sekiro-Shadows-Die-Twice-PS4-475x600-WEB.jpg',
  },
  {
    id: 6,
    title: 'Dark Souls',
    price: 8499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvWwEKFRAaWUdat7PjCwh2KLGa-_u3I1rhA&s',
  },
  {
    id: 7,
    title: 'Minecraft',
    price: 5999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Vm2VY9gUCmbnKGSAwXWlDlpmzDYFUFPviw&s',
  },
  {
    id: 8,
    title: 'God of War',
    price: 8999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hQYxdRhrtb0osB4-TImDtgyY2flrVA-JHg&s',
  },
]

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Featured Games</h2>
      <div className="card-row">
        {games.map((game) => (
          <div key={game.id} className="product-card">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Rs. {game.price.toLocaleString()}</p>
            <div className="row">
            <button className='btn btn-outline-primary'>Details</button><button className='btn btn-outline-success'>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
