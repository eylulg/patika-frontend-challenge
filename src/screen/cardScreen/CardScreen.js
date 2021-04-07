import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import user from "../../assets/user.png";
import Typography from "@material-ui/core/Typography";
import CardComponent from "../../components/card/Card";

export default function CardScreen() {
  const classes = useStyles();
  const [cards, setCards] = useState([]);

  const [data, setData] = useState({
    name: "",
    surname: "",
  });

  useEffect(() => {
    let name = localStorage.getItem("name", data.name);
    let surname = localStorage.getItem("surname", data.surname);
    setData({
      name: name,
      surname: surname,
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.left_container}>
        <img className={classes.icon} src={user}></img>
        <div className={classes.textWrapper}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {"Merhaba "}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.name + " " + data.surname}
          </Typography>
        </div>
      </div>
      <div className={classes.right_container}>
        {cards.map((item, index) => {
          return <CardComponent card={item} type="card"></CardComponent>;
        })}
        <CardComponent
          cardList={(val) => {
            setCards(val);
          }}
          type="createCard"
        ></CardComponent>
      </div>
    </div>
  );
}
