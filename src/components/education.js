import React from "react"
import PropTypes from "prop-types"
import { SchoolItem } from "./schoolItem"

const Education = ({ education }) => (
  <>
    {education.map(school => (
      <SchoolItem {...school} key={school.institution + school.startDate} />
    ))}
  </>
)

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default Education
