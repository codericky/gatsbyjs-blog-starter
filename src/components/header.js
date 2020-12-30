import React from "react"
import { graphql, Link, useStaticQuery} from "gatsby"
import headerStyles from "./header.module.scss"
export default function Header (){
const data = useStaticQuery(graphql`
query {
    site { 
     siteMetadata {
        title
      }
    }
  }  

`)
    return(     
      <header className={headerStyles.header}>
    <div>
       
    <h1 className={headerStyles.h1}>{data.site.siteMetadata.title}</h1>
        
        <nav>
            <ul className={headerStyles.navList}>
  <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
 </li>
  <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
 </li>
 <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/about">About</Link>
 </li>
  <li>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/contact">Contact</Link>
 </li>
            </ul>
         </nav>  
    </div>  
    </header>
    )
}
