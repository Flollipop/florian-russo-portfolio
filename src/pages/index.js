import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Developer from "../components/developer"

const IndexPage = ({ data }) => {
  const { basics } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Developer {...basics} />
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
