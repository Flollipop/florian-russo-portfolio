import React from "react"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { handledNetworks, NetWorkIcon } from "./netWorkIcon"

/**
 * If the network is known by NetworkIcon return a clickable button to an external social media according to the url parameter
 * @param network the net work name
 * @param url url to a social media profile
 * @returns NetworkButton
 */
export const NetworkButton = ({ network, url }) => {
  if (handledNetworks.includes(network)) {
    return (
      <OutboundLink
        title={network}
        className="networkButton"
        href={url}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <NetWorkIcon network={network} />
      </OutboundLink>
    )
  }
  return null
}

NetworkButton.prototype = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
