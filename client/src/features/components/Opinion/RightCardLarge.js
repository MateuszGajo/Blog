import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const RightCardLarge = () => {
  const useStyles = makeStyles(theme => ({
    boxRight: {
      paddingTop: "50px",
      paddingRight: "50px"
    },
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    cover: {
      width: "100%"
    },
    textCover: {
      padding: "15px"
    }
  }));
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-end"
      className={classes.boxRight}
    >
      <Grid item xs={12} md={8} lg={6}>
        <Paper>
          <Card className={classes.card}>
            <Box component="div" className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  Sławomir Mróż
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Przedstawiciel Handlowy
                </Typography>
              </CardContent>
              <Typography color="textSecondary" className={classes.textCover}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem et, excepturi ipsam accusamus dolor expedita
                vitae reiciendis a molestiae? Aliquam est obcaecati asperiores
                iste dolor beatae sit iusto eum suscipit!
              </Typography>
            </Box>
            <CardMedia
              className={classes.cover}
              image="/assets/slawomir.jpg"
              title="Live from space album cover"
            />
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RightCardLarge;
