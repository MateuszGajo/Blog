import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import jwt_deocde from "jwt-decode";

const Profile = () => {
  const useStyles = makeStyles(theme => ({
    card: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "30px",
      minWidth: "50vw"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      minWidth: "200px"
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
  }));

  const classes = useStyles();
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = localStorage.usertoken;
    const decode = jwt_deocde(token);
    setUser({ ...decode });
  }, []);

  return (
    <Container fixed>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Imię
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.firstName}
              </Typography>
              <Typography component="h5" variant="h5">
                Nazwisko
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.lastName}
              </Typography>
              <Typography component="h5" variant="h5">
                Email
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="/assets/user.png"
            title="Unknow user"
            align="right"
          />
        </Card>
      </Grid>
    </Container>
  );
};
export default Profile;
