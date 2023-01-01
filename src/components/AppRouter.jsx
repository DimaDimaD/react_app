import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map(route => <Route
                    path={route.path}
                    exact={route.exact}
                    element={<route.element />}
                    />)}
                {/*<Route*/}
                {/*    path="/about"*/}
                {/*    element={<About />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    exact path="/posts"*/}
                {/*    element={<Posts />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path='/posts/:id'*/}
                {/*    element={<PostIdPage />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/error"*/}
                {/*    element={<ErrorPage />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="/"*/}
                {/*    element={<Navigate to="/about" />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*    path="*"*/}
                {/*    element={<Navigate to="/error" />}*/}
                {/*/>*/}
            </Routes>
        </div>
    );
};

export default AppRouter;