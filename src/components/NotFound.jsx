import React from 'react'
import NOTFOUND from "../assets/404-fem.jpg"
import ASTRONY from "../assets/error-astrony.png"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const NotFound = () => {
  return (
  <div className="hero min-h-screen" style={{
    backgroundImage: `url(${NOTFOUND})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  
  }}>

  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
      <div className='mx-40 mb-40'>
              <h1 className="mb-5 text-5xl font-bold">OOPS 404!</h1>
     
             <Link to="/" className="btn btn-primary">Go Home</Link>

        </div>
    <div className="max-w-md sm:grid sm:grid-cols-1 hidden">
      

        <div>
            <motion.img src={ASTRONY} alt="" 
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className=' animate-pulse'
            


             


            />
        </div>
    
    </div>
  </div>
</div>
  )
}

export default NotFound
