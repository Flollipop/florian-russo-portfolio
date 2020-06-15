import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Developer from "../components/developer"
import Education from "../components/education"

const IndexPage = ({ data }) => {
  const { basics, resume } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Developer {...basics} />
      <Education {...resume} />
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
    }
  }
`

export default IndexPage
