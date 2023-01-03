import React, {useContext} from 'react';
import classes from './NavBar.module.css'
import {Link} from "react-router-dom";
import CreateButton from "../button/CreateButton";
import {AuthContext} from "../../../context";

const NavBar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navBar}>
            <div className={classes.navBar__items}>
                <Link className={classes.navBar__item} to='/about'>About Us</Link>
                <Link className={classes.navBar__item} to='/posts'>Posts</Link>
                {
                    isAuth
                        ? <CreateButton onClick={logout}>Quit</CreateButton>
                        : <CreateButton>
                            <Link to='/login'>Log In</Link>
                        </CreateButton>
                }
            </div>
        </div>
    );
};

export default NavBar;