import React, { useState, useEffect } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
    from 'recharts';
import { getSommeils } from '../service/API'
import moment from "moment";
import 'moment/min/locales'
moment.locale('fr');


// Widget fait avec Librairie Recharts
const Widget_Courbes = (props) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    // une fois que le composant est cahrgé on appelle l'api pour récupérer les données
    useEffect(() => {
        getSommeils().then(res => {
            console.log(res.data)
            setData(res.data) // on met à jour le state data
        }).catch(e => {
            alert(e)
        })
    }, [])


    const renderDate = (date) => {
        return moment(date).format('L')
    }

    return (
        <div className="widget-Courbes">
            <div className="title">Temps de Sommeil en heure</div>
            <LineChart
                width={550}
                height={350}
                data={data}
                margin={{ top: 5, right: 30, left: 1, bottom: 5, }}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="date" tickFormatter={renderDate} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="oneWeekAgoTemps" stroke="#FFFFFF" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="twoWeeksAgoTemps" stroke="#707070" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );




}
export default Widget_Courbes;