import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Opinions = () => {
    const useStyles = makeStyles(theme => ({
        boxRight: {
            paddingTop: "50px",
            paddingRight: "50px"
        },
        boxLeft: {
            paddingTop: "50px",
            paddingLeft: "50px"
        },
        card: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '100%',
        },
        playIcon: {
            height: 38,
            width: 38,
        },
        textCover: {
            padding: '10px'
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
            <Grid item xs={6}>
                <Paper>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image="/assets/photo.jpg"
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5" align="right">
                                    Monika Kościeszna
            </Typography>
                                <Typography variant="subtitle1" color="textSecondary" align="right">
                                    Project manager
            </Typography>
                            </CardContent>
                            <Typography color="textSecondary" className={classes.textCover} align="right">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem et, excepturi ipsam accusamus dolor expedita vitae reiciendis a molestiae? Aliquam est obcaecati asperiores iste dolor beatae sit iusto eum suscipit!
                </Typography>
                        </div>

                    </Card>
                </Paper>
            </Grid>
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="flex-end"
                className={classes.boxRight}
            >
                <Grid item xs={6}>
                    <Paper>
                        <Card className={classes.card}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5" >
                                        Sławomir Mróż
            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" >
                                        Przedstawiciel Handlowy
            </Typography>
                                </CardContent>
                                <Typography color="textSecondary" className={classes.textCover} >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem et, excepturi ipsam accusamus dolor expedita vitae reiciendis a molestiae? Aliquam est obcaecati asperiores iste dolor beatae sit iusto eum suscipit!
                </Typography>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image="/assets/photo.jpg"
                                title="Live from space album cover"
                            />
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Opinions