import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';

const AddApartmentInfo = () => {
    const [apartmentInfo, setApartmentInfo] = useState({});
    const [success, setSuccess] = useState(false);

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newApartmentInfo = { ...apartmentInfo };
        newApartmentInfo[field] = value;
        setApartmentInfo(newApartmentInfo);
    }

    const handleAddApartmentInfo = e => {
        const apartment = {
            apartment_name: apartmentInfo.apartment_name,
            location: apartmentInfo.location,
            floor_no: apartmentInfo.floor_no,
            bedrooms: apartmentInfo.bedrooms,
            bathrooms: apartmentInfo.bathrooms,
            kitchen: apartmentInfo.kitchen,
            garage: apartmentInfo.garage,
            apartment_photo: apartmentInfo.apartment_photo,
            description: apartmentInfo.description
        }
        fetch('https://mighty-sea-02606.herokuapp.com/apartments_info', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(apartment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Apartment info is added successfully');
                    setSuccess(true)
                    console.log(data)
                }
            })
        e.preventDefault();

    }
    return (

        <Box sx={{ my: 6 }}>
            <Container sx={{ my: 4 }}>
                {/* gallery title  */}
                <div className="dashboard-title">
                    <h4>Add New Apartment Info</h4>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Box style={{ width: '90%', margin: '50px auto' }}>
                        <form onSubmit={handleAddApartmentInfo}>
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Apartment Name"
                                type="text"
                                name="apartment_name"
                                onBlur={handleInput}
                            />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Apartment Location"
                                type="text"
                                name="location"
                                onBlur={handleInput}
                            /> <br />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Floor"
                                type="text"
                                name="floor_no"
                                onBlur={handleInput}
                            />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Bedrooms"
                                type="number"
                                name="bedrooms"
                                onBlur={handleInput}
                            /> <br />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Bathrooms"
                                type="number"
                                name="bathrooms"
                                onBlur={handleInput}
                            />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Kitchen"
                                type="number"
                                name="kitchen"
                                onBlur={handleInput}
                            /> <br />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Garage"
                                type="number"
                                name="garage"
                                onBlur={handleInput}
                            />
                            <TextField
                                required
                                sx={{ m: 1, width: '45%' }}
                                id="outlined-password-input"
                                label="Apartment Picture"
                                type="text"
                                name="apartment_photo"
                                onBlur={handleInput}
                            /> <br />

                            <TextField
                                required
                                sx={{ m: 1, width: '92%' }}
                                id="outlined-multiline-static"
                                label="Short Description"
                                name="description"
                                multiline
                                rows={4}
                                onBlur={handleInput}
                            /> <br />
                            <button style={{ marginLeft: '10px', marginBottom: '15px' }} type="submit" className="home-btn" variant="outlined">Add Apartment Info</button>
                        </form>
                        {success && <Alert severity="success">New Apartment infor is added successfully</Alert>}
                    </Box>
                </Grid>
            </Container>
        </Box>

    );
};

export default AddApartmentInfo;