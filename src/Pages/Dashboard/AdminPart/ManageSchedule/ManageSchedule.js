import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const ManageSchedule = () => {
    const [schedules, setSchedules] = useState([]);
    const { user } = useAuth();



    const handleUpdate = id => {
        fetch(`https://mighty-sea-02606.herokuapp.com/schedules/${id}`, {
            method: 'put',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Users appoinment updated successfully')
                }
            })
    }

    useEffect(() => {
        fetch('https://mighty-sea-02606.herokuapp.com/schedules')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [schedules]);

    return (
        <Box sx={{ my: 8 }}>
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
                                    {schedules.map((schedule) => (
                                        <tr
                                            key={schedule._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <td component="th" scope="row">
                                                <h6>{schedule.apartment_name}</h6>
                                                {schedule.location}
                                            </td>
                                            <td align="right">{schedule.date}</td>
                                            <td align="right">{schedule.time}</td>
                                            <td align="right">{schedule.status}</td>
                                            <td align="right"><button
                                                type="submit" className="home-btn" variant="outlined" onClick={() => handleUpdate(schedule._id)}>Update</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ManageSchedule;