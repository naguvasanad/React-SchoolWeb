import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Contact from './Contact';
import About from './About';
import Nopage from './Nopage';
import Service from './Service';


const Menu = () => {
  return (
    <div>
        <Layout/>
      
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route index element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='*' element={<Nopage/>}/>
   </Routes>
  
    </div>
  )
}

export default Menu
