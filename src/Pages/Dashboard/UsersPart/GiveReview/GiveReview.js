import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import useAuth from '../../../../hooks/useAuth';


const GiveReview = () => {
    const [value, setValue] = useState(0);
    const [review, setReview] = useState({});
    const { user } = useAuth();


    const handleInput = e => {
        const field = e.target.name;
        let value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        console.log(newReview)
        setReview(newReview);
    }


    const handleReviewUs = e => {
        const postReview = {
            ...review,
            name: review.name,
            photo: review.photo,
            review: review.review
        }
        fetch('https://quiet-sea-21548.herokuapp.com/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your Review has placed successfully');

                }
            })

    }

    return (
        <>
            <Box sx={{ my: 6 }}>
                <Container sx={{ my: 6 }}>
                    {/* gallery title  */}
                    <div>
                        <Typography className="title" variant="h3" gutterBottom component="div">
                            Tell Something About Us
                </Typography>
                    </div>
                    <Grid container spacing={2}>
                        <div style={{ width: '60%', margin: 'auto' }}>
                            <Grid item xs={12} md={12}>
                                <form className="hometex-form" onSubmit={handleReviewUs}>
                                    <TextField
                                        className="input-field"
                                        id="outlined-password-input"
                                        defaultValue={user.displayName}
                                        label="Your Name"
                                        type="text"
                                        name="name"
                                        onBlur={handleInput}
                                    /> <br />
                                    <TextField
                                        required
                                        className="input-field"
                                        id="outlined-password-input"
                                        label="Your Photo"
                                        type="text"
                                        name="photo"
                                        onBlur={handleInput}
                                    /> <br />

                                    <TextField
                                        required
                                        className="input-field"
                                        id="outlined-multiline-static"
                                        label="Review"
                                        name="review"
                                        multiline
                                        rows={4}
                                        onBlur={handleInput}
                                    /> <br />
                                    <label>Give us rating</label>
                                    <br />
                                    <Rating
                                        name="rating"
                                        value={value}
                                        onBlur={handleInput}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    /> <br /> <br />
                                    <Button type="submit" className="home-btn" variant="outlined">Review Us</Button>
                                </form>
                            </Grid>
                        </div>
                    </Grid>
                </Container>
            </Box>

        </>
    );
};

export default GiveReview;