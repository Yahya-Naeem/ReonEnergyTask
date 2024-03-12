import React, { useEffect } from 'react';
import {useDispatch } from 'react-redux';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {addData} from '../redux/counter';
export default function Table() {
    const fakeData = {
        "data": [
            { "date": "11-08-2023", "name": "name-1", "avg": 5, "total": 10 },
            { "date": "12-08-2023", "name": "name-2", "avg": 8, "total": 15 },
            { "date": "13-08-2023", "name": "name-3", "avg": 12, "total": 12 },
            { "date": "14-08-2023", "name": "name-4", "avg": 9, "total": 9 },
            { "date": "15-08-2023", "name": "name-5", "avg": 3, "total": 17 },
            { "date": "16-08-2023", "name": "name-6", "avg": 10, "total": 14 }
        ],
        "meta": [
            { "field": "avg", "axis": 1, "color": "red", "chartType": "line" },
            { "field": "total", "axis": 3, "color": "green", "chartType": "bar" }
        ]
    };
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(addData(fakeData));
    },[]);
    const renderCharts = () => {
        return fakeData.meta.map((item, index) => {
            if (item.chartType === "line") {
                return (
                    <LineChart key={index} width={500} height={300} data={fakeData.data}>
                        <XAxis dataKey="date" />
                        <YAxis yAxisId={item.axis} />
                        <CartesianGrid stroke="#ccc" />
                        <Line type="monotone" dataKey={item.field} stroke={item.color} yAxisId={item.axis} />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                );
            } else if (item.chartType === "bar") {
                return (
                    <BarChart key={index} width={500} height={300} data={fakeData.data}>
                        <XAxis dataKey="date" />
                        <YAxis yAxisId={item.axis} />
                        <CartesianGrid stroke="#ccc" />
                        <Bar dataKey={item.field} fill={item.color} yAxisId={item.axis} />
                        <Tooltip />
                        <Legend />
                    </BarChart>
                );
            }
            return null;
        });
    };

    return (
        <div>
            {renderCharts()}
        </div>
    );
}
