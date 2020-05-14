import React, { useState } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlayPage = () => {
  const [name, setName] = useState('')
  const [starwar, setStarwar] = useState(null)

  React.useEffect(() => {
    // axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
    axios.get('https://swapi.dev/api/people/')
    .then((res) => setStarwar(res.data.results))
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${name}!`)
  }

  return (
    < Layout >
      <SEO title="Play" />
      <div className="playground">
        <form onSubmit={handleSubmit}>
          <h1>{name}</h1>
          <label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      {!starwar ? <div>Loading...</div> : starwar.map((person) => {
        return <div key={person.name}>{person.name}</div>
      })}
    </Layout >
  )
}
export default PlayPage