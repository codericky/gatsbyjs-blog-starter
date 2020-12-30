import React from "react"
import Footer from "../components/footer.js"
import Header from "../components/header.js"
import "../sytles/index.scss"
import layoutStyles from "./layout.module.scss"
const Layout =(props)=>{
    return(
<div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
  <Header />   
{props.children}
    </div>
    <Footer />
</div>
    )
}
export default Layout

  