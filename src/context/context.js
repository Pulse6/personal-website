import React, { useState } from "react";
// import Cookies from "js-cookie";

const Context = React.createContext([{}, () => {}]);
// const UserContext = React.createContext();

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