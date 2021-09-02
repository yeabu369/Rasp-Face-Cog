import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    
  },
  form: {},
  toolbar: theme.mixins.toolbar,
  primaryText: {
    color: theme.palette.primary.main
  },
  button: {
    marginTop: theme.spacing(4),
  }
}));