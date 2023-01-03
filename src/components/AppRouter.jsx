import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes,} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)

    return (
            isAuth
            ? <Routes>
            {privateRoutes.map(route => <Route
                path={route.path}
                exact={route.exact}
                element={<route.element />}
                />)}
            </Routes>

            : <Routes>
            {publicRoutes.map(route => <Route
                path={route.path}
                exact={route.exact}
                element={<route.element />}
            />)}
             </Routes>
    );
};

export default AppRouter;