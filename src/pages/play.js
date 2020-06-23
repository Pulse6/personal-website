import React, { useContext } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { Context } from "../context/context"
import { GlobalStateContext, GlobalDispatchContext } from "../context/GlobalContextProvider"

const PlayPage = () => {

  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: "seterr", err: false })
    if (event.target.input.defaultValue === '') {
      dispatch({ type: "seterr", err: true })
    } else {
      dispatch({ type: "setdata", data: null })
      dispatch({ type: "toggleloading" })
      try {
        axios.get(`https://api.edamam.com/search?q=${state.input}&app_id=${process.env.GATSBY_APP_RECIPE_SEARCH_ID}&app_key=${process.env.GATSBY_APP_RECIPE_SEARCH_KEY}`)
          .then(res => {
            dispatch({ type: "setdata", data: res.data })
            dispatch({ type: "seterr", err: false })
            dispatch({ type: "toggleloading" })
          })
      }
      catch (error) {
        dispatch({ type: "toggleloading" })
        dispatch({ type: "seterr", err: true })
        console.error(error)
      }
    }
  }

  return (
    < Layout >
      <SEO title="Play" />
      <div className="playground">
        {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="input"
              value={state.input}
              onChange={(event) => dispatch({ type: "changeinput", input: event.target.value })}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
      {state.loading && <div>Loading...</div>}
      {state.err && <div>Something Went Wrong :o</div>}
      {!state.err && state.data && state.data.hits.map(item => {
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