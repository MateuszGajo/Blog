import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { login } from "../../functions/userFunction";
import { Redirect } from "react-router-dom";
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
    },
    auth: {
      textDecoration: "none",
      color: "#f50057",
      fontWeight: "bold"
    }
  }));

  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(values)
      .then(resp => {
        if (resp) setValues({ email: "", password: "" });
        else setError("Nieprawidłowe dane");
      })
      .catch(err => {
        console.log("i am here");
      });
  };
  if (localStorage.usertoken) return <Redirect to="/" />;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.marginTop}
    >
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container direction="column" alignItems="center" justify="center">
          <TextField
            label="email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="hasło"
            type="password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
            variant="outlined"
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.marginTop}
          >
            Zaloguj
          </Button>
          {error ? (
            <Typography variant="body1" color="error" align="center">
              {error}
            </Typography>
          ) : null}
          <Typography
            variant="body1"
            gutterBottom
            className={classes.marginTop}
          >
            Nie masz jeszcze konta?{" "}
            <Link href={"/auth/register"} className={classes.auth}>
              Zarejstruj się!
            </Link>
          </Typography>
        </Grid>
      </form>
    </Grid>
  );
};

export default Login;
