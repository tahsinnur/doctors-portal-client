import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://gentle-savannah-03074.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
            }
        })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                label="Email" 
                variant="standard"
                type="email"
                onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;