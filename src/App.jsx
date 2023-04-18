import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs/Index'
import AboutUs from './pages/AboutUs/Index'
import Home from './pages/Home/Index'
import RickAndMorty from './pages/RickAndMorty/Index'

export default function App() {
  return (
    <>
      <BrowserRouter>
      {/* <TopMenu/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/RickAndMorty' element={<RickAndMorty/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
