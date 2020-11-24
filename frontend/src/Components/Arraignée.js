import React, { Component } from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';
import data_Arraignée from './Data_Arraignée'

class Widget_Arraignée extends Component{

  render() {
    return (
<div className="widget_Arraignée">
        <div className="title">Activité physique en nombre d'heure</div>
            <RadarChart cx={250} 
                        cy={190} 
                        outerRadius={150} 
                        width={500} 
                        height={390} 
                        data={data_Arraignée}
                        >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#111111" fill="#8884d8" fillOpacity={0.7} />
            </RadarChart>
</div>
    );
  }
}
export default Widget_Arraignée;