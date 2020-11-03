import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 30px',
    padding: '30px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  card: {
    margin: 'auto',
    maxHeight: '500px',
    width: '600px',
  },
  btns: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btnc: {
    margin: '20px auto',
  },
}));
export default useStyles;
