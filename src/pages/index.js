import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Developer from "../components/developer"
import Education from "../components/education"
import Work from "../components/work"

const sections = ["About", "Education", "Work"]

const IndexPage = ({ data }) => {
  const { basics, resume } = data
  return (
    <Layout sections={sections}>
      <SEO title="Home" />
      <Developer {...basics} />
      <Education {...resume} />
      <Work {...resume} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    basics {
      email
      followers
      following
      headline
      label
      name
      picture
      profiles {
        network
        username
        url
      }
      region
      summary
      username
      yearsOfExperience
    }
    resume {
      education {
        institution
        area
        studyType
        website
        startDate
        endDate
        description
      }
      work {
        company
        position
        website
        location
        summary
        isCurrentRole
        startDate
        endDate
      }
    }
  }
`

export default IndexPage
