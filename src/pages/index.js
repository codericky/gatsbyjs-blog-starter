import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import indexStyles from "../sytles/index.module.scss"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
const IndexPage = ({data})=>{
    return(  
            <div>
        <Layout>
          <SEO title="Home"
          keywords={[`blog`,`blog ricky`,`blog teknologi`]} />
          <h1>Home</h1>
         <Img className={indexStyles.gambar} fluid={data.discussGatsbyImage.childImageSharp.fluid} 
         alt="info meeting"/>
        <p>berisi informasi yang anda ingin ketahui</p>
        <BackgroundImage>
          Testing background gambar
        </BackgroundImage>
        </Layout>
            </div>         
    )
}
export default IndexPage

export const query = graphql`
query {
  discussGatsbyImage: file(relativePath: {eq: "discuss.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
     ...GatsbyImageSharpFluid

      }
    }
  }
}
`