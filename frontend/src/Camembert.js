import React, { Component } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';
import data_Camembert from './Data_Camembert'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

class Camembert extends Component {

  render() {
    return (
<div className="widget-Camembert">
    <div className="title">Consommation Alimentaire ce mois-ci</div>
      <div className="legende">Bleu : Viande<br/>Orange : Légumes<br/>Vert : Poisson<br/>Jaune : Sodas</div>                        
        <PieChart width={400} height={500}>
          <Pie
            data={data_Camembert}
            cx={235}
            cy={115}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={115}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data_Camembert.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
</div>
    );
  }
}
export default Camembert;