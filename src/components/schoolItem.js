import PropTypes from "prop-types"
import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdSchool } from "react-icons/md"

export const SchoolItem = ({
  institution,
  startDate,
  endDate,
  description,
  studyType,
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={`${startDate} ${endDate}`}
    iconStyle={{ background: "rgb(70,151,233)", color: "#fff" }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">{institution}</h3>
    <h4 className="vertical-timeline-element-subtitle">{studyType}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
)

SchoolItem.propTypes = {
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
}
