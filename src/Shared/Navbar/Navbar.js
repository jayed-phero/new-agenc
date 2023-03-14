import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MoreButton from '../../components/MoreButton';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <nav class="relative bg-white shadow dark:bg-gray-800">
                <div class="max-w-7xl xl:px-0 px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
                    <div class="flex items-center justify-between">
                        <a href="#">
                            <h3 className='text-3xl md:text-5xl font-semibold'>BrandName</h3>
                        </a>

                        {/* <!-- Mobile menu button --> */}
                        <div class="flex lg:hidden">
                            <button onClick={() => setOpen(!isOpen)} type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {
                                    isOpen ?
                                        <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        :
                                        <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                        </svg>

                                }

                            </button>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                    <div class={`absolute text-xl font-semibold inset-x-0 z-20 w-full px-6 py-11 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                        <div class="flex flex-col md:flex-row md:mx-6">
                            <Link class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to='/'>Home</Link>
                            <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#services">Services</a>
                            <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#contact">Contact</a>
                            <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#about">About</a>
                            <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#portfolio">Portfolio</a>
                            <a class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#team">Team</a>
                        </div>

                        <div className='lg:hidden mt-5'>
                            <MoreButton title={"Contact Us"} link={'contact'}/>
                        </div>
                    </div>
                    <div className='hidden lg:block '>
                        <MoreButton title={"Contact Us"} link={'contact'}/>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;