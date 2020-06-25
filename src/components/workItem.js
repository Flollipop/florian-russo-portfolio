import PropTypes from "prop-types"
import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdWork, MdLocationOn } from "react-icons/md"
import { formatDatesToDisplay } from "../utils/date"

export const WorkItem = ({
  company,
  position,
  location,
  summary,
  startDate,
  endDate,
  isCurrentRole,
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={formatDatesToDisplay(startDate, endDate, isCurrentRole)}
    iconStyle={{ background: "rgb(233,154,148)", color: "#fff" }}
    icon={<MdWork />}
  >
    <h4 className="vertical-timeline-element-title">{company}</h4>
    <h5 className="vertical-timeline-element-subtitle">{position}</h5>
    <div className="flex flex-row text-gray-500">
      <MdLocationOn className="self-center" />
      <text>{location}</text>
    </div>

    <text className="vertical-timeline-element-body">{`${summary}\n`}</text>
  </VerticalTimelineElement>
)

WorkItem.propTypes = {
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}
