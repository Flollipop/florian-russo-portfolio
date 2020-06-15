import React from "react"
import PropTypes from "prop-types"
import { WorkItem } from "./workItem"

const Work = ({ work }) => (
  <>
    {work.map(job => (
      <WorkItem {...job} key={job.company + job.startDate} />
    ))}
  </>
)

Work.propTypes = {
  work: PropTypes.array.isRequired,
}

export default Work
