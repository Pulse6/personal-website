import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlayPage = () => {
  const [name, setName] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${name}!`)
  }

  return (
    < Layout >
      <SEO title="Play" />
      <form onSubmit={handleSubmit}>
        <h1>{name}</h1>
        <label>
          Type something:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout >
  )
}
export default PlayPage