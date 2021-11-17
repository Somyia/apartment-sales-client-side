import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageTour = () => {
    const [apartments, setApartments] = useState([]);

    const handleDelete = id => {
        const deletion = window.confirm('Are you sure to delete');
        if (deletion) {
            fetch(`https://quiet-sea-21548.herokuapp.com/apartments_info/${id}`, {
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
        fetch('https://quiet-sea-21548.herokuapp.com/apartments_info')
            .then(res => res.json())
            .then(data => setApartments(data))
    }, [apartments]);

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        My Schedule
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>


                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="apartment-table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Apartment</TableCell>
                                        <TableCell align="right">Area</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {apartments.map((apartment) => (
                                        <TableRow
                                            key={apartment._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <h5>{apartment.apartment_name}</h5>
                                                <h6>{apartment.bedrooms} Bedrroms
                                                    {apartment.bathrooms} Bathrooms
                                                    {apartment.kitchen} kitchen
                                                    {apartment.garage} garage
                                                </h6>
                                                {apartment.location}

                                            </TableCell>
                                            <TableCell align="right">{apartment.area} square ft</TableCell>
                                            <TableCell align="right">${apartment.price}</TableCell>
                                            <TableCell align="right"><Button
                                                type="submit" className="home-btn" variant="outlined" onClick={() => handleDelete(apartment._id)}>Delete</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ManageTour;