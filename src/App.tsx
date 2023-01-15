import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from "framer-motion"
import reactLogo from './assets/react.svg'
import { IoMoonOutline, IoSunnySharp } from "react-icons/io5"
import { MdPermCameraMic } from "react-icons/md";
import './App.css'
import { IconContext } from 'react-icons/lib'

import { TbAlien } from "react-icons/tb";

function App() {

  /**
   * Ref: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
   */

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(mode => !mode)
  }

  if (darkMode || localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    /**
     * ToDo: Move Nav to a seperate component
     */
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <span className='text-pink-600 mr-2 text-2xl'><TbAlien /></span>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
          <span className="sr-only">Logo</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            onClick={toggleMode}>
            <span className='text-lg'> {darkMode ? <IoSunnySharp/> : <IoMoonOutline/>}</span>
            <span className="sr-only">dark or light mode icon</span>
          </button>
          <button type="button" className="relative hidden md:block dark:text-gray-400 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100" onClick={toggleMode}>
              <span className='text-lg'> {darkMode ? <IoSunnySharp/> : <IoMoonOutline/>}</span>
              <span className="sr-only">dark or light mode icon</span>
          </button>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Downloads</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default App
