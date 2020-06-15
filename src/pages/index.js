import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)
export const query = graphql`
  query HomePageQuery {
    basics {
      email
      followers
      following
      headline
      label
      location {
        id
      }
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
  }
`

export default IndexPage
