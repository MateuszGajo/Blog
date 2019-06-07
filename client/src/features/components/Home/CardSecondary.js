import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const CardSecondary = ({ item }) => {
  const useStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: "56.25%"
    },
    avatar: {
      backgroundColor: red[500]
    },
    chip: {
      margin: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea component={Link} to={`/posts/${item.id}`}>
        <CardMedia
          component="img"
          alt={item.title}
          height="140"
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {item.categories.map(category => (
              <Chip
                className={classes.chip}
                key={category}
                label={category}
                color="primary"
                variant="outlined"
              />
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardSecondary;
