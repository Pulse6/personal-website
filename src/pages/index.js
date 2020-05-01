import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there,</h1>
    <h2>My name is Marco Siu.</h2>
    <p>I am passionate about web development and enjoy helping my colleagues hone their coding abilities. I am always looking forward to the  new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
