// import React, { createContext, useState } from "react";

// const Context = createContext([{}, () => { }]);
// // const Context = createContext({children});

// const ContextProvider = props => {
//   const [state, setState] = useState({
//     count: 0,
//   });

//   return (
//     <Context.Provider value={[state, setState]}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export { Context, ContextProvider };
import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  count: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        add: state.count + 1
      }
    }
    default:
      throw new Error('bad action type')
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