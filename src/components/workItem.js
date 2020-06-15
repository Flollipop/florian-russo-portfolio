import PropTypes from "prop-types"
import React from "react"

export const WorkItem = ({ company }) => <p>{company}</p>

WorkItem.propTypes = {
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
}
