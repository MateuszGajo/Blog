import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

const LeftCardSmall = () => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/monika.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Monika Kościeszna
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" align="center">
            Project manager
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem et, excepturi ipsam accusamus dolor expedita vitae
            reiciendis a molestiae? Aliquam est obcaecati asperiores iste dolor
            beatae sit iusto eum suscipit!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LeftCardSmall;
