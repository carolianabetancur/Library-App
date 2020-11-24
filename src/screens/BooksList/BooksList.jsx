import React, { useState, useEffect, useContext } from 'react';
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from '@material-ui/core'
import useStyle from './BooksListStyle';
import API from '../../API';
/* import Modal from '@material-ui/core/Modal';
import CreateBooks from '../../components/CreateBooks/CreateBooks'; */
import { Context } from '../../Context/AppContextProvider';
import { actions } from '../../Context/Reducer';
// import {setBook} from '../../Context/books';

const BooksList = () => {
  const classes = useStyle();
  const { booksClient } = API;
  const [books, setBooks] = useState([]);
  // const [book, setBook] = useState();
  // const [showModal, setShowModal] = useState(false)
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getBooks()
    // return () => {
    //   dispatch({ type: actions.REMOVE_BOOKS })
    // }
  }, [books === null])

  const getBooks = async () => {
    try {
      await booksClient.getBooks()
        .then((res) => {
          setBooks(res.data)
          // dispatch({ type: actions.SET_BOOKS, payload: res.data })
        });
    } catch (error) {
      console.log(error)
    }
  }
  const handleModal = (id) => {
    getBook(id)
  }

  const getBook = async (id) => {
    try {
      await booksClient.getBook(id)
        .then((res) => {
          // setBook(res.data);
          dispatch({ type: actions.SET_BOOK, payload: res.data })
          // setShowModal(true)
          window.location.href = "/edit-books"
        })

    } catch (error) {
      console.log(error)
    }
  }
  // const handleClose = () => {
  //   setShowModal(false)
  // }
  return (
    <div className={classes.root}>
      {/* <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CreateBooks />
      </Modal> */}
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} align="center"><b>LIBROS</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">TÍTULO</TableCell>
              <TableCell align="center">FECHA DE PUBLICACIÓN</TableCell>
              <TableCell align="center">VER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((option, index) => (
              <TableRow key={index}>
                <TableCell align="center">{option.id}</TableCell>
                <TableCell align="center">{option.title}</TableCell>
                <TableCell align="center">{option.publishDate}</TableCell>
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

export default BooksList;

