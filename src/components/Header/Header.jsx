import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(localStorage.getItem('correo') !== "" ? false : true )
  }, [hidden])

  const salir = () => {
    localStorage.setItem('correo', "")
    localStorage.setItem('contrasena',"")
    setHidden(true)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography align='left' variant="h6" className={classes.title}>
            LIBRERÍA
          </Typography>
          <div hidden={hidden}>
            <Button color="inherit"><Link to="/books-list">LIBROS</Link></Button>
            <Button color="inherit"><Link to="/authors-list">AUTORES</Link></Button>
            <Button color="inherit" onClick={salir}><Link to="/">SALIR</Link></Button>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}
export default Header; 