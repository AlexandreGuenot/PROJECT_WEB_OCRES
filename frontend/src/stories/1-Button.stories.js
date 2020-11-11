import React from 'react';
import 
{ LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';
import 
{Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} 
from 'recharts';
import data_Chart from './Story_Book_Data'
import data_Radar from './StoryBookRadarData'
import { FaFacebook} from 'react-icons/fa';
import { FiTwitter} from 'react-icons/fi';
import './Style.css';
import {GrInstagram} from 'react-icons/gr'
export default {
  title: 'Widgets',
};
export const widget1 = () => (
              <div className="Widget-1">
            <h3>Widget 1 : Most Visited...</h3>
            </div>
);
export const widget2 = () => (
              <div className="Widget-2">
            <h3>Widget 2 : Latest...</h3>
            </div>
);
export const widget3 = () => (
                <div className="Widget-3">
            <h3>Widget 3 : Total Views...</h3>
            </div>
  
);
export const widget4 = () => (
                    <div className="Widget-4">
                    <h3>Widget 4 : Followers per Network</h3>
                    <table>
                        <thead>
                        <tr>
                        <th><FaFacebook></FaFacebook>Number of Followers</th>
                        <th><GrInstagram></GrInstagram>Number of Followers</th>
                        <th><FiTwitter></FiTwitter>Number of Followers</th>
                        </tr>
                        </thead>
                    </table>
             </div>
);
export const chart = () => (
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
export const radar = () => (
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
        <Radar name="Mike" dataKey="A" stroke="#111111" fill="#8884d8" fillOpacity={0.7} />
      </RadarChart>
);
