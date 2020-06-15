import React from "react"
import PropTypes from "prop-types"

const Developer = ({ label, headline, name, picture, summary }) => (
  <>
    <img src={picture} alt="new" />
    <p>{name}</p>
    <p>{headline}</p>
    <p>{label}</p>
    <p>{summary}</p>
  </>
)

Developer.propTypes = {
  label: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Developer
