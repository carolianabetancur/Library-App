import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Context } from '../../Context/AppContextProvider';
import { actions } from '../../Context/Reducer';

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
  const [state, dispatch] = useContext(Context);
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);

/*   useEffect(() => {
    setHidden(state.correo !== "" ? false : true)
  }, [hidden]) */

  const salir = () => {
    dispatch({ type: actions.REMOVE_CREDENTIALS })
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
          <div hidden={state.correo !== "" ? false : true}>
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