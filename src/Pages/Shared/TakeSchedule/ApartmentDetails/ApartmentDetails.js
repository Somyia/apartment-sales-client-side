import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

const ApartmentDetails = (props) => {
    const { apartment_photo, apartment_name, location, description, bedrooms, bathrooms, kitchen, garage, area, price } = props.apartmentInfo;

    return (
        <Box sx={{ my: 2 }}>
            <Container sx={{ my: 4 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Apartment Information
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <img style={{ width: '100%' }} src={apartment_photo} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <h1>{apartment_name}</h1>
                            <h6>{location}</h6>
                            <p>{description}</p>
                            <h5>BEDROOMS : {bedrooms}</h5>
                            <h5>BATHROOMS : {bathrooms}</h5>
                            <h5>KITCHEN : {kitchen}</h5>
                            <h5>GARAGE : {garage}</h5>
                            <h5>AREA : {area} SQUARE FEETS</h5>
                            <h5>PRICE : ${price}</h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ScheduleForm apartmentInfo={props.apartmentInfo}></ScheduleForm>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ApartmentDetails;