import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import LeftCardLarge from "./LeftCardLarge";
import RightCardLarge from "./RightCardLarge";
import LeftCardSmall from "./LeftCardSmall";
import RightCardSmall from "./RightCardSmall";

const Opinions = () => {
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-start"
    >
      <Hidden smDown>
        <LeftCardLarge />
      </Hidden>
      <Hidden smDown>
        <RightCardLarge />
      </Hidden>
      <Hidden mdUp>
        <Grid container direction="column" justify="center" alignItems="center">
          <LeftCardSmall />
          <RightCardSmall />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Opinions;
