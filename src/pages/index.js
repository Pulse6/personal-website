import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="about">
      <div style={{ minWidth: `300px` }}>
        <Image />
      </div>
      <div>
        <h1>Hello there,</h1>
        <h2>My name is Marco Siu.</h2>
        <p>I am passionate about web development and enjoy helping my colleagues hone their coding abilities. I am always looking forward to the  new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
