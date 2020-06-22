import React from "react"
import PropTypes from "prop-types"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { SchoolItem } from "./schoolItem"
import { SectionTitle } from "./sectionTitle"

const Education = ({ education }) => (
  <section className="bg-blue-100 flex-col flex">
    <SectionTitle title={"Education"} />
    <VerticalTimeline>
      {education.map(school => (
        <SchoolItem {...school} key={school.institution + school.startDate} />
      ))}
    </VerticalTimeline>
  </section>
)

Education.propTypes = {
  education: PropTypes.array.isRequired,
}

export default Education
