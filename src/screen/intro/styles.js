import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "25ch",
    flexDirection: "column",
    marginTop: "5% !important",
    display: "flex",
  },
  container: {
    backgroundColor: "#bdd2b6",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontFamily: "Raleway, sans-serif",
    fontSize: "50px",
  },
  button: {
    marginTop: "5% !important",
  },
}));

export default useStyles;
