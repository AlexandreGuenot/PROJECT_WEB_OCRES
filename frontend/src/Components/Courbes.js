import React, { Component } from 'react';
import './App.css';
import data_Courbes from './data_Courbes'
import 
{ LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} 
from 'recharts';

// Widget fait avec Librairie Recharts
class Widget_Courbes extends Component{
    render(){
        return(
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
                <Line type="monotone" dataKey="Semaine_Précedente" stroke="#FFFFFF" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Semaine_Actuelle" stroke="#707070"   activeDot={{ r: 8 }}/>
            </LineChart>
</div>
      );
    }



}
export default Widget_Courbes;