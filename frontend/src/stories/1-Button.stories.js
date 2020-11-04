import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import 
{ LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';
import data_Chart from './Story_Book_Data'
export default {
  title: 'Widgets',
};

export const Chart = () => (
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
