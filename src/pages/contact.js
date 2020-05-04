import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact">
      <h1>I'm always happy to hear from you.</h1>
      <ul>
        <li><a href="mailto:marco.hl.siu@gmail.com">Email</a></li>
        <li><a href="https://www.linkedin.com/in/marco-siu-790802162/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/Pulse6" target="_blank">Github</a></li>
      </ul>
    </div>
  </Layout>
)

export default SecondPage
