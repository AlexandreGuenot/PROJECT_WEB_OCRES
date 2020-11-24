import React, { Component } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import data_Sticks from './Data_Sticks'
export class Vertical_Sticks extends Component {

  render() {
    return (
<div className="widget_Stick">
    <div className="title">Temps passé devant un écran dans la semaine</div>
      <ComposedChart
        layout="vertical"
        width={500}
        height={315}
        data={data_Sticks}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Temps_d'écran" barSize={20} fill="#413ea0" />
      </ComposedChart>
</div>
    );
  }
}
export default Vertical_Sticks;
