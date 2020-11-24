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
import useStyle from './CreateAuthorStyle';
import API from '../../API';
import { Context } from '../../Context/AppContextProvider';
import { actions } from '../../Context/Reducer';

const CreateAuthor = () => {
  const { authorsClient } = API;
  const classes = useStyle();
  const [state, dispatch] = useContext(Context);
  const [text, setText] = useState(state.author);
  const nullText = {
    id: "",
    firstName: "",
    lastName: "",
  }
  useEffect(() => {
    return () => {
      dispatch({ type: actions.REMOVE_AUTHOR })
    }
  }, [])

  const editAuthor = async () => {
    try {
      await authorsClient.putAuthor(text.id, text)
        .then((res) => {
          dispatch({ type: actions.SET_AUTHOR, payload: res.data })
          console.log(res.data)
        })

    } catch (error) {
      console.log(error)
    }
  }
  const deleteAuthor = async () => {
    try {
      await authorsClient.deleteAuthor(text.id)
        .then((res) => {
          setText(nullText)
          dispatch({ type: actions.SET_AUTHOR, payload: nullText })
          console.log(res)
        })

    } catch (error) {
      console.log(error)
    }
  }
  const handleChangeText = (event) => {
    setText({
      ...text,
      [event.target.id]: event.target.value
    });
  };

  const handleOnClick = () => {
    editAuthor()
  };

  const handleDelete = () => {
    deleteAuthor()
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
              subheader="Ingrese la información del Autor"
              title="Editar Autor"
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
                  id="firstName"
                  label="Nombre"
                  onChange={handleChangeText}
                  value={text.firstName}
                  variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size='small'
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  onChange={handleChangeText}
                  value={text.lastName}
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

export default CreateAuthor;

