import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Categories from "./Categories";
import Product from "./Product";
import Recipe from "./Recipe";
import { graphql } from "react-apollo";
import postMutation from "../../mutation/postMutation";
import axios from "axios";
import moment from "moment";
import "moment/locale/pl";
moment.locale("pl");

const Post = props => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 250
    },
    padding: {
      marginTop: "60px"
    }
  }));
  const classes = useStyles();
  const [values, setValues] = useState({
    title: "",
    image: "z unsplash.com",
    products: [],
    recipe: [],
    categories: []
  });
  const [errors, setErrors] = useState({});
  const handleChangeValue = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const recipe = steps => {
    setValues({ ...values, recipe: steps });
  };
  const products = products => {
    setValues({ ...values, products });
  };
  const categoires = categories => {
    setValues({ ...values, categories });
  };
  const handleSubmit = e => {
    e.preventDefault();
    //validation form
    if (values.title.length < 1) return setErrors({ name: "Za krótka nazwa" });
    else if (file === "") return setErrors({ file: "Brak wybranego pliku" });
    else if (values.products.length < 1)
      return setErrors({ product: "Nie napisałeś potrzebnych produktów" });
    else if (values.recipe.length < 1)
      return setErrors({ recipe: "Nie napisałeś jak danie przygotować" });
    else if (values.categories.length < 1)
      return setErrors({ category: "Nie wybrałeś kategori" });

    const formData = new FormData();
    formData.append("file", file);
    try {
      axios
        .post("/api/service", formData, {
          header: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(resp => {
          if (resp.data.err) {
            return setErrors({ file: resp.data.err });
          }
          props
            .addPost({
              variables: {
                ...values,
                image: `/assets/${resp.data.fileName}`,
                date: moment(new Date()).format("ll")
              }
            })
            .then(resp => props.history.push("/"))
            .catch(err => console.log(err));
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  const [file, setFile] = useState("");
  const handleChangeFile = e => {
    setFile(e.target.files[0]);
  };
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          className={classes.padding}
        >
          Dodaj Przepis
        </Typography>
        <TextField
          label="Nazwa"
          className={classes.textField}
          value={values.title}
          onChange={handleChangeValue("title")}
          margin="normal"
        />
        {errors.name ? (
          <Typography variant="body1" color="error">
            {errors.name}
          </Typography>
        ) : null}
        <Typography variant="h4" component="h4" className={classes.padding}>
          Wybierz zdjęcie(.jpg,.png)
        </Typography>
        <input type="file" onChange={handleChangeFile} />
        {errors.file ? (
          <Typography variant="body1" color="error">
            {errors.file}
          </Typography>
        ) : null}
        <Product addProducts={products} />
        {errors.product ? (
          <Typography variant="body1" color="error">
            {errors.product}
          </Typography>
        ) : null}
        <Recipe addRecipe={recipe} />
        {errors.recipe ? (
          <Typography variant="body1" color="error">
            {errors.recipe}
          </Typography>
        ) : null}
        <Categories addCategories={categoires} />
        {errors.category ? (
          <Typography variant="body1" color="error">
            {errors.category}
          </Typography>
        ) : null}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.padding}
        >
          Dodaj Post
          <CloudUploadIcon />
        </Button>
      </Grid>
    </form>
  );
};

export default graphql(postMutation, { name: "addPost" })(Post);
