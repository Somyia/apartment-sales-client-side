import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
import Apartment from '../../Shared/Apartment/Apartment';
import { NavLink } from 'react-router-dom';

const HomeApartments = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('https://quiet-sea-21548.herokuapp.com/apartments_info')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, []);

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Apartments for You
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {
                        apartments.slice(0, 6).map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>
                        )}
                </Grid>
                <div style={{ textAlign: "center", margin: '40px 0' }}>
                    <NavLink to="/allApartments">
                        <Button className="home-btn" variant="outlined">Find More Apartments</Button>
                    </NavLink>
                </div>
            </Container>
        </Box>
    );
};

export default HomeApartments;