import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const CardPrimary = ({ item }) => {
  const useStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
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
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={item.title}
        subheader={item.date}
      />
      <CardActionArea component={Link} to={`/posts/${item.id}`}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.title}
        />
      </CardActionArea>
      <CardContent>
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
    </Card>
  );
};

export default CardPrimary;
