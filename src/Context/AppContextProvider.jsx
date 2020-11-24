import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import { getBook } from './books';
import { getAuthor } from './authors';
import PropTypes from 'prop-types';

const initialState = {
  book: getBook(),
  author: getAuthor(),
  correo: localStorage.getItem('correo') ? localStorage.getItem('correo'): "",
  contrasena: localStorage.getItem('contrasena') ? localStorage.getItem('contrasena'): ""
};

const AppContextProvieder = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};
AppContextProvieder.propTypes = {
  children: PropTypes.element.isRequired,
};
export const Context = createContext(initialState);
export default AppContextProvieder;