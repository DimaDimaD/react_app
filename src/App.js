import React from 'react';
import './styles/App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NavBar from "./components/UI/NavBar/NavBar";
import ErrorPage from "./pages/ErrorPage";


function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/posts"
                    element={<Posts />}
                />
                <Route
                    path="/error"
                    element={<ErrorPage />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/error" />}
                />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
