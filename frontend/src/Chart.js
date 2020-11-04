import React, { Component } from 'react';
import './App.css';
import data_Chart from './Data_Chart'
import 
{ LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';

// Widget fait avec Librairie Recharts
class Widget_Chart extends Component{
    render(){
        return(
            <LineChart
                width={700}
                height={400}
                data={data_Chart}
                margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
      );
    }



}
export default Widget_Chart;