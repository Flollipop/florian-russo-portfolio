import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = props => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mainImage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          {...props}
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      )
    }}
  />
)

export default BackgroundSection
