import React from "react"
import footerStyles from "./footer.module.scss"
import { graphql, useStaticQuery} from "gatsby"
export default function Footer (){

      const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
      `)

      return(
        <div>
              <footer className={footerStyles.footer}>

<p>
    {data.site.siteMetadata.author}
</p>
 
 

            </footer>
        </div>
    )
}
