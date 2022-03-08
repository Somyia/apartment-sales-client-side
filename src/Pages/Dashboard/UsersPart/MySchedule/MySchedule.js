import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
import './MySchedule.css';
import useAuth from '../../../../hooks/useAuth';


const MySchedule = () => {
    const [mySchedules, setMySchedules] = useState([]);
    const { user } = useAuth();

    const handleCancle = id => {
        const deletion = window.confirm('Are you sure to delete');
        if (deletion) {
            fetch(`https://mighty-sea-02606.herokuapp.com/schedules/${id}`, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Schedule is cancled successfully')
                    }
                })

        }

    }

    useEffect(() => {
        const url = `https://mighty-sea-02606.herokuapp.com/schedules`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMySchedules(data))
    }, [mySchedules]);


    const filteredSchedules = mySchedules.filter(mySchedule => mySchedule.user_email == user.email);
    return (
        <Box sx={{ my: 8 }}>
            {filteredSchedules.length === 0 ? < div >
                <h1>No Schedule Found</h1>
            </div> :
                <Container sx={{ my: 6 }}>
                    {/* gallery title  */}
                    <div className="dashboard-title">
                        <h4>My Schedule</h4>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <div>
                                <table className="apartment-table">
                                    <thead>
                                        <tr>
                                            <th>Apartment</th>
                                            <th align="right">Date</th>
                                            <th align="right">Time</th>
                                            <th align="right">Status</th>
                                            <th align="right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSchedules.map((schedule) => (
                                            <tr
                                                key={schedule._id}

                                            >
                                                <td>
                                                    <h6>{schedule.apartment_name}</h6>
                                                    {schedule.location}
                                                </td>
                                                <td align="right">{schedule.date}</td>
                                                <td align="right">{schedule.time}</td>
                                                <td align="right">{schedule.status}</td>
                                                <td align="right"><button
                                                    type="submit" className="home-btn"
                                                    onClick={() => handleCancle(schedule._id)} >Cancle</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            }
        </Box >
    );
};

export default MySchedule;