import { makeStyles } from '@material-ui/core/styles';

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
    paper: {
      height: 'auto',
      width: '400',
      justify:"center",
      elevation:'5',
    },
    control: {
      padding: theme.spacing(2),
    },
    btn: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export default useStyles;