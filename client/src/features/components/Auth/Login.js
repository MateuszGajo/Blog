import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import userMutation from "../../mutation/userMutation";

const Login = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      display: "block",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    },
    marginTop: {
      marginTop: "30px"
    }
  }));

  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.marginTop}
    >
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container direction="column" alignItems="center" justify="center">
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Password"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
          />
          <Button
            color="primary"
            variant="contained"
            className={classes.marginTop}
          >
            Zaloguj
          </Button>
          <Typography variant="body1" gutterBottom>
            Nie masz jeszcze konta? <a href="/auth/register">Zarejstruj się</a>
          </Typography>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
