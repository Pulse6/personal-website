import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const PlayPage = () => (
//   state = {
//     firstName: "",
//     lastName: "",
//   }

//   handleInputChange = event => {
//   const target = event.target
//   const value = target.value
//   const name = target.name

//   this.setState({
//     [name]: value
//   })
// }

// handleSubmit = event => {
//   event.preventDefault()
//   alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
// }

// <Layout>
//   <SEO title="404: Not found" />
//   <form onSubmit={this.handleSubmit}>
//     <h1>{this.state.firstName}</h1>
//     <label>
//       First name
//           <input
//         type="text"
//         name="firstName"
//         value={this.state.firstName}
//         onChange={this.handleInputChange}
//       />
//     </label>
//     <label>
//       Last name
//           <input
//         type="text"
//         name="lastName"
//         value={this.state.lastName}
//         onChange={this.handleInputChange}
//       />
//     </label>
//     <button type="submit">Submit</button>
//   </form>
// </Layout>
// )
// export default PlayPage

export default class PlayPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <Layout>
        <SEO title="Play" />
        <h1>{this.state.firstName}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type Something:
          <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name
          <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>  
          <button type="submit">Submit</button>
        </form>
      </Layout>
    )
  }
}