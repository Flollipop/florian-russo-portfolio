import React from "react"
import PropTypes from "prop-types"
import { NetworkButton } from "./networkButton"

/**
 * Component displaying profiles buttons to external social media
 * @param profiles Array of social media profiles
 */
const Profiles = ({ profiles }) => (
  <div className="self-center flex flex-row text-gray-100 border-solid border-t-2 m-3">
    {profiles.map(profile => (
      <NetworkButton {...profile} key={profile.network} />
    ))}
  </div>
)

Profiles.defaultProps = {
  profiles: [],
}

Profiles.prototype = {
  profiles: PropTypes.arrayOf({
    url: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
  }),
}

export default Profiles
