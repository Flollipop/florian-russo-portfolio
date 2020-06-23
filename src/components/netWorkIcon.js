import React from "react"
import PropTypes from "prop-types"
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa"

export const handledNetworks = [
  "Facebook",
  "GitHub",
  "LinkedIn",
  "Stack Overflow",
]

export const NetWorkIcon = ({ network }) => {
  switch (network) {
    case "Facebook":
      return <FaFacebook />
    case "GitHub":
      return <FaGithub />
    case "LinkedIn":
      return <FaLinkedinIn />
    case "Stack Overflow":
      return <FaStackOverflow />
    default:
      return null
  }
}

NetWorkIcon.prototype = {
  network: PropTypes.string.isRequired,
}
