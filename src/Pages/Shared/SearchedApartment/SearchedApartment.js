import { Apartment, SearchOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SearchedApartment = () => {
    const [searchData, setSearchData] = useState('');
    const [apartments, setApartments] = useState([]);
    const [searchedApartments, setSearchedApartments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        const inputText = e.target.value;
        setSearchData(inputText);
    }

    useEffect(() => {

        fetch('https://mighty-sea-02606.herokuapp.com/apartments_info')
            .then(res => res.json())
            .then(data => {
                setApartments(data)

            })
    }, []);

    const handleSearch = async () => {
        setIsLoading(true);
        const searchResult = await apartments.filter(apartment => apartment.location.toLowerCase().includes(searchData.toLowerCase()));
        await setSearchedApartments(searchResult)
        setIsLoading(false)
    }
    console.log(searchedApartments)
    return (
        <Box sx={{ my: 8 }}>
            <div className="search-bar">
                <input type="text" onBlur={handleInput} />

                <button onClick={handleSearch} type="submit"><SearchOutlined /></button>

            </div>
            {isLoading && <CircularProgress />}
            {searchedApartments.length !== 0 && !isLoading &&

                <Container sx={{ my: 6 }}>
                    {/* gallery title  */}
                    <div>
                        <Typography className="title" variant="h3" gutterBottom component="div">
                            Searched Apartment
                    </Typography>
                    </div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        {
                            searchedApartments.map(apartment => (<Apartment
                                key={apartment._id}
                                apartment={apartment}
                            ></Apartment>)
                            )}
                    </Grid>
                </Container>

            }
        </Box>
    );
};

export default SearchedApartment;