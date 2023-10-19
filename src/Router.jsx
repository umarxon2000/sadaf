import React from 'react'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element:<Home />
        },
        {
          path: "/about",
          element:<About />
      },
        
      
      
    ])
  return (
    <div className='router'>
      <Navbar />
    <RouterProvider router={router} />
    <Footer />

</div>
  )
}

export default Router
