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
            <Link
              to={`/contact`}
              className="block mt-4 mx-5 text-white font-body font-semibold lg:inline-block lg:mt-0 hover:text-nav-hover"
            >
              Contact
            </Link>
          </div>
          <span className="flex flex-row justify-center items-center p-6 mb-6">
            <a href="https://github.com/cmcki85">
            <FontAwesomeIcon
              className="mx-4"
              icon={faGithubSquare}
              size="3x"
              color="#ffffff"
            />
            </a>
            <a href="https://www.linkedin.com/in/cameron-mckiddie-4ba196175/">
              <FontAwesomeIcon
                className="mx-4"
                icon={faLinkedin}
                size="3x"
                color="#ffffff"
              />
            </a>
            <a href="https://twitter.com/MckiddieCameron">
              <FontAwesomeIcon
                className="mx-4"
                icon={faTwitterSquare}
                size="3x"
                color="#ffffff"
              />
            </a>
          </span>
        </div>}
    />  
  )
}

export default SplashPage