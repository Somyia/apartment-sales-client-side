import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../a.jpg';
import './Banner.css';


const Banner = () => {
    return (

        <Grid container className="banner">
            <div className="overlay"></div>
            <Grid item xs={12} md={12}>
                <img width="100%" height="550px" src={img} alt="" />
            </Grid>
            <div className="banner-info">

                <div>
                    <h1>Buy Your Apartment With Hometex</h1>
                    <h4>Modern Apartment Make Your Life Better</h4>
                    <NavLink to="/allApartments">
                        <Button className="home-btn" variant="outlined">Find Your Apartment</Button>
                    </NavLink>
                </div>
            </div>

        </Grid>


    );
};

export default Banner;