import React from "react"
import PropTypes from "prop-types"
import Profiles from "./profiles"

const Footer = ({ name, profiles }) => (
  <footer className="w-full flex flex-col bg-gray-900 text-center text-white py-8">
    <p>
      made by {name} © {new Date().getFullYear()}, Built with
      {` `}
      <a
        className="text-purple-500"
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Gatsby
      </a>
    </p>
    <Profiles profiles={profiles} />
  </footer>
)

Footer.prototype = {
  name: PropTypes.string.isRequired,
}

export default Footer
