import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound">
      <h1>NOT FOUND</h1>
      <p>Something went wrong <span role="img" aria-label="sadface">😟</span></p>
      <div className="ButtonWrapper">
        <a className="ButtonLink" href="/">Return to the homepage</a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
