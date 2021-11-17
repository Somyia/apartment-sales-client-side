import { Alert, Button, Container, TextField, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { createAccount, user, authError, isLoading } = useAuth();

    const history = useHistory();

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleCreateAccount = e => {
        e.preventDefault();
        if (loginData.password === loginData.password2) {
            createAccount(loginData.email, loginData.password, loginData.name, history);
        }
    }

    return (
        <Container className="access-area">
            <div className="access-form">
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Sign Up
                    </Typography>
                </div>
                {isLoading ? <CircularProgress /> :
                    <form onSubmit={handleCreateAccount}>
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            label="Your Name"
                            type="text"
                            name="name"
                            onBlur={handleInput}
                        /> <br />
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
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onBlur={handleInput}
                        /> <br />
                        <Button type="submit" className="home-btn" variant="outlined">Register</Button> <br />

                        <NavLink className="access-info" to="/login">
                            <Button variant="text">Already have an account? Sign In</Button>
                        </NavLink>

                    </form>
                }
                {user?.uid && <Alert severity="success">User Account created successfully</Alert>}

                {authError && <Alert severity="error">{authError}</Alert>}
            </div>
        </Container>
    );
};

export default Register;