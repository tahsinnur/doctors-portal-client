import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess]= useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://gentle-savannah-03074.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('Doctor Added Successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    sx={{ width: '50%' }}
                    type="text"
                    label="Name"
                    variant="standard"
                    onChange={e => setName(e.target.value)} />
                <br />
                <TextField
                    required
                    sx={{ width: '50%' }}
                    type="email"
                    label="Email"
                    variant="standard"
                    onChange={e => setEmail(e.target.value)} />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])} />
                <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <Alert severity="success">{success}</Alert>
            }
        </div>
    );
};

export default AddDoctor;