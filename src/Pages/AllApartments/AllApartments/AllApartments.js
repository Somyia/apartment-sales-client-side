import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Apartments from '../Apartments/Apartments';

const AllApartments = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Apartments></Apartments>
            <Footer></Footer>
        </div>
    );
};

export default AllApartments;