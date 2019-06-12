import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


const Drawer = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const useStyles = makeStyles(theme => ({
        root: {
            width: "auto",
            flexGrow: "1"
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, [])
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.root}
            >
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <Icon className={clsx(classes.icon, "far fa-user")} />
                    Konto
            </Button>
            </Grid>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose} component={Link} to="/profile">Profil</MenuItem>
                <MenuItem component={Link} to="/auth/login"
                    onClick={() => {
                        localStorage.setItem('usertoken', "")
                        handleClose()
                    }}>Wyloguj</MenuItem>
            </Menu>
        </React.Fragment>
    )
}

export default Drawer;