import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, .7)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{mb:5}} style={{ color: '#5ce7ed' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:5}} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque rem dolorum exercitationem, cum vel illo accusamus odio ratione. Illum?
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:'#5ce7ed'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;