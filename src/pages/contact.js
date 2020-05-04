import React from "react"
// import { Link } from "gatsby"

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
        <li><a href="https://www.canva.com/design/DAD5ca8VaMA/ebM48TwW5I4CTXurvfjnSg/view?utm_content=DAD5ca8VaMA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">Resume</a></li>
      </ul>
    </div>
  </Layout>
)

export default SecondPage
