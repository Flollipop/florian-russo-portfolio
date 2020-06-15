import React from "react"
import PropTypes from "prop-types"

const Developer = ({ label, headline, name }) => (
  <>
    <p>{name}</p>
    <p>{headline}</p>
    <p>{label}</p>
  </>
)

Developer.propTypes = {
  label: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Developer
