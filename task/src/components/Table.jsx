import * as React from 'react';

//for navigation import 
import { useNavigate } from 'react-router-dom';

//Necessary rect-table imports
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';

//csv file import 
import CSVDownloadButton from './CSVdownload'; // Import the CSVDownloadButton component
//For redux impoer 
import { useSelector} from 'react-redux';

//mui imports
import { Grid , IconButton} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//main components
const Component = () => {
  const navigate = useNavigate();
  //fetch data from redux 
  const  fakeData  = useSelector((state)=> state?.Data.fakeData);
  //fort able render data format
  const data = { nodes: fakeData?.data }; // Assuming "nodes" is the key for your data
  const theme = useTheme(getTheme());
  
  return (
    <Grid container justifyContent="center" alignItems="center" height={'100%'}>
      <Grid item xs={12} textAlign="center" alignItems="center" marginTop={20}>
      <Grid textAlign="left">
      <IconButton
        onClick={() => {
          navigate('/chart');
        }}
        style={{ color: 'orange' }}
      >
        <ArrowBack />
      </IconButton>
    </Grid>

      <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow style={{backgroundColor:'orange'}}>
                <HeaderCell>Date</HeaderCell>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Average</HeaderCell>
                <HeaderCell>Total</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item, index) => (
                <Row key={item.date} item={item} style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F0F0F0' }}>
                  <Cell>{item.date}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.avg}</Cell>
                  <Cell>{item.total}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
      {/* Pass CSV data to CSV downloader component  */}
      
    </Grid>
    <CSVDownloadButton data={fakeData.data} filename="table.csv" /> {/* Integrate CSVDownloadButton */}
  </Grid>
  );
};

export default Component;

