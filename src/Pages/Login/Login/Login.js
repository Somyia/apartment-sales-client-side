import { Button, Container, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUser, user, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSignIn = e => {
        e.preventDefault();
        signInUser(loginData.email, loginData.password, location, history);
    }

    return (
        <Container className="access-area">
            <div className="access-form">
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Sign In
                    </Typography>
                </div>
                {isLoading ? <CircularProgress /> :
                    <form onSubmit={handleSignIn}>
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleInput}
                        /> <br />
                        <Button type="submit" className="home-btn" variant="outlined">Login</Button> <br />
                        <NavLink className="access-info" to="/register">
                            <Button variant="text">New User? Sign Up</Button>
                        </NavLink>
                    </form>
                }
                {user?.uid && <Alert severity="success">Login successfully</Alert>}

                {authError && <Alert severity="error">{authError}</Alert>}
            </div>
        </Container>
    );
};

export default Login;