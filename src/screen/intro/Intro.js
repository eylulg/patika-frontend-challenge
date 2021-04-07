import React, { useState } from "react";
import useStyles from "./styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Intro() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  let history = useHistory();

  const onChange = () => {
    localStorage.setItem("name", data.name);
    localStorage.setItem("surname", data.surname);
    history.push("/home");
  };

  return (
    <div className={classes.container}>
      <span className={classes.title}>Lütfen İsim ve Soyisminizi Girin</span>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          onChange={(e) => {
            setData({
              ...data,
              name: e.target.value,
            });
          }}
          id="standard-basic"
          label="İsim"
        />
        <TextField
          onChange={(e) => {
            setData({
              ...data,
              surname: e.target.value,
            });
          }}
          id="standard-basic"
          label="Soyisim"
        />
      </form>
      <Button
        onClick={() => {
          onChange();
        }}
        className={classes.button}
        variant="outlined"
      >
        Devam Et
      </Button>
    </div>
  );
}
