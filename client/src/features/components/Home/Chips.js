import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { graphql } from "react-apollo";
import categoryQuery from "../../queries/categoryQuery";

const Chips = props => {
  const useStyles = makeStyles(theme => ({
    chip: {
      margin: theme.spacing(1)
    }
  }));
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [categoriesChoose, setCategoriesChoose] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleClick = (value, id) => {
    const prevCategoriesChoose = categoriesChoose;
    const newCategoriesChoose = [
      ...prevCategoriesChoose,
      { id: id, name: value }
    ];
    const prevCategories = [...categories];
    const newCategories = prevCategories.filter(category => category.id !== id);
    const nameCategoriesChoose = newCategoriesChoose.map(item => item.name);
    const newData = posts.filter(item =>
      nameCategoriesChoose.every(elem => item.categories.indexOf(elem) > -1)
    );

    setCategoriesChoose(newCategoriesChoose);
    setCategories(newCategories);
    props.takeCurrentPosts(newData);
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
    props.takeCurrentPosts(newData);
  };

  useEffect(() => {
    if (!props.category.loading) {
      setCategories(props.category.categories);
    }
    setPosts(props.posts);
  }, [props.posts, props.category]);
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default graphql(categoryQuery, { name: "category" })(Chips);
