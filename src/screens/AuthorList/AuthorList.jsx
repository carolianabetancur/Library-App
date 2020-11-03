import React, { useState, useEffect } from 'react';
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
import Modal from '@material-ui/core/Modal';
import CreateAuthor from '../../components/CreateAuthor/CreateAuthor';

const AuthorList = () => {
  const classes = useStyle();
  const baseURL = 'https://fakerestapi.azurewebsites.net/api/';

  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState();
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getAuthors()
  }, [authors === null || showModal])

  const handleModal = (id) => {
    getAuthor(id)
  }

  const getAuthors = () => {
    API.apiClient.get(baseURL+'Authors')
      .then((res) => { console.log(res); setAuthors(res.data) })
  }

  const getAuthor = (id) => {
    API.apiClient.get(baseURL+'Authors/' + id)
      .then((res) => { console.log(res); setAuthor(res.data); setShowModal(true) })
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
        <CreateAuthor author={author}/>
      </Modal>
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
                <TableCell align="center">{option.ID}</TableCell>
                <TableCell align="center">{option.FirstName}</TableCell>
                <TableCell align="center">{option.LastName}</TableCell>
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

export default AuthorList;

