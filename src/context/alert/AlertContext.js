import React, { createContext, useReducer } from 'react';
import { reducer } from './AlertReducer';

export const AlertContext = createContext();

export const AlertProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, null);

  //SET ALERT
  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 2000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};
