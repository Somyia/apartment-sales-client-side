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
import './MySchedule.css';
import useAuth from '../../../../hooks/useAuth';


const MySchedule = () => {
    const [mySchedules, setMySchedules] = useState([]);
    const { user } = useAuth();

    const handleCancle = id => {
        const deletion = window.confirm('Are you sure to delete');
        if (deletion) {
            fetch(`https://quiet-sea-21548.herokuapp.com/schedules/${id}`, {
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
        const url = `https://quiet-sea-21548.herokuapp.com/schedules`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMySchedules(data))
    }, [mySchedules]);

    const filteredSchedules = mySchedules.filter(mySchedule => mySchedule.user_email == user.email);
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
                            <Table aria-label="simple table" className="apartment-table">
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
                                    {filteredSchedules.map((schedule) => (
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
                                                type="submit" className="home-btn"
                                                onClick={() => handleCancle(schedule._id)} variant="outlined">Cancle</Button></TableCell>
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

export default MySchedule;