import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import './ScheduleForm.css';
import useAuth from '../../../../hooks/useAuth';

const ScheduleForm = (props) => {
    const { user } = useAuth();
    const { apartment_name, location } = props.apartmentInfo;

    const [schedule, setSchedule] = useState({});
    const [success, setSuccess] = useState(false);

    const handleInput = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSchedule = { ...schedule };
        newSchedule[field] = value;
        setSchedule(newSchedule);
    }

    const handleScheduleNow = e => {
        const scheduleInfo = {
            apartment_name: schedule.apartment_name,
            location: schedule.location,
            user_name: schedule.name,
            user_email: schedule.email,
            date: schedule.date,
            time: schedule.time,
            message: schedule.message

        }

        fetch('https://mighty-sea-02606.herokuapp.com/schedules', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(scheduleInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Appointment is added successfully');
                    setSuccess(true)
                }
            })
        e.preventDefault();

    }

    return (
        <Box>
            <Container >
                {/* gallery title  */}
                <div style={{ textAlign: 'center' }}>
                    <h1>Take Your Tour</h1>
                </div>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <form className="hometex-form" onSubmit={handleScheduleNow}>
                        <TextField
                            required
                            className="input-field"
                            id="outlined-basic"
                            value={apartment_name}
                            type="text"
                            name="apartment_name"
                            variant="outlined"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-basic"
                            value={location}
                            type="text"
                            name="location"
                            variant="outlined"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            defaultValue={user.displayName}
                            type="text"
                            name="name"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            defaultValue={user.email}
                            type="email"
                            name="email"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            defaultValue="Prefered Visit Date"
                            type="text"
                            name="date"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            defaultValue="Prefered Visit Time"
                            type="text"
                            name="time"
                            onBlur={handleInput}
                        /> <br />
                        <TextField
                            className="input-field"
                            id="outlined-multiline-static"
                            defaultValue="Message"
                            onBlur={handleInput}
                            name="message"
                            multiline
                            rows={4}
                        /> <br />
                        <Button type="submit" className="home-btn" variant="outlined">Schedule Now</Button>
                    </form>
                    {success && <Alert severity="success">Appoinment has taken successfully</Alert>}
                </Grid>
            </Container>
        </Box>
    );
};

export default ScheduleForm;