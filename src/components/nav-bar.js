import PropTypes from "prop-types"
import React, { useState } from "react"
import {Link} from 'react-router-dom'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex flex-col items-center justify-between p-6 mb-6">
      <div className="flex items-center flex-shrink-0 mr-6 mb-6 text-black ">
        <Link 
          to="/"
          className="text-5xl font-nav-title tracking-tight">
          {siteTitle}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-black border border-black rounded hover:text-black hover:border-black"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
      {/* This is the header Selections */}
        <div className="text-lg lg:flex-grow uppercase">
        <Link
            to={"/profile"}
            className="block mt-4 mx-5 text-nav-main font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
          >
            Profile
          </Link>
          <Link
            to={"/experience"}
            className="block mt-4 mx-5 text-nav-main font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
          >
            Experience
          </Link>
          <Link
            to={"/projects"}
            className="block mt-4 mx-5 text-nav-main font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
          >
            Projects
          </Link>
          <span
            to={`/contact`}
            className="block mt-4 mx-5 text-nav-main font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cameron Mckiddie`,
}

export default Header
