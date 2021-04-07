import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    width: "40%",
    height: "40vh",
    marginTop: "5%",
    marginLeft: "5%",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    display: "flex",
    overflow: "scroll",
  },
  input: {
    marginTop: "4%",
    width: "80%",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
  createButton: {
    width: "50%",
    marginTop: "5%",
    alignSelf: "center",
    marginBottom: "5%",
  },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
