import React from 'react';
import './Style.css';
import data_Histo from './StoryBookHistoData' // Histogramme
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'; // Histogramme
import data_Courbes from './Story_Book_Data_Courbes'
import { LineChart, Line} 
from 'recharts'; // Courbes
import {PieChart, Pie, Cell,} from 'recharts';
import data_Camembert from './Storybook_Data_Camembert' // Camembert
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';
import data_Arraignée from './StoryBookArraignéeData' // Araignée
import {
  ComposedChart
} from 'recharts';
import data_Sticks from './StoryBook_Data_Sticks'  // Sticks
export default {title: 'Widgets'};

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
}; // Pour le Camembert 

export const Histogramme = () => (
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
export const Nbre_de_pas = () => (
 <div className="Nbres_de_pas">
              <h1>Nombres de Pas aujourd'hui</h1>
              <div className="today">
                <h5>6000</h5>
              </div>
              <div className="hier">
                <h6>Hier : 4000</h6>
              </div>
              <div className="moyenne">
                <h6>Avg semaine : 3457</h6>
              </div>
</div>
);
export const Courbes = () =>(
  <div className="widget-Courbes">
    <div className="title">Temps de Sommeil en heure</div>
            <LineChart
                 width={550}
                height={350}
                data={data_Courbes}
                margin={{ top: 5, right: 30, left: 1, bottom: 5,}}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Semaine_Précedente" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Semaine_Actuelle" stroke="#82ca9d" />
            </LineChart>
</div>
);
export const Camembert = () =>(
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
export const Arraignée = () =>(
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
export const Sticks = () =>(
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