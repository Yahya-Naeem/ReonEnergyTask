import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';

export default function Default() {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" marginTop={20}>
      <Grid item textAlign="center">
        <Typography variant="h5" gutterBottom>
          My name is Yahya,
        </Typography>
        <Typography variant="h5" gutterBottom>
          I am a front-end developer
        </Typography>
        <Typography variant="subtitle1">and this is my Reon Energy task.</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Please click the button to proceed.</Typography>
      </Grid>
      
      <Grid item marginTop={2}>
        <Button
          onClick={() => {
            navigate('/chart');
          }}
          variant="contained"
          color="primary"
          sx={{ bgcolor: 'orange' }} // Set the background color to orange
        >
          See Table
        </Button>
      </Grid>
    </Grid>
  );
}
