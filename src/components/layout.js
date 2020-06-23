/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, sections, profiles }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.author} sections={sections} />
      <main>{children}</main>
      <Footer name={data.site.siteMetadata.author} profiles={profiles} />
    </>
  )
}

Layout.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  profiles: PropTypes.array,
  children: PropTypes.node.isRequired,
}

export default Layout
