import React, { useState, useEffect } from 'react';
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
import Modal from '@material-ui/core/Modal';
import CreateBooks from '../../components/CreateBooks/CreateBooks';


const BooksList = () => {
  const classes = useStyle();
  const baseURL = 'https://fakerestapi.azurewebsites.net/api/';

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getBooks()
  }, [books === null || showModal])

  const handleModal = (id) => {
    getBook(id)
  }

  const getBooks = () => {
    API.apiClient.get(baseURL+'Books')
      .then((res) => { console.log(res); setBooks(res.data) })
  }

  const getBook = (id) => {
    API.apiClient.get(baseURL+'Books/' + id)
      .then((res) => { console.log(res); setBook(res.data); setShowModal(true) })
  }
const handleClose = () => {
  setShowModal(false)
}
  return (
    <div className={classes.root}>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CreateBooks book={book}/>
      </Modal>
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
                <TableCell align="center">{option.ID}</TableCell>
                <TableCell align="center">{option.Title}</TableCell>
                <TableCell align="center">{option.PublishDate}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleModal(option.ID)} variant="contained"
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

