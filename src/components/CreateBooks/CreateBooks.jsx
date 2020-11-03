import React, { useState, } from 'react';
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

const CreateBooks = ({ book }) => {
  const classes = useStyle();
  const [text, setText] = useState(book);
  const nullText = {
    ID: "",
    Title: "",
    PublishDate: "",
  }

  const handleChangeText = (event) => {
    setText({
      ...text,
      [event.target.id]: event.target.value
    });
  };

  const editBook = () => {
    API.apiClient.put('https://fakerestapi.azurewebsites.net/api/Books/' + text.ID, text)
      .then((res) => { console.log(res); })
  };

  const deleteBook = () => {
    API.apiClient.delete('https://fakerestapi.azurewebsites.net/api/Books/' + text.ID)
      .then((res) => { console.log(res); setText(nullText) })
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
                  id="ID"
                  label="ID"
                  onChange={handleChangeText}
                  value={text.ID}
                  variant="outlined" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  size='small'
                  fullWidth
                  id="Title"
                  label="Título"
                  onChange={handleChangeText}
                  value={text.Title}
                  variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size='small'
                  fullWidth
                  id="PublishDate"
                  label="Fecha de publicación"
                  onChange={handleChangeText}
                  value={text.PublishDate}
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

