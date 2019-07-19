/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { graphql } from "react-apollo";
import userMutation from "../../mutation/userMutation";
import { Redirect } from "react-router-dom";

const Register = props => {
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
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, password, email } = values;
    if (firstName.length < 1)
      return setErrors({ firstName: "Za krótkie imie" });
    else if (lastName.length < 1)
      return setErrors({ lastName: "za krótkie nazwisko" });
    else if (
      !/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(email)
    )
      return setErrors({
        email: "Email powinien mieć format Janek@Przykład.pl"
      });
    else if (password.length < 6 || password.length > 20)
      return setErrors({
        password: "Długośc hasła musi być od 6 do 20 znaków"
      });
    else setErrors({});

    props.userMutation({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      }
    });
    setValues({ firstName: "", lastName: "", password: "", email: "" });
    props.history.push("/auth/login");
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
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container direction="column" alignItems="center" justify="center">
          <TextField
            id="outlined-name"
            label="Imię"
            name="firstName"
            className={classes.textField}
            value={values.firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            variant="outlined"
          />
          {errors.firstName ? (
            <Typography variant="body1" color="error" align="center">
              {errors.firstName}
            </Typography>
          ) : null}
          <TextField
            id="outlined-name"
            label="Nazwisko"
            name="lastName"
            className={classes.textField}
            value={values.lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            variant="outlined"
          />
          {errors.lastName ? (
            <Typography variant="body1" color="error" align="center">
              {errors.lastName}
            </Typography>
          ) : null}
          <TextField
            id="outlined-name"
            label="Email"
            name="email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
            variant="outlined"
          />
          {errors.email ? (
            <Typography variant="body1" color="error" align="center">
              {errors.email}
            </Typography>
          ) : null}
          <TextField
            id="outlined-name"
            label="Hasło"
            name="password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
            variant="outlined"
          />
          {errors.password ? (
            <Typography variant="body1" color="error" align="center">
              {errors.password}
            </Typography>
          ) : null}
          <Button
            color="primary"
            variant="contained"
            className={classes.marginTop}
            type="submit"
          >
            Rejstracja
          </Button>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.marginTop}
          >
            Masz już konto?{" "}
            <a href="/auth/login" className={classes.auth}>
              Zaloguj się
            </a>
          </Typography>
        </Grid>
      </form>
    </Grid>
  );
};

export default graphql(userMutation, { name: "userMutation" })(Register);
