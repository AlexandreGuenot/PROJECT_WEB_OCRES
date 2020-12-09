import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, } from 'recharts';
import { listSport } from '../service/API'

const Widget_Arraignee = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    listSport().then(res => {
      setData(res.data)
    }).catch(e => {
      alert(e)
    })
  }, [])
  return (
    <div className="widget_Arraignée">
      <div className="title">Activité physique en heure</div>
      <RadarChart cx={250}
        cy={190}
        outerRadius={150}
        width={500}
        height={390}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="titre" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="valeur" stroke="#111111" fill="#8884d8" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
}




export default Widget_Arraignee;