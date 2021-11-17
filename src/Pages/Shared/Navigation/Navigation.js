import { Button, List } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <List>
            <NavLink className="menu-item" to="/home">
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink className="menu-item" to="/allApartments">
                <Button color="inherit">Apartments</Button>
            </NavLink>
            { user?.uid && <NavLink className="menu-item" to="/dashboard">
                <Button color="inherit">Dashboard</Button>
            </NavLink>}
            {user?.uid ? <NavLink className="menu-item" to="/">
                <Button onClick={logOut} color="inherit">LogOut</Button>
                <Button style={{ color: '#c9b47f' }} variant="text">{user.displayName}</Button>
            </NavLink> :
                <NavLink className="menu-item" to="/login">
                    <Button color="inherit">SignIn</Button>
                </NavLink>}
        </List>
    );
};

export default Navigation;