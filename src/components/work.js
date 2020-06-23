import React from "react"
import PropTypes from "prop-types"
import { VerticalTimeline } from "react-vertical-timeline-component"
import { SectionTitle } from "./sectionTitle"
import { WorkItem } from "./workItem"

const Work = ({ work }) => (
  <section className="bg-blue-100 flex-col flex">
    <SectionTitle title="Work" />
    <VerticalTimeline>
      {work
        .sort((a, b) => Date.parse(a.startDate) - Date.parse(b.startDate))
        .map(job => (
          <WorkItem {...job} key={job.company + job.startDate} />
        ))}
    </VerticalTimeline>
  </section>
)

Work.propTypes = {
  work: PropTypes.array.isRequired,
}

export default Work
