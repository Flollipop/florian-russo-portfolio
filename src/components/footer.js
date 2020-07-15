import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Profiles from "./profiles"

const Footer = ({ name, profiles }) => (
  <footer className="w-full flex flex-col bg-gray-900 text-center text-white py-8">
    <p>
      made by <span className="font-semibold text-blue-400">{name}</span> ©{" "}
      {new Date().getFullYear()}, Built with
      {` `}
      <OutboundLink
        className="text-purple-500"
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Gatsby
      </OutboundLink>
    </p>
    <Profiles profiles={profiles} />
  </footer>
)

Footer.prototype = {
  name: PropTypes.string.isRequired,
}

export default Footer
