import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ApartmentDetails from '../ApartmentDetails/ApartmentDetails';

const TakeSchedule = () => {
    const { id } = useParams();
    const [apartmentInfo, setApartmentInfo] = useState({});

    useEffect(() => {
        fetch(`https://quiet-sea-21548.herokuapp.com/apartments_info/${id}`)
            .then(res => res.json())
            .then(data => setApartmentInfo(data))

    }, []);
    return (
        <div>
            <Navbar></Navbar>
            <ApartmentDetails apartmentInfo={apartmentInfo}></ApartmentDetails>
            <Footer></Footer>
        </div>
    );
};

export default TakeSchedule;