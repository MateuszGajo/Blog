import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import categoryQuery from "../../queries/categoryQuery";
import { graphql } from "react-apollo";

const Categories = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300
    },
    chips: {
      display: "flex",
      flexWrap: "wrap"
    },
    chip: {
      margin: 2
    },
    noLabel: {
      marginTop: theme.spacing(3)
    },
    padding: {
      marginTop: "60px"
    }
  }));
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const [chooseNames, setChooseName] = useState([]);
  function handleChange(event) {
    setChooseName(event.target.value);
    props.addCategories(event.target.value);
  }
  const [names, setNames] = useState([]);

  const classes = useStyles();
  const theme = useTheme();
  function getStyles(name, chooseNames, theme) {
    return {
      fontWeight:
        chooseNames.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium
    };
  }
  useEffect(() => {
    const categories = [];
    if (props.data.categories !== undefined) {
      props.data.categories.map(category => categories.push(category.name));
    }
    setNames(categories);
  }, [props.data]);

  return (
    <React.Fragment>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        className={classes.padding}
      >
        Kategorie
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Wybierz z listy</InputLabel>
        <Select
          multiple
          value={chooseNames}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <Box component="div" className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, chooseNames, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
export default graphql(categoryQuery)(Categories);
