import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import LeftCardLarge from "./LeftCardLarge";
import RightCardLarge from "./RightCardLarge";
import LeftCardSmall from "./LeftCardSmall";
import RightCardSmall from "./RightCardSmall";

const Opinions = () => {
  const useStyles = makeStyles(theme => ({
    boxLeft: {
      paddingTop: "50px",
      paddingLeft: "50px"
    },
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: "100%"
    },
    playIcon: {
      height: 38,
      width: 38
    },
    textCover: {
      padding: "10px"
    }
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-start"
      className={classes.boxLeft}
    >
      <Hidden smDown>
        <LeftCardLarge />
      </Hidden>
      <Hidden smDown>
        <RightCardLarge />
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.boxRight}
        >
          <LeftCardSmall />
          <RightCardSmall />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Opinions;
