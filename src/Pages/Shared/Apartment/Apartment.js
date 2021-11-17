import { Button, Grid } from '@mui/material';
import React from 'react';
import './Apartment.css';
import img from '../../../a.jpg';
import bed from '../../../bed.png';
import bath from '../../../bath.png';
import kitchens from '../../../kitchen.png';
import garages from '../../../garge.png';
import { NavLink } from 'react-router-dom';


const Apartment = (props) => {
    const { _id, apartment_name, location, floor_no, bathrooms, kitchen, garage, bedrooms, apartment_photo, description } = props.apartment;
    return (
        <Grid item xs={12} sm={12} md={6}>
            <Grid container className="apartment-area">
                <Grid sx={{ height: '200px' }} item xs={3} md={2} className="apartment-info-left">
                    <div className="apartment-info">
                        <div>
                            <img src={bed} alt="bedroom" />
                            <p> {bedrooms} Bedrooms</p>
                        </div>
                        <div>
                            <img src={bath} alt="bedroom" />
                            <p> {bathrooms} Bathrooms</p>
                        </div>
                        <div>
                            <img src={kitchens} alt="bedroom" />
                            <p> {kitchen} Kitchen</p>
                        </div>
                        <div>
                            <img src={garages} alt="bedroom" />
                            <p> {garage} Garage</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9} md={10} className="apartment-image">
                    <img src={apartment_photo} alt="apartment" />
                    <div className="apartment-info-bottom">
                        <div className="overlay"></div>
                        <div>
                            <h4 style={{ margin: '10px 0' }}>{apartment_name}</h4>
                            <small>{location}</small>
                            <p>{description}</p>
                            <NavLink to={`/takeSchedule/${_id}`}>
                                <Button className="home-btn" variant="outlined">Take a Tour</Button>
                            </NavLink>
                        </div>
                    </div>
                </Grid>


            </Grid>
        </Grid>

    );
};

export default Apartment;