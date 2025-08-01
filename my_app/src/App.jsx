import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Carousel from './components/Carousel/carousel'
import Hero from './components/Hero/hero'
import States from './components/LearningStates/States'

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

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Carousel/>
        <Hero title="Playstion 5 Pro" banner="ps5-banner.jpg" desc="The PlayStation 5 Pro is an enhanced version of Sony’s PS5 console, designed for gamers who want even better performance. It offers improved graphics with support for 4K at higher frame rates, faster loading times thanks to upgraded hardware, and potentially more storage. The PS5 Pro is built to handle demanding next-gen games with smoother visuals and a more immersive gaming experience."/>
        <Home games={games} />
        <Hero title="Xbox Series X" banner="xbox-banner.jpeg" desc="The Xbox Series X is Microsoft’s most powerful gaming console, delivering stunning 4K gaming at up to 120 frames per second. With its custom SSD, it offers ultra-fast load times and seamless gameplay. Featuring 1TB of storage, ray tracing support, and backward compatibility with thousands of Xbox titles, the Series X is built for serious gamers who want top-tier performance and visuals."/>
      </main>
      
      <Footer />
      {/* <States/> */}

    </>
  )
}


export default App
