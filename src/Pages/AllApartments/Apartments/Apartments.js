import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import Apartment from '../../Shared/Apartment/Apartment';

const Apartments = () => {
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
                        apartments.map(apartment => <Apartment
                            key={apartment._id}
                            apartment={apartment}
                        ></Apartment>
                        )}
                </Grid>
            </Container>
        </Box>
    );
};

export default Apartments;