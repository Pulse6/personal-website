import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case "decrement": {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider