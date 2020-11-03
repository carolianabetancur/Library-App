import React from 'react';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export const publicRoutes = [
  { label: 'Ingresar', route: '/sign-in', icon: <PersonIcon/> }];

export const userRoutes = [
  { label: 'Libros', route: '/books-list', icon: <BookIcon/>},
  { label: 'Información libros', route: '/books-info'},
  { label: 'Autores', route: '/authors-list', icon: <LocalLibraryIcon/>},
  { label: 'Información autores', route: '/authors-info'}];
