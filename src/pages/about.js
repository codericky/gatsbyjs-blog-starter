import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import aboutStyles from "../components/about.module.scss"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
const AboutPage = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "meeting.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
      <Layout>
        <SEO title="about" />
        <div>
          <h1>About</h1>
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <p className={aboutStyles.h3}>gatsby-background-image</p>
    </BackgroundImage>
    </div>
    </Layout>
  )
}



export default AboutPage