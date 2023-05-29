import React from 'react'
import Link from 'next/link'
const last = () => {
  return (
    <React.Fragment>
         <div className="mx-auto my-3 max-w-7xl px-2 lg:px-8">
  <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
        <svg
          className="h-9 w-9 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black">
      Creative approach

      </h3>
      <p className="mt-4 text-sm text-gray-600">
      We work with clients to find the best solutions to their issues

      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
        <svg
          className="h-9 w-9 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black">Client-oriented</h3>
      <p className="mt-4 text-sm text-gray-600">
      It is very important to satisfy our clients and meet their needs

      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-9 w-9 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black">
      Planning

      </h3>
      <p className="mt-4 text-sm text-gray-600">
      We provide a coherent delivery plan with steps for each client

      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
        <svg
          className="h-9 w-9 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      </div>
      <h3 className="mt-8 text-lg font-semibold text-black">
      Affordable prices

      </h3>
      <p className="mt-4 text-sm text-gray-600">
      Our services are affordable and we provide flexible pricing


      </p>
    </div>
  </div>
</div>





<div className="max-w-2xl px-8 mt-10 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
  <div className="flex items-center justify-between">
    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
    LTB
    </span>
    <a
      className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
      tabIndex={0}
      role="button"
    >
     AboutUs
    </a>
  </div>
  <div className="mt-2">
    <Link
      href="/contact"
      className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
      tabIndex={0}
      role="link"
    >
     Ready to take your next step?
    </Link>
    <p className="mt-2 text-gray-600 dark:text-gray-300">
    Explore how The Legal Base can help you scale your business and improve your staff’s efficiency with our tailored outsourcing solutions.

    </p>
  </div>
  <div className="flex items-center justify-between mt-4">
    <Link
      href="/contact"
      className="text-blue-600 dark:text-blue-400 hover:underline"
      tabIndex={0}
      role="link"
    >
      ContactUs
    </Link>
    <div className="flex items-center">
     
    </div>
  </div>
</div>

    </React.Fragment>
  )
}

export default last