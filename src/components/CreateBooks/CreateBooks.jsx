import React, { useState, useContext, useEffect } from 'react';
import {
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Box,
  Grid,
  Divider,
} from '@material-ui/core';
import useStyle from './CreateBooksStyle';
import API from '../../API';
import { Context } from '../../Context/AppContextProvider';
import { actions } from '../../Context/Reducer';


const CreateBooks = () => {
  const { booksClient } = API;
  const classes = useStyle();
  const nullText = {
    id: "",
    title: "",
    publishDate: "",
  }
  const [state, dispatch] = useContext(Context);
  const [text, setText] = useState(state.book);

  const handleChangeText = (event) => {
    setText({
      ...text,
      [event.target.id]: event.target.value
    });
  };
  useEffect(() => {
    return () => {
      dispatch({ type: actions.REMOVE_BOOK })
    }
  }, [])

  const editBook = async () => {
    try {
      await booksClient.putBook(text.id, text)
        .then((res) => {
          console.log(res.data)
          // setBook(res.data);
          dispatch({ type: actions.SET_BOOK, payload: res.data })
          // setShowModal(true)
        })

    } catch (error) {
      console.log(error)
    }
  }

  // const editBook = () => {
  //   API.apiClient.put('https://fakerestapi.azurewebsites.net/api/v1/Books/' + text.id, text)
  //     .then((res) => { console.log(res); })
  // };

  // const deleteBook = () => {
  //   API.apiClient.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/' + text.id)
  //     .then((res) => { console.log(res); setText(nullText) })
  // }

  const deleteBook = async () => {
    try {
      await booksClient.deleteBook(text.id)
        .then((res) => {
          console.log(res)
          setText(nullText)
          // setBook(res.data);
          dispatch({ type: actions.SET_BOOK, payload: nullText })
          // setShowModal(true)
        })

    } catch (error) {
      console.log(error)
    }
  }

  const handleOnClick = () => {
    editBook()
  };

  const handleDelete = () => {
    deleteBook()
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <form
          autoComplete="off"
          noValidate
        >
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardHeader
              subheader="Ingrese la información del Libro"
              title="Editar Libro"
            />
          </Box>
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  disabled
                  size='small'
                  fullWidth
                  id="id"
                  label="ID"
                  onChange={handleChangeText}
                  value={text.id}
                  variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  size='small'
                  fullWidth
                  id="title"
                  label="Título"
                  onChange={handleChangeText}
                  value={text.title}
                  variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size='small'
                  fullWidth
                  id="publishDate"
                  label="Fecha de publicación"
                  onChange={handleChangeText}
                  value={text.publishDate}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <div className={classes.btns}>
            <Button className={classes.btnc} onClick={() => handleOnClick()} variant="contained" color="primary">Cargar</Button>
            <Button className={classes.btnc} onClick={() => handleDelete()} variant="contained" color="secondary">Borrar</Button>
          </div>
        </form>
      </Card>
    </div>
  )
};

export default CreateBooks;

