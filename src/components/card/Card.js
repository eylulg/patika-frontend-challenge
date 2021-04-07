import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Checkbox, IconButton, Typography } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import useStyles from "./styles";

const CardComponent = ({ card, type, cardList }) => {
  const classes = useStyles();
  const [category, setCategories] = useState("");
  const [input, setInput] = useState("");
  const [title, setTitle] = useState(null);
  const [cards, setCards] = useState([]);
  const [list, setList] = useState([""]);

  const handleChange = (index) => {};

  return type == "createCard" ? (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <TextField
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
          className={classes.input}
          label="Proje Adı"
        />
        <TextField
          value={category}
          className={classes.input}
          onChange={(event) => {
            setCategories(event.target.value);
          }}
          defaultValue={category}
          label="Kategori"
        />
        {list.map((element, i) => {
          return (
            <div className={classes.inputWrapper}>
              <TextField
                value={i == list.length - 1 ? input : list[i].title}
                className={classes.input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
                label="Madde gir..."
              />
              {i == list.length - 1 && (
                <IconButton
                  onClick={() => {
                    let temp = [...list];
                    temp.unshift({ title: input, checked: false });
                    setInput("");
                    setList(temp);
                  }}
                  aria-label="delete"
                  color="primary"
                >
                  <AddCircle />
                </IconButton>
              )}
            </div>
          );
        })}
        <Button
          onClick={() => {
            let temp = [...cards];
            temp.push({
              title: title,
              list: [...list],
              categories: category,
            });
            setCards(temp);
            setInput("");
            setTitle("");
            setList([""]);
            setCategories("");
            cardList(temp);
          }}
          variant="contained"
          color="primary"
          className={classes.createButton}
        >
          Oluştur
        </Button>
      </CardContent>
    </Card>
  ) : (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div className={classes.checkboxWrapper}>
          <TextField
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={card.title}
            className={classes.input}
            label="Proje Adı"
          />
          <IconButton onClick={() => {}} aria-label="delete" color="primary">
            <DeleteOutlined />
          </IconButton>
        </div>
        <TextField
          value={card.categories}
          className={classes.input}
          onChange={(event) => {
            setCategories(event.target.value);
          }}
          label="Kategori"
        />
        {card.list.length > 0 &&
          card.list.map((item, index) => {
            return (
              index < card.list.length - 1 && (
                <div className={classes.checkboxWrapper}>
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleChange(index)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <IconButton
                    onClick={() => {}}
                    aria-label="delete"
                    color="#000"
                  >
                    <DeleteOutlined />
                  </IconButton>
                </div>
              )
            );
          })}
      </CardContent>
    </Card>
  );
};
export default CardComponent;
