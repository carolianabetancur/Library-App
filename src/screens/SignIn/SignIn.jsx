import React, { useState, useContext } from 'react';
import useStyle from './SignInStyle';
import {
  TextField,
  Typography,
  Container,
  Button
} from '@material-ui/core';

const SignIn = () => {

  const classes = useStyle();
/*   const Context = React.createContext({ count: 0, setCount: () => {} }); */
  const [form, setForm] = useState({
    correo: "",
    contrasena: "",
  });

  const handleChangeForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleOnClick = () => {
    localStorage.setItem('correo',form.correo)
    localStorage.setItem('contrasena',form.contrasena)
    window.location.href="/books-list"
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="h3" style={{ marginBottom: '20px', marginTop: '20px' }}>
          Inicio sesión
        </Typography>
        <div className={classes.form}>
          <TextField className={classes.textField} style={{marginBottom: '20px'}}name="correo" label="Correo*" variant="outlined"
            value={form.correo} onChange={handleChangeForm} helperText={!form.correo.includes("@") ? 'No parece ser un correo válido' : null} />
        </div>
        <div className={classes.form}>
          <TextField className={classes.textField} style={{marginBottom: '20px'}} name="contrasena" label="Contraseña*" variant="outlined"
            value={form.contrasena} onChange={handleChangeForm} helperText={form.contrasena === "" ? 'El campo contraseña está vacío' : null}/>
        </div>
      </Container>
      <Button disabled={(form.correo && form.contrasena) !== "" ? false : true } onClick={handleOnClick} variant="contained" color="default">Ingresar</Button>
    </div>
  )
}

export default SignIn; 