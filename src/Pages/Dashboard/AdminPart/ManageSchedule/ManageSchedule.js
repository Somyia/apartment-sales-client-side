import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../hooks/useAuth';

const ManageSchedule = () => {
    const [schedules, setSchedules] = useState([]);
    const { user } = useAuth();



    const handleUpdate = id => {
        fetch(`https://quiet-sea-21548.herokuapp.com/schedules/${id}`, {
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
        fetch('https://quiet-sea-21548.herokuapp.com/schedules')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [schedules]);

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        My Schedule
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>


                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="apartment-table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Apartment</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                        <TableCell align="right">Status</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {schedules.map((schedule) => (
                                        <TableRow
                                            key={schedule._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <h6>{schedule.apartment_name}</h6>
                                                {schedule.location}
                                            </TableCell>
                                            <TableCell align="right">{schedule.date}</TableCell>
                                            <TableCell align="right">{schedule.time}</TableCell>
                                            <TableCell align="right">{schedule.status}</TableCell>
                                            <TableCell align="right"><Button
                                                type="submit" className="home-btn" variant="outlined" onClick={() => handleUpdate(schedule._id)}>Update</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default ManageSchedule;