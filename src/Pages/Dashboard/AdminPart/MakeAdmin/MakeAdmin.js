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

        fetch('https://mighty-sea-02606.herokuapp.com/users/admin', {
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
            <Container sx={{ py: 4 }} style={{ width: "50%", boxShadow: "rgb(226 205 159) 0px 0px 20px" }} >
                {/* Make Admin title  */}
                <div className="dashboard-title">
                    <h4>Make Admin</h4>
                </div>
                {isLoading ? <CircularProgress /> : <Box style={{ width: '80%', margin: 'auto' }}>
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

                        <button type="submit" className="home-btn" variant="outlined">Make Admin</button> <br />

                    </form>
                </Box>
                }
                {success && <Alert severity="success">Admin making successfully</Alert>}
            </Container>
        </Box>
    );
};

export default MakeAdmin;