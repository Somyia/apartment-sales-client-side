import { Grid, Rating } from '@mui/material';
import React from 'react';
import './Review.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../../../a.jpg';

const Review = (props) => {
    const { name, photo, rating, review } = props.review;

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className="single-reviwe">
                <CardActionArea>

                    <CardContent>
                        <Typography className="review" variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                    </CardContent>
                    <div className="flex-display review-bottom">
                        <CardMedia
                            component="img"
                            height="140"
                            image={photo}
                            alt="green iguana"
                            className="client-image"
                        />
                        <div>
                            <Typography className="client-name" gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Rating name="read-only" value={rating} readOnly />
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Review;