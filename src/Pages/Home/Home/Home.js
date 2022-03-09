import React from 'react';
import NavBar from "../../../Pages/Shared/Navbar/Navbar";
import Footer from '../../Shared/Footer/Footer';
import SearchedApartment from '../../Shared/SearchedApartment/SearchedApartment';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeApartments from '../HomeApartments/HomeApartments';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div >
            <NavBar></NavBar>
            <Banner></Banner>
            <SearchedApartment></SearchedApartment>
            <About></About>
            <HomeApartments></HomeApartments>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;