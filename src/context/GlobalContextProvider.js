import React from "react"

const GlobalStateContext = React.createContext()
const GlobalDispatchContext = React.createContext()

const initialState = {
  count: 0,
  input: "",
  loading: false,
  err: false,
  data: null,
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
    case "changeinput": {
      return {
        ...state,
        input: action.input
      }
    }
    case "toggleloading": {
      return {
        ...state,
        loading: state.loading ? false : true
      }
    }
    case "seterr": {
      return {
        ...state,
        err: action.err
      }
    }
    case "setdata": {
      return {
        ...state,
        data: action.data
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

export {GlobalContextProvider, GlobalStateContext, GlobalDispatchContext}