import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    display: "flex",
  },
  report: {
    marginLeft: theme.spacing(6)
  },
  visitorInfoText: {
    display: 'flex',
    alignItems: 'center'
  },
  toolbar: theme.mixins.toolbar,
  primaryText: {
    color: theme.palette.primary.main
  },
  button: {
    marginTop: theme.spacing(4),
  }
}));