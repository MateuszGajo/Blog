import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const AboutMe = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      marginTop: "50px"
    },
    image: {
      display: "block",
      width: "100%",
      height: "100%"
    },
    paragraphPadding: {
      paddingTop: "30px"
    }
  }));

  const classes = useStyles();

  return (
    <Container fixed className={classes.container}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4}>
          <img
            src="assets/authorBlog.jpg"
            alt="zdjecie"
            className={classes.image}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typography variant="p" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            officiis, eligendi harum numquam enim blanditiis eius nostrum
            dolores facere voluptatibus amet qui ab, vitae error? Ipsam dicta
            numquam cum veniam.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non, officiis, eligendi harum numquam enim
            blanditiis eius nostrum dolores facere voluptatibus amet qui ab,
            vitae error? Ipsam dicta numquam cum veniam.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Non, officiis, eligendi harum
            numquam enim blanditiis eius nostrum dolores facere voluptatibus
            amet qui ab, vitae error? Ipsam dicta numquam cum veniam.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Non, officiis, eligendi
            harum numquam enim blanditiis eius nostrum dolores facere
            voluptatibus amet qui ab, vitae error? Ipsam dicta numquam cum
            veniam.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <Typography variant="h2" component="h3" align="center">
          Dlaczego taki blog?
        </Typography>
        <Typography
          variant="p"
          component="p"
          className={classes.paragraphPadding}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          beatae! Nam delectus rem beatae! Veniam exercitationem libero numquam
          nostrum? Itaque tempore soluta sequi perspiciatis nesciunt et,
          doloribus adipisci nostrum excepturi.
        </Typography>
      </Grid>
    </Container>
  );
};

export default AboutMe;
