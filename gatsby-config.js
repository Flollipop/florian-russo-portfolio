module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: "https://gitconnected.com/v1/portfolio/flollipop", // on "gatsby develop"
          production: "https://gitconnected.com/v1/portfolio/flollipop", // on "gatsby build"
        },
        rootKey: "resume",
        schemas: {
          End: `
                        year: Int
                        month: Int
                    `,
          Start: `
                        year: Int
                        month: Int
                    `,
          Education: `
                        company: String
                        position: String
                        website: String
                        location: String
                        summary: String
                        isCurrentRole: Boolean
                        startDate: String
                        endDate: String
                        highlights: [String]
                        end: End
                        start: Start
          `,
          Work: `
                        company: String
                        position: String
                        website: String
                        location: String
                        summary: String
                        isCurrentRole: Boolean
                        startDate: String
                        endDate: String
                        highlights: [String]
                        end: End
                        start: Start
                    `,
          Skills: `
                        name: String
                        level: String
                        rating: Int
                        yearsOfExperience: Int
                        keywords: [String]
                    `,
          Profiles: `
                        network: String
                        username: String
                        url: String
                    `,
          Projects: `
                        name: String
                        displayName: String
                        summary: String
                        website: String
                        githubUrl: String
                        primaryLanguage: String
                        videos: [String]
                        images: [String]
                        libraries: [String]
                        languages: [String]
                    `,
          Basics: `
                        name: String
                        picture: String
                        label: String
                        headline: String
                        summary: String
                        website: String
                        blog: String
                        yearsOfExperience: Int
                        username: String
                        karma: Int
                        email: String
                        region: String
                        phone: String
                        followers: Int
                        following: Int
                        profiles: [Profiles]
                    `,
          resume: `
                        references: [String]
                        interests: [String]
                        languages: [String]
                        education: [Education]
                        work: [Work]
                        projects: [Projects]
                        skills: [Skills]
                    `,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
