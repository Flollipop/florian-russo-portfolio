import React from "react"
import PropTypes from "prop-types"

const Developer = ({ name }) => <p>{name}</p>

Developer.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Developer
