import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavBar from "./components/UI/NavBar/NavBar";
import ErrorPage from "./pages/ErrorPage";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";


function App() {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>

    );
}


export default App;
