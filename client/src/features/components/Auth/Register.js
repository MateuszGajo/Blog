import React from "react";
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
    }
  }));

  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.userMutation({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
      }
    });
    setValues({ firstName: "", lastName: "", password: "", email: "" });
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
            label="FirstName"
            name="firstName"
            className={classes.textField}
            value={values.firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="LastName"
            name="lastName"
            className={classes.textField}
            value={values.lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            variant="outlined"
          />
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
          <TextField
            id="outlined-name"
            label="Password"
            name="password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
            variant="outlined"
          />
          <Button
            color="primary"
            variant="contained"
            className={classes.marginTop}
            type="submit"
          >
            Rejstracja
          </Button>
          <Typography variant="body1" gutterBottom>
            Masz już konto? <a href="/auth/login">Zaloguj się</a>
          </Typography>
        </Grid>
      </form>
    </Grid>
  );
};

export default graphql(userMutation, { name: "userMutation" })(Register);
