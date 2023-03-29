import Head from "next/head";
import { Inter } from "next/font/google";
import Landing from "@/components/publicPages/landing";
import Navbar from "@/components/publicPages/landing/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Hero from '../public/Hero.jpg'
import Image from "next/image";

import Logo from '../public/logo.png'
export default function Home() {
  return (
    <>
      <nav className="flex px-16 py-4 items-center">
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
      <div className="bg-hero flex justify-center items-center flex-col gap-2 w-full h-[550px] ">
        <h1 className="text-[50px] font-bold text-white">Know ingredients in your food</h1>
        <p className="font-center text-white">Here at DiNA we focus on food transparency where everyone can discover what's in your food.</p>
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started &#8594;</button>
          <button type="button" className="text-white hover:text-blue-700 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-white">Learn now </button>
        </div>
      </div>

      <div className="px-16 py-16">
          <h1 className="text-3xl font-bold">Feature Post</h1>
      </div>
    </>
  );
}
