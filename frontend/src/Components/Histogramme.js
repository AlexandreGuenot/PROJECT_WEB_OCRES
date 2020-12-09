import React, { useState, useEffect } from 'react';
import { listVisite } from '../service/API'


import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Widget_Histogramme = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    listVisite().then(res => {
      setData(res.data)
    }).catch(e => {
      alert(e)
    })
  }, [])

  return (
    <div className="widget-Histogramme">
      <div className="title">Nombres de Visites médicales cette année </div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="titre" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valeur" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
export default Widget_Histogramme;
