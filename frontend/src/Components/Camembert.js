import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import { listConsommation } from '../service/API'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "black", "blue", "green", "gray"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Camembert = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    listConsommation().then(res => {
      setData(res.data)
    }).catch(e => {
      alert(e)
    })
  }, [])





  return (
    <div className="widget-Camembert">
      <div className="title">Consommation Alimentaire ce mois-ci</div>
      <div className="legende">
        {data.map((color, index) => (
          <div key={"legende" + index}>
            <h6 style={{ backgroundColor: COLORS[index % COLORS.length] }}>{color.titre}</h6>
          </div>
        ))}
      </div>
      <PieChart width={400} height={500}>
        <Pie
          data={data}
          cx={235}
          cy={115}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={115}
          fill="#8884d8"
          dataKey="valeur"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </div>
  );

}
export default Camembert;