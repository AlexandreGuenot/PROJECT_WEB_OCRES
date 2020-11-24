import React, { Component } from 'react';
import './App.css';
class Nbres_de_pas extends Component{
    render(){
        return(
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
    }



}
export default Nbres_de_pas;