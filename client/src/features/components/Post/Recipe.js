import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Recipe = props => {
  const useStyles = makeStyles(theme => ({
    wrapper: {
      width: "40%"
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
  const [step, setStape] = useState([]);
  const [stepList, setStepList] = useState([]);
  const handleChangePrepare = e => {
    setStape([...step, e.target.value]);
    props.addRecipe([...step, e.target.value]);
  };
  const addStepPrepare = () => {
    const number = stepList.length + 1;
    const newEl = React.createElement(TextField, {
      key: number,
      multiline: true,
      rows: "3",
      fullWidth: true,
      label: `Krok${number}`,
      margin: "normal",
      className: classes.textField,
      onChange: handleChangePrepare
    });
    setStepList([...stepList, newEl]);
  };
  return (
    <React.Fragment>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        className={classes.padding}
      >
        Przygotowanie
      </Typography>

      {stepList.length > 0 ? (
        <Box component="div" className={classes.wrapper}>
          {stepList.map(item => item)}
        </Box>
      ) : null}
      <Fab
        size="medium"
        color="secondary"
        aria-label="Add"
        className={classes.margin}
        onClick={addStepPrepare}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default Recipe;
