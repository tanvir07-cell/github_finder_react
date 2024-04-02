import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Header/Footer'
import Main from './components/Header/Main'
import {Routes,Route} from "react-router-dom"
import About from './pages/About'


const App = () => {
  return (
    <div className='text-cranberry-50'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path = "/about" element={<About/>}/>


      </Routes>
      <Footer/>
    </div>

  )
}

export default App