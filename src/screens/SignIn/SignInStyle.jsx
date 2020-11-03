import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
    height: '400px',
    margin: '30px auto',
    paddingTop: '20px',
    backgroundColor: '#CCF6FF',
  },
  form: {
    paddingBottom: '15px',
  },
  textField: {
    // marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    width: '300px',
  },
}));

export default useStyles;
