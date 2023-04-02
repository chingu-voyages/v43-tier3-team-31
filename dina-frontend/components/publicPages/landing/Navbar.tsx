import Image from 'next/image';
import React from 'react'
import Logo from '../../../public/logo.png';

const Navbar = () => {
    return (
        <nav className="flex px-16 py-6 items-center">
            <div className='flex items-center'>
                <Image className='inline-block ml-2 w-12 h-12 mr-2' src={Logo} alt='DiNA' width="50" height="50"></Image>
                <span className='text-lg font-bold text-gray-700'>DiNA</span>
            </div>
            <div className='ml-4 flex-1'>
                <form className="flex w-96 items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for food..." required />
                    </div>
                </form>
            </div>

            <ul className='flex gap-3 items-center'>
                <li>
                    Login
                </li>
                <li>About</li>
                <li>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar