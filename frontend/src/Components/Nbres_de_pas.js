import React, { useEffect, useState } from 'react';
import './App.css';
import { listStep } from '../service/API'


const Nbres_de_pas = (props) => {
  const [data, setData] = useState([])


  useEffect(() => {
    listStep().then(res => {
      setData(res.data)
    })
  }, [])


  const renderToday = () => {
    let todayStep = data.find(step => step.titre == "Aujourd'hui")
    return todayStep ? todayStep.valeur : "Non renseigné"
  }

  const renderYesterday = () => {
    let yesterdayStep = data.find(step => step.titre == "Hier")
    return yesterdayStep ? yesterdayStep.valeur : "Non renseigné"
  }

  const renderAvg = () => {
    let somme = data.reduce((acc, current) => acc + current.valeur, 0)
    if (data.length == 0) {
      return 0
    } else {
      return somme / data.length
    }
  }
  return (
    <div className="Nbres_de_pas">
      <h1>Nombres de Pas aujourd'hui</h1>
      <div className="today">
        <h5>{renderToday()}</h5>
      </div>
      <div className="hier">
        <h6>Hier : {renderYesterday()}</h6>
      </div>
      <div className="moyenne">
        <h6>Avg semaine : {renderAvg().toFixed(1)}</h6>
      </div>
    </div>
  );
}


export default Nbres_de_pas;