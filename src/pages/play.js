import React, { useState } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PlayPage = () => {
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)
  const [poki, setPoki] = useState(null)
  // const [starwar, setStarwar] = useState(null)

  // React.useEffect(() => {
  //   // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=964`)
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  //   // axios.get('https://swapi.dev/api/people/')
  //   .then((res) => console.log(res.data))
  // }, [])

  const handleSubmit = event => {
    event.preventDefault()
    // alert(`Welcome ${name}!`)
    // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=964`)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      // axios.get('https://swapi.dev/api/people/')
      .then((res) => {
        setPoki(res.data)
        console.log(res.data)
      })
    setShow(true)
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
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* {!starwar ? <div>Loading...</div> : starwar.map((person) => {
        return <div key={person.name}>{person.name}</div>
      })} */}
      {/* {!poki ? <p>Loading...</p> : poki.map(eachpoki =>{
        return <p key={eachpoki.name}>{eachpoki.name}</p>
      })} */}
      {show && poki &&
        <>
          <img src={poki.sprites.front_default} alt={poki.name}/>
          <h3>{poki.name}</h3>
          <h4>Abilities</h4>
          {poki.abilities.map(skills => {
            return <p>{skills.ability.name}</p>
          })}
        </>
      }
    </Layout >
  )
}
export default PlayPage