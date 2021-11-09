import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';

const bannerbg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter,textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my:3, fontSize: 13, color: "gray", fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam tenetur modi consectetur. Alias, omnis facere iste laudantium dolorum dicta?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5ce7ed' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;