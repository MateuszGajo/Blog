import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
//components
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";
import postQuery from "../../queries/postQuery";
import categoryQuery from "../../queries/categoryQuery";
import { client } from "../../../App";

const Home = props => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesChoose, setCategoriesChoose] = useState([]);
  const [loading, setLoading] = useState(false);
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: "100%",
      padding: "50px",
      alignItems: "center",
      margin: 0
    },
    padding: {
      paddingTop: "50px !important"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatar: {
      backgroundColor: red[500]
    },
    chip: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  const handleClick = (value, id) => {
    const prevCategoriesChoose = categoriesChoose;
    const newCategoriesChoose = [
      ...prevCategoriesChoose,
      { id: id, name: value }
    ];
    const prevCategories = [...categories];
    console.log(prevCategories);
    const newCategories = prevCategories.filter(category => category.id !== id);
    console.log(newCategories);
    const nameCategoriesChoose = newCategoriesChoose.map(item => item.name);
    const newData = posts.filter(item =>
      nameCategoriesChoose.every(elem => item.categories.indexOf(elem) > -1)
    );

    setCategoriesChoose(newCategoriesChoose);
    setCategories(newCategories);
    setCurrentPosts(newData);
  };

  const handleDelete = (id, value) => {
    const prevCategories = categories;
    const newCategories = [...prevCategories, { id: id, name: value }];
    const prevCategoriesChoose = categoriesChoose;
    const newCategoriesChoose = prevCategoriesChoose.filter(
      category => category.id !== id
    );
    const nameCategoriesChoose = newCategoriesChoose.map(item => item.name);
    const newData = posts.filter(item =>
      nameCategoriesChoose.every(elem => item.categories.indexOf(elem) > -1)
    );

    setCategories(newCategories);
    setCategoriesChoose(newCategoriesChoose);
    setCurrentPosts(newData);
  };

  useEffect(() => {
    client
      .query({
        query: postQuery
      })
      .then(resp => {
        setCurrentPosts(resp.data.posts);
        setPosts(resp.data.posts);
        setLoading(true);
      })
      .catch(err => console.log(err));

    client
      .query({
        query: categoryQuery
      })
      .then(resp => {
        setCategories(resp.data.categories);
      });
  }, []);

  return (
    <Grid container spacing={2} className={classes.card} justify="center">
      {console.log(localStorage.usertoken)}
      <Grid item xs={12}>
        {categories.length > 0 ? (
          categories.map(category => (
            <Chip
              className={classes.chip}
              key={category.id}
              label={category.name}
              onClick={() => handleClick(category.name, category.id)}
            />
          ))
        ) : (
            <Chip label="Brak" />
          )}
      </Grid>
      <Grid item xs={12}>
        {categoriesChoose.length > 0
          ? categoriesChoose.map(category => (
            <Chip
              key={category.id}
              className={classes.chip}
              label={category.name}
              onDelete={() => handleDelete(category.id, category.name)}
              color="secondary"
            />
          ))
          : null}
      </Grid>
      {loading ? (
        <React.Fragment>
          {currentPosts.slice(0, 2).map(item => {
            return (
              <Grid item sm={6} xs={12} key={item.id}>
                <CardPrimary item={item} />
              </Grid>
            );
          })}
          {currentPosts.slice(2, currentPosts.length).map(item => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                className={classes.padding}
                key={item.id}
              >
                <CardSecondary item={item} />
              </Grid>
            );
          })}
        </React.Fragment>
      ) : (
          <div>Ładowanie...</div>
        )}
    </Grid>
  );
};

export default Home;
