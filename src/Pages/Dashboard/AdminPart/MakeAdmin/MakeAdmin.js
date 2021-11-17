import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, CircularProgress, Container, TextField, Typography, Alert } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { isLoading, admin } = useAuth();

    const handleInput = e => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleMakeAdmin = e => {
        const admin = { email };

        fetch('https://quiet-sea-21548.herokuapp.com/users/admin', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.preventDefault();
    }

    return (
        <Box sx={{ my: 8 }}>
            <Container sx={{ my: 6 }}>
                {/* gallery title  */}
                <div>
                    <Typography className="title" variant="h3" gutterBottom component="div">
                        Make Admin
                    </Typography>
                </div>
                {isLoading ? <CircularProgress /> : <Box style={{ width: '40%', margin: 'auto' }}>
                    <form onSubmit={handleMakeAdmin}>
                        <TextField
                            required
                            className="input-field"
                            id="outlined-password-input"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleInput}
                        /> <br />

                        <Button type="submit" className="home-btn" variant="outlined">Make Admin</Button> <br />

                    </form>
                </Box>
                }
                {success && <Alert severity="success">Admin making successfully</Alert>}
            </Container>
        </Box>
    );
};

export default MakeAdmin;