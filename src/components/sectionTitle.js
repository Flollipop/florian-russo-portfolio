import React from "react"
import PropTypes from "prop-types"

export function SectionTitle({ title }) {
  return (
    <div className="max-w-7xl w-full flex self-center">
      <h3 className="text-xl font-bold text-gray-800 px-6 py-4">{title}</h3>
    </div>
  )
}

SectionTitle.prototype = {
  title: PropTypes.string.isRequired,
}
