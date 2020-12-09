import React, { useState, useEffect } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import { listEcran } from '../service/API'




const Vertical_Sticks = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    listEcran().then(res => {
      setData(res.data)
    }).catch(e => {
      alert(e)
    })
  }, [])


  return (
    <div className="widget_Stick">
      <div className="title">Temps passé devant un écran dans la semaine</div>
      <ComposedChart
        layout="vertical"
        width={500}
        height={315}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="titre" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="valeur" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );

}
export default Vertical_Sticks;
