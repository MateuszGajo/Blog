import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

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
      default:
        setValue(null);
        break;
    }
  }, []);
  return (
    <nav>
      <AppBar position="static" color="default">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Główna" component={Link} to="/" />
          <Tab label="O mnie" component={Link} to="/aboutme" />
          <Tab label="Opinie" component={Link} to="/opinions" />
          <Tab label="Kontakt" component={Link} to="/contact" />
        </Tabs>
      </AppBar>
    </nav>
  );
};

export default Nav;
