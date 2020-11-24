import React, { useState, useEffect, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyle from './AuthorListStyle';
import API from '../../API';
import { Context } from '../../Context/AppContextProvider';
import { actions } from '../../Context/Reducer';

const AuthorList = () => {
  const classes = useStyle();
  const { authorsClient } = API;
  const [state, dispatch] = useContext(Context);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors()
  }, [authors === null])

  const getAuthors = async () => {
    try {
      await authorsClient.getAuthors()
        .then((res) => {
          setAuthors(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const handleModal = (id) => {
    getAuthor(id)
  }

  const getAuthor = async (id) => {
    try {
      await authorsClient.getAuthor(id)
        .then((res) => {
          dispatch({ type: actions.SET_AUTHOR, payload: res.data })
          window.location.href = "/edit-authors"
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.root}>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} align="center"><b>AUTORES</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">NOMBRE</TableCell>
              <TableCell align="center">APELLIDO</TableCell>
              <TableCell align="center">VER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((option, index) => (
              <TableRow key={index}>
                <TableCell align="center">{option.id}</TableCell>
                <TableCell align="center">{option.firstName}</TableCell>
                <TableCell align="center">{option.lastName}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleModal(option.id)} variant="contained"
                    color="Secundary">VER</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default AuthorList;

