import React, { useState, useContext } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { Context } from "../context/context"
import {GlobalStateContext, GlobalDispatchContext} from "../context/Context"

const PlayPage = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)

  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  console.log("this", state.count)
  
  const handleSubmit = event => {
    event.preventDefault()
    setErr(false);
    if (event.target.input.defaultValue === '') {
      setErr(true);
    } else {
      setData(null)
      setLoading(true)
      try {
        axios.get(`https://api.edamam.com/search?q=${input}&app_id=${process.env.GATSBY_APP_RECIPE_SEARCH_ID}&app_key=${process.env.GATSBY_APP_RECIPE_SEARCH_KEY}`)
          .then(res => {
            // console.log(res.data)
            setData(res.data)
            setErr(false)
            setLoading(false)
          })
      }
      catch (error) {
        setErr(true)
        console.error(error)
      }
    }
  }

  return (
    < Layout >
      <SEO title="Play" />
      <div className="playground">
        {state.count}
        <button onClick={() => dispatch({type: "add"})}>add</button>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {loading && <div>Loading...</div>}
      {err && <div>Something Went Wrong :o</div>}
      {!err && data && data.hits.map(item => {
        return (
          <div key={item.recipe.label} className="playgroundData">
            <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">{item.recipe.label}</a>
            {item.recipe.ingredientLines.map(item => {
              return <div key={item}>- {item}</div>
            })}
          </div>
        )
      })}
    </Layout >
  )
}
export default PlayPage