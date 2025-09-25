import React from 'react'

export default function Footer() {
  return (
    <div className='dark'>
      

<footer className="bg-white rounded-lg shadow-sm dark:bg-gray-800 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Keep Contact</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 . All Rights Reserved.</span>

                </li>
                
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
    </div>
</footer>


    </div>
  )
}
