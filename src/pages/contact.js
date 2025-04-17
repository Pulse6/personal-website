import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact">
      <h1>I'm always happy to hear from you.</h1>
      <ul>
        <li><a href="mailto:marco.hl.siu@gmail.com">Email</a></li>
        <li><a href="https://www.linkedin.com/in/marco-siu-790802162/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/Pulse6" rel="noopener noreferrer" target="_blank">Github</a></li>
        <li><a href="https://www.canva.com/design/DAGMiOS_88I/GnqQMhlOsglS8edX0IX1cA/view?utm_content=DAGMiOS_88I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4e7b6f4158" rel="noopener noreferrer" target="_blank">Resume</a></li>
      </ul>
    </div>
  </Layout>
)

export default ContactPage
