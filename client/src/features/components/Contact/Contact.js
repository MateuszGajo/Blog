import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Icon from '@material-ui/core/Icon';

const Contact = () => {
    useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 48px)',
            maxWidth: '100vw',
            margin: 0
        },
        icon: {
            margin: theme.spacing(2),
            color: '#f50057'
        }
    }));
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
            spacing={5}
        >
            <Grid item xs={12}>
                <Typography variant="h1" align="center">Kontakt</Typography>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <CardContent align="center">
                            <Icon className={clsx(classes.icon, 'fas fa-home')} />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Warszwa ul kanilizacyjna 32c
          </Typography>

                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <CardContent align="center">
                            <Icon className={clsx(classes.icon, 'fas fa-phone')} />
                            <Typography variant="body2" color="textSecondary" component="p">
                                513-522-121
          </Typography>

                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>
                    <Card>
                        <CardContent align="center">
                            <Icon className={clsx(classes.icon, 'fas fa-envelope')} />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Warszawa@mygmail.com
          </Typography>

                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Contact;