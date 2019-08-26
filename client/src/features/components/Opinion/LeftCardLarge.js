import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const LeftCardLarge = () => {
  const useStyles = makeStyles(theme => ({
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
    boxLeft: {
      paddingTop: "50px",
      paddingLeft: "50px"
    }
  }));
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8} lg={6} className={classes.boxLeft}>
      <Paper>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image="/assets/monika.jpg"
            title="Live from space album cover"
          />
          <CardContent>
            <Box component="div" className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5" align="right">
                  Monika Kościeszna
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  align="right"
                >
                  Project manager
                </Typography>
              </CardContent>
              <Typography color="textSecondary" align="right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem et, excepturi ipsam accusamus dolor expedita
                vitae reiciendis a molestiae? Aliquam est obcaecati asperiores
                iste dolor beatae sit iusto eum suscipit!
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default LeftCardLarge;
