import * as React from "react"

import {Link} from 'react-router-dom'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import BackgroundVideo from "../components/background-video"

const SplashPage = () => {
  return (
    <BackgroundVideo
      siteContent={<div className="flex flex-col">
          <span className="text-white text-8xl font-nav-title flex justify-center">
            Cameron Mckiddie
          </span>
          <span className="text-white text-center font-body text-xl flex justify-center py-10">
            A modern creative driven by
            <br />
            modern web technology
          </span>

          <div className="text-lg lg:flex-grow uppercase flex justify-center">
            <Link
              to={`/profile`}
              className="block mt-4 mx-5 text-white font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
            >
              Profile
            </Link>
            <Link
              to={`/experience`}
              className="block mt-4 mx-5 text-white font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
            >
              Experience
            </Link>
            <Link
              to={`/projects`}
              className="block mt-4 mx-5 text-white font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
            >
              Projects
            </Link>
            <span
              to={`/contact`}
              className="block mt-4 mx-5 text-white font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
            >
              Contact
            </span>
          </div>
          <span className="flex flex-row justify-center items-center p-6 mb-6">
            <FontAwesomeIcon
              className="mx-4"
              icon={faGithubSquare}
              size="3x"
              color="white"
            />
            <FontAwesomeIcon
              className="mx-4"
              icon={faLinkedin}
              size="3x"
              color="white"
            />
            <FontAwesomeIcon
              className="mx-4"
              icon={faTwitterSquare}
              size="3x"
              color="white"
            />
          </span>
        </div>}
    />  
  )
}

export default SplashPage