import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Header/Footer'
import Main from './components/Header/Main'
import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import GithubProvider from './context/GithubProvider'


const App = () => {
  return (
    <div className='text-cranberry-50'>
      <Navbar />
      <GithubProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/about" element={<About />} />


        </Routes>
      </GithubProvider>

      <Footer />
    </div>

  )
}

export default App