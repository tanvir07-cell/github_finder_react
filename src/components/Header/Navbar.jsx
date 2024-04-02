import React from 'react';
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className='bg-cranberry-800 bg-opacity-50 backdrop-blur-lg backdrop-filter shadow-sm shadow-sinbad-200'>

            <div className="container mx-auto navbar  flex justify-between items-center px-10">
                <div className="navbar-start">



                    <div className="grid grid-cols-2  gap-36 sm:flex  sm:gap-0">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cranberry-400 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>

                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <div className='flex justify-center items-center gap-2 '>

                            <a className="text-xl"><FaGithub className='text-4xl' />
                            </a>
                            <span className='sm:text-2xl'>Github Finder</span>
                        </div>

                    </div>




                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-10 text-xl">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Navbar