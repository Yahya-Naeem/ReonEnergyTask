import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
//import screens to render
import ChartScreen from '../screens/Chart';
import TableScreen from '../screens/Table';
import Default from '../screens/Default';
//component body start
export default function AppRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/chart" element={<ChartScreen />} />
            <Route path="/table" element={<TableScreen />} />
        </Routes>    
    </BrowserRouter>
  )
};
