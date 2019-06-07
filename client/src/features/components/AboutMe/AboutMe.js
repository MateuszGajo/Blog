import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const AboutMe = () => {


    const useStyles = makeStyles(theme => ({
        container: {
            marginTop: '50px'
        },
        image: {
            display: 'block',
            width: "100%",
            height: "100%"
        }
    }));
    const classes = useStyles();

    return (
        <Container fixed className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img src='assets/authorBlog.jpg' alt="zdjecie" className={classes.image} />
                </Grid>
                <Grid item xs={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, officiis, eligendi harum numquam enim blanditiis eius nostrum dolores facere voluptatibus amet qui ab, vitae error? Ipsam dicta numquam cum veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, officiis, eligendi harum numquam enim blanditiis eius nostrum dolores facere voluptatibus amet qui ab, vitae error? Ipsam dicta numquam cum veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, officiis, eligendi harum numquam enim blanditiis eius nostrum dolores facere voluptatibus amet qui ab, vitae error? Ipsam dicta numquam cum veniam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, officiis, eligendi harum numquam enim blanditiis eius nostrum dolores facere voluptatibus amet qui ab, vitae error? Ipsam dicta numquam cum veniam.</Grid>
            </Grid>
            <Grid item xs={12}>
                <h3 style={{ textAlign: 'center' }}>Dlaczego taki blog? </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae! Nam delectus rem beatae! Veniam exercitationem libero numquam nostrum? Itaque tempore soluta sequi perspiciatis nesciunt et, doloribus adipisci nostrum excepturi.</p>
            </Grid>
        </Container>


    )
}

export default AboutMe;