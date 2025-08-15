import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { Children } from 'react'

const UserLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default UserLayout
