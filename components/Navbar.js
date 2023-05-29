import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <React.Fragment>
        <header className="w-full border-b bg-white pb-4 sticky top-0 z-50">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
    <div className="inline-flex items-center space-x-2">
      <span></span>
      <span className="font-bold">LTB</span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <Link
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Legal Solutions
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Repository
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
      {/* <button
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button> */}
    </div>
    <div className="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1={4} y1={12} x2={20} y2={12} />
        <line x1={4} y1={6} x2={20} y2={6} />
        <line x1={4} y1={18} x2={20} y2={18} />
      </svg>
    </div>
  </div>
</header>

    </React.Fragment>
  )
}

export default Navbar