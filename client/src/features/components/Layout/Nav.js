import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    console.log(props)
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('navList')) || 0);
    const handleChange = (e, newValue) => {
        setValue(newValue);
        localStorage.setItem('navList', JSON.stringify(newValue))
    }


    return (
        <nav>
            <AppBar position='static' color='default'>
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="Główna" component={Link} to="/" />
                    <Tab label="O mnie" component={Link} to="/aboutme" />
                    <Tab label="Opinie" component={Link} to="/opinions" />
                    <Tab label="Kontakt" component={Link} to="/contact" />
                </Tabs>
            </AppBar>
        </nav>
    )
}

export default Nav