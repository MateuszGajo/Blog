import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItems from "./ListItems";
import { graphql } from "react-apollo";
import postDetailQuery from "../../queries/postDetailQuery";
const Detail = props => {
  const { post } = props.data;

  const useStyles = makeStyles(theme => ({
    container: {
      padding: "60px 40px 40px"
    },
    photo: {
      maxHeight: "300px",
      width: "100%",
      display: "block"
    },
    widthBlock: {
      flexBasis: "auto"
    }
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      {post ? (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              {post.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.widthBlock}>
            <img src={post.image} alt="Author" className={classes.photo} />
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.container}
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" align="center" className={classes.title}>
                Składniki
              </Typography>
              {post.products.map(product => (
                <ListItems key={product} item={product} />
              ))}
            </Grid>
            <Grid item xs={12} sm={8}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  align="center"
                  className={classes.title}
                >
                  Przygotowanie
                </Typography>
                {post.recipe.map(recipe => (
                  <ListItems key={recipe} item={recipe} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h4" component="p" align="center">
          Ładowanie...
        </Typography>
      )}
    </React.Fragment>
  );
};

export default graphql(postDetailQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(Detail);
