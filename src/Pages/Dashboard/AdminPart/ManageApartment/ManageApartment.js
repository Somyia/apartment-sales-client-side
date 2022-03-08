import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';

const ManageTour = () => {
    const [apartments, setApartments] = useState([]);

    const handleDelete = id => {
        const deletion = window.confirm('Are you sure to delete');
        if (deletion) {
            fetch(`https://mighty-sea-02606.herokuapp.com/apartments_info/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('An Apartment is deleted successfully')
                    }
                })

        }
    }

    useEffect(() => {
        fetch('https://mighty-sea-02606.herokuapp.com/apartments_info')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [apartments]);

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div className="dashboard-title">
                    <h4>Manage Apartment</h4>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>


                        <div>
                            <table className="apartment-table">
                                <thead>
                                    <tr>
                                        <th>Apartment</th>
                                        <th align="right">Area</th>
                                        <th align="right">Price</th>
                                        <th align="right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {apartments.map((apartment) => (
                                        <tr
                                            key={apartment._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <td component="th" scope="row">
                                                <h5>{apartment.apartment_name}</h5>
                                                <h6>{apartment.bedrooms} Bedrroms
                                                    {apartment.bathrooms} Bathrooms
                                                    {apartment.kitchen} kitchen
                                                    {apartment.garage} garage
                                                </h6>
                                                {apartment.location}

                                            </td>
                                            <td align="right">{apartment.area} square ft</td>
                                            <td align="right">${apartment.price}</td>
                                            <td align="right"><button
                                                type="submit" className="home-btn" variant="outlined" onClick={() => handleDelete(apartment._id)}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ManageTour;