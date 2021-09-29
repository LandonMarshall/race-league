import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 182px)',
  },
  paper: {
    height: 'calc(100vh - 128px)',
    overflow: 'auto',
  },
  footer: {
    borderTop: theme.shape.border,
  },
}));
