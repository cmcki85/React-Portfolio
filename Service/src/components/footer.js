import React from "react"

import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-1/4 md:w-1/3" />
        <hr className="w-2/4 md:w-1/3 " />
        <div className="w-1/4 md:w-1/3" />
      </div>

      <footer className="flex flex-row justify-center items-center p-6 mb-6">
        <a href="https://github.com/cmcki85">
          <FontAwesomeIcon
            className="mx-4"
            icon={faGithubSquare}
            size="3x"
            color="#5A798C"
          />
        </a>
        <a href="https://www.linkedin.com/in/cameron-mckiddie-4ba196175/">
          <FontAwesomeIcon
            className="mx-4"
            icon={faLinkedin}
            size="3x"
            color="#5A798C"
          />
        </a>
        <a href="https://twitter.com/MckiddieCameron">
          <FontAwesomeIcon
            className="mx-4"
            icon={faTwitterSquare}
            size="3x"
            color="#5A798C"
          />
        </a>
        
      </footer>
    </div>
  )
}

export default Footer