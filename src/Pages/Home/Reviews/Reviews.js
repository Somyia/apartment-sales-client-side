import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import img from '../../../a.jpg';
import './Reviews.css';
import { Container, Grid, Typography } from '@mui/material';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mighty-sea-02606.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Clients Reviews
                    </Typography>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    {
                        reviews.slice(0, 3).map(review => (
                            <Review
                                key={review._id}
                                review={review}
                            ></Review>
                        ))}
                </Grid>
            </Container>

        </Box>
    );
};

export default Reviews;