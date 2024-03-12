import React from 'react';
import { CSVLink } from 'react-csv';

const CSVDownloadButton = ({ data, filename }) => {
  return (
    <CSVLink 
      data={data} 
      filename={filename}
      style={{
        width:'90%',
        textAlign:'center',
        marginTop:10,
        textDecoration: 'none', // Removes underline from the link
        backgroundColor: 'orange', // Sets the background color to orange
        color: 'white', // Sets the text color to white for better contrast
        padding: '10px 20px', // Adds some padding for better appearance
        borderRadius: '5px', // Rounds the corners of the button
        cursor: 'pointer', // Changes the cursor to a pointer when hovering over the button
      }}
    >
      Download CSV
    </CSVLink>
  );
};

export default CSVDownloadButton;