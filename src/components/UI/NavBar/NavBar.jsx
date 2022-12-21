import React from 'react';
import classes from './NavBar.module.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={classes.navBar}>
            <div className={classes.navBar__items}>
                <Link to='/about'>About Us</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default NavBar;