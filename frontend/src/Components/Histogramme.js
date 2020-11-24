import React, { Component } from 'react';

import data_Histo from './Data_Histo'


import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Widget_Histogramme extends Component{
    render() {
    return (
<div className="widget-Histogramme">
    <div className="title">Nombres de Visites médicales cette année </div>
      <BarChart
        width={500}
        height={300}
        data={data_Histo}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Visites_médicale" fill="#8884d8" />
      </BarChart>
</div>
    );
  }
}
export default Widget_Histogramme;
