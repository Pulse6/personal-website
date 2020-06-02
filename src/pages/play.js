import React, { useState } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlayPage = () => {
  const [input, setInput] = useState('')
  // const [show, setShow] = useState(false)
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    try {
      axios.get(`https://api.edamam.com/search?q=${input}&app_id=${process.env.GATSBY_APP_RECIPE_SEARCH_ID}&app_key=${process.env.GATSBY_APP_RECIPE_SEARCH_KEY}`)
        .then(res => {
          console.log(res.data)
          setData(res.data)
          setErr(false)
        })
    }
    catch (error) {
      setErr(true)
      console.error(error)
    }
  }

  return (
    < Layout >
      <SEO title="Play" />
      <div className="playground">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {err && <div>Something Went Wrong :o</div>}
      {!err && data && data.hits.map(item => {
        return <div key={item.recipe.label}>{item.recipe.label}</div>
      })}
    </Layout >
  )
}
export default PlayPage