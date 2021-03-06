import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const NavSmall = () => {
  const drawerWidth = "70vw";

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    },
    paddingList: {
      marginTop: "30px"
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navValue = [
    { name: "Główna", link: "/" },
    { name: "O mnie", link: "/aboutme" },
    { name: "Opinie", link: "/opinions" },
    { name: "Kontakt", link: "/contact" }
  ];

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h4" noWrap className={classes.title}>
            Blog
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {navValue.map(item => {
            return (
              <ListItem
                button
                onClick={handleDrawerClose}
                className={classes.paddingList}
                component={Link}
                to={item.link}
                key={item.name}
              >
                <ListItemText align="center">
                  <Typography variant="h4">{item.name}</Typography>
                </ListItemText>
              </ListItem>
            );
          })}
          {localStorage.usertoken ? (
            <React.Fragment>
              <ListItem
                button
                onClick={handleDrawerClose}
                className={classes.paddingList}
                component={Link}
                to={"/profile"}
              >
                <ListItemText align="center">
                  <Typography variant="h4">Profil</Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  handleDrawerClose();
                  localStorage.setItem("usertoken", "");
                }}
                className={classes.paddingList}
                component={Link}
                to={"/auth/login"}
              >
                <ListItemText align="center">
                  <Typography variant="h4">Wyloguj</Typography>
                </ListItemText>
              </ListItem>
            </React.Fragment>
          ) : (
            <ListItem
              button
              onClick={handleDrawerClose}
              className={classes.paddingList}
              component={Link}
              to={"/auth/login"}
            >
              <ListItemText align="center">
                <Typography variant="h4">Zaloguj</Typography>
              </ListItemText>
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default NavSmall;
