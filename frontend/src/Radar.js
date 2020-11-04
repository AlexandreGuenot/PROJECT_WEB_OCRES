import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';
import data_Radar from './Data_Radar'

class Widget_Radar extends Component{

  render() {
    return (
      <RadarChart cx={250} 
                  cy={190} 
                  outerRadius={150} 
                  width={500} 
                  height={390} 
                  data={data_Radar}
                  >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
export default Widget_Radar;