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
    iconStyle={{ background: "rgb(144,205,244)", color: "#fff" }}
    icon={<MdSchool />}
  >
    <h4 className="vertical-timeline-element-title">{institution}</h4>
    <h5 className="vertical-timeline-element-subtitle">{studyType}</h5>
    <text className="vertical-timeline-element-body">{`${description}\n`}</text>
  </VerticalTimelineElement>
)

SchoolItem.propTypes = {
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  studyType: PropTypes.string.isRequired,
}
