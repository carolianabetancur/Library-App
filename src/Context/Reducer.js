import { storeBook, removeBook } from './books';
import { storeAuthor, removeAuthor } from './authors';

export const actions = {
  SET_BOOK: 'SET_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  SET_AUTHOR: 'SET_AUTHOR',
  REMOVE_AUTHOR: 'REMOVE_AUTHOR',
  SET_CRENDENTIALS: 'SET_CREDENTIALS',
  REMOVE_CREDENTIALS: 'REMOVE_CREDENTIALS',
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_BOOK:
      storeBook(action.payload);
      return {
        ...state,
        book: action.payload,
      };
    case actions.REMOVE_BOOK:
      removeBook();
      return {
        ...state,
        book: null,

      };
    case actions.SET_AUTHOR:
      storeAuthor(action.payload);
      return {
        ...state,
        author: action.payload,
      };
    case actions.REMOVE_AUTHOR:
      removeAuthor();
      return {
        ...state,
        author: null,

      };
    case actions.SET_CRENDENTIALS:
      localStorage.setItem('correo', action.payload.correo)
      localStorage.setItem('contrasena', action.payload.contrasena)
      return {
        ...state,
        correo: action.payload.correo,
        contrasena: action.payload.contrasena,
      };
    case actions.REMOVE_CREDENTIALS:
      localStorage.removeItem('correo')
      localStorage.removeItem('contrasena')
      return {
        ...state,
        correo: "",
        contrasena: "",
      };
    default:
      return state;
  }
};

export default Reducer;