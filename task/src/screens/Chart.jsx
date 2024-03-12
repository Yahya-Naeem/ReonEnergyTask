import React from 'react';
import Chart from '../components/Chart';
import { useNavigate } from 'react-router-dom';
//mui imports
import { Grid , Button} from '@mui/material';
export default function ChartScreen() {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="center" alignItems="center" textAlign="center">
      <Grid textAlign="center" alignItems="center" padding={10}>
        <Chart />
        {/*button grid */}
        <Grid container justifyContent="center">
          <Button
            onClick={() => {
              navigate('/table');
            }}
            variant="contained"
            color="primary"
            sx={{ bgcolor: 'orange' }} // Set the background color to orange
          >
            See Table
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
