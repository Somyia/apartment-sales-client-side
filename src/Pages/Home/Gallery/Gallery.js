import * as React from 'react';
import Box from '@mui/material/Box';
import img from '../../../a.jpg';
import './Gallery.css';
import { Container, Typography } from '@mui/material';

export default function Gallery() {
    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Apartment Gallery
                    </Typography>
                </div>
            </Container>

            {/* gallery  */}

            <div className="gallery-wrapper">

                {itemData.map((item) => (

                    <div className="single-image">
                        <img
                            src={item.img}
                            loading="lazy"
                        />
                    </div>

                ))}
            </div>

        </Box>
    );
}

const itemData = [
    {
        img: 'https://iili.io/5NPga4.jpg',

    },
    {
        img: 'https://iili.io/5NwvJs.jpg',

    },
    {
        img: 'https://iili.io/5Nwegn.jpg',
    },
    {
        img: 'https://iili.io/5Nwiq7.jpg',
    },
    {
        img: 'https://iili.io/5Nws19.jpg',
    },
    {
        img: 'https://iili.io/5Nw85G.jpg',
    },
    {
        img: 'https://iili.io/5Nwrzl.jpg',
    },
    {
        img: 'https://iili.io/5Nw6sS.jpg',
    },
    {
        img: 'https://iili.io/5NwUb4.jpg',
    }
];