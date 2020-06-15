import PropTypes from "prop-types"
import React from "react"

export const SchoolItem = ({ institution }) => <p>{institution}</p>

SchoolItem.propTypes = {
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
}
