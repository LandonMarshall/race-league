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
  grow: {
    flexGrow: 1,
  },
  appBar: {
    position: 'static',
    boxShadow: 'none',
    borderRadius: '0',
    borderBottom: theme.palette.borderColour.main,
  },
  toolBarContainer: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 1280,
  },
  toolBar: {
    padding: '0 20px',
    height: 65,
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    marginLeft: '20px !important',
    textDecoration: 'none',
    colour: 'white',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  seasonSelect: {
    colour: 'white', 
    minWidth: 300,
  }
}));