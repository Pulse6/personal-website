import React, { createContext, useState } from "react";

const Context = createContext([{}, () => { }]);

const ContextProvider = props => {
  const [state, setState] = useState({
    count: 0,
  });

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };