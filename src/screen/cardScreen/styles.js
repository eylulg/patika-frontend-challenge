import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#f8ede3",
    width: "100vw",
    height: "100vh",
    overflowX: "auto",
    display: "flex",
  },
  left_container: {
    width: "20vw",
    height: "100%",
    display: "flex",
  },
  right_container: {
    width: "80vw",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  icon: {
    width: "50px",
    height: "50px",
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
  },
}));

export default useStyles;
