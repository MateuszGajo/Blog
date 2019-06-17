import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import { graphql } from "react-apollo";
//components
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";
import postQuery from "../../queries/postQuery";
import Chips from "./Chips";

const Home = props => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: "100%",
      padding: "50px",
      alignItems: "center",
      margin: 0
    },
    padding: {
      paddingTop: "50px !important"
    },
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
  const takeCurrentPosts = props => {
    setCurrentPosts(props);
  };

  useEffect(() => {
    if (!props.post.loading) {
      setCurrentPosts(props.post.posts);
      setPosts(props.post.posts);
      setLoading(true);
      props.post.refetch({ query: postQuery });
    }
  }, [props.post.posts]);

  return (
    <Grid container spacing={2} className={classes.card} justify="center">
      <Chips posts={posts} takeCurrentPosts={takeCurrentPosts} />
      {loading ? (
        <React.Fragment>
          {currentPosts.slice(0, 2).map(item => {
            return (
              <Grid item md={6} sm={12} key={item.id}>
                <CardPrimary item={item} />
              </Grid>
            );
          })}
          {currentPosts.slice(2, currentPosts.length).map(item => {
            return (
              <Grid
                item
                sm={12}
                md={4}
                className={classes.padding}
                key={item.id}
              >
                <CardSecondary item={item} />
              </Grid>
            );
          })}
        </React.Fragment>
      ) : (
        <div>Ładowanie...</div>
      )}
    </Grid>
  );
};

export default graphql(postQuery, { name: "post" })(Home);
