import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './About.css';
import { styled } from '@mui/system';

const AboutImage = styled('div')({

})

const About = () => {
    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ py: 6 }}>
                {/* overview section */}

                <div className="about-section flex-display">
                    <div className="about-left">
                        <div className="flex-display">
                            <div style={{ width: "75%", height: "300px" }}>
                                <div className="about-image-left">
                                    <img style={{ width: '100%' }} src="https://iili.io/E7r55N.jpg" alt="" />
                                </div>
                            </div>
                            <div style={{ width: "75%", height: "300px" }}>

                                <div className="about-image-right">
                                    <img style={{ width: '100%', height: "100%" }} src="https://iili.io/E7r7eI.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <div>
                            <h6>Overview</h6>
                            <h1>Modern Spaces And Premium Apartment</h1>
                            <p>Staying calm, composed and maintaining strong self esteem in today’s tough environment can be difficult but is not impossible if you follow a few simple guidelines.<br /> <br />

                                Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your</p>
                        </div>
                    </div>
                </div>


            </Container>
            <p style={{ clear: "both" }}></p>
        </Box >

    );
};

export default About;