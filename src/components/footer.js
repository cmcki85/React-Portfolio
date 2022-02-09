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
        <FontAwesomeIcon
          className="mx-4"
          icon={faGithubSquare}
          size="3x"
          color="#5A798C"
        />
        <FontAwesomeIcon
          className="mx-4"
          icon={faLinkedin}
          size="3x"
          color="#5A798C"
        />
        <FontAwesomeIcon
          className="mx-4"
          icon={faTwitterSquare}
          size="3x"
          color="#5A798C"
        />
      </footer>
    </div>
  )
}

export default Footer