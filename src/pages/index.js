import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About"/>
    <div className="about">
      <div className="img">
        <Image />
      </div>
      <div>
        <h1>Nice to meet you <span role="img" aria-label="sheep">🐑</span></h1>
        <p>My name is Hok Lun Siu, You may call me Marco. I am passionate about web development. Enjoy helping my colleagues hone their coding abilities, and solving problems. I am always looking forward to the new challenges of the ever changing technological world we live in. I am excited to be given the opportunity to be apart of a coding team.</p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
