import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Products = props => {
  const useStyles = makeStyles(theme => ({
    productWrapper: {
      width: "250px"
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

  const [productsList, setProductsList] = useState([]);
  const [products, setProducts] = useState([]);
  const handleChangeProducts = e => {
    setProducts([...products, e.target.value]);
    props.addProducts([...products, e.target.value]);
  };
  const addNewProduct = () => {
    const number = productsList.length + 1;
    const newEl = React.createElement(TextField, {
      key: number,
      fullWidth: true,
      label: `Produkt ${number}`,
      margin: "normal",
      className: classes.textField,
      onChange: handleChangeProducts
    });
    setProductsList([...productsList, newEl]);
  };
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        className={classes.padding}
      >
        Produkty
      </Typography>
      {productsList.length > 0 ? (
        <Box component="div" className={classes.productWrapper}>
          {productsList.map(item => item)}
        </Box>
      ) : null}
      <Fab
        size="medium"
        color="secondary"
        aria-label="Add"
        className={classes.margin}
        onClick={addNewProduct}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default Products;
