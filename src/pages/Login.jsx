import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import CreateButton from "../components/UI/button/CreateButton";
import {AuthContext} from "../context";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const router = useNavigate();

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        router('/posts')
    }

    return (
        <div>
            <h1>Login page</h1>

            <form onSubmit={login}>
                <MyInput type='text' placeholder='Login'/>
                <MyInput type='password' placeholder='Password'/>
                <CreateButton>
                    Log in
                </CreateButton>
            </form>
        </div>
    );
};

export default Login;