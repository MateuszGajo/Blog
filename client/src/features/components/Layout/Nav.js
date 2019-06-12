import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import NavSmall from "./NavSmall";
import Hidden from "@material-ui/core/Hidden";

const Nav = props => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (props.location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/aboutme":
        setValue(1);
        break;
      case "/opinions":
        setValue(2);
        break;
      case "/contact":
        setValue(3);
        break;
      case "/auth/login":
        setValue(4);
        break;
      case "/profile":
        setValue(4)
        break;
      default:
        setValue(null);
        break;
    }
  }, [props.location.pathname]);
  return (
    <nav>
      <Hidden xsDown>
        <AppBar position="static" color="default">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            <Tab label="Główna" component={Link} to="/" />
            <Tab label="O mnie" component={Link} to="/aboutme" />
            <Tab label="Opinie" component={Link} to="/opinions" />
            <Tab label="Kontakt" component={Link} to="/contact" />
            {localStorage.usertoken ?
              <Tab label="Moje Konto" component={Link} to="/profile" /> :
              <Tab label="Logowanie" component={Link} to="/auth/login" />
            }

          </Tabs>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        <NavSmall />
      </Hidden>
    </nav>
  );
};

export default Nav;
