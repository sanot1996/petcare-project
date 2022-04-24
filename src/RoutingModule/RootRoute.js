import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import LogIn from '../Authentication/LogIN/LogIn'
import Reg from '../Authentication/Registration/Reg'
import About from '../Component/AboutUs/About'
import Contact from '../Component/Help/Contact'

import Help from '../Component/Help/Help'
import TrackOrder from '../Component/Help/TrackOrder'
import Home from '../Component/Home/Home'
import PetProduct from '../Component/Pharmacy/PetProduct/PetProduct'
import PetSubProduct from '../Component/Pharmacy/PetSubProduct/PetSubProduct'
import PetShop from '../Component/Shop By Pet/PetShop/PetShop'
import PetSubShop from '../Component/Shop By Pet/PetSubShop/PetSubShop'
import Header from '../LayOut/Header'

import PNF from '../Component/Page not Found/PNF'
import ProtectedRoute from './ProtectedRoute'
import Footer from '../Footer/Footer'

export default function RootRoute() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="" element={<Home/>} />
           
            <Route path="about" element={<About/>} />
            <Route path="help" element={<Help/>} />
           <Route path="contact" element={<Contact/>} />
            <Route path="tracking" element={<TrackOrder/>} />
            
          {/* phermacy  */}
          <Route element={<ProtectedRoute/>} />
          <Route path="petproduct" element={<PetProduct/>}/>
          <Route path="petsubproduct/:prodname" element={<PetSubProduct/>} />
          {/* shop by pet  */}
          <Route path="petshop" element={<PetShop/>}/>
          <Route path="petSubShop/:petProdname" element={<PetSubShop/>}/>
          {/* Authentication  */}
          <Route path="registration" element={<Reg/>} />
          <Route path="login" element={<LogIn/>}/>
          <Route path="*" element={<PNF/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}
