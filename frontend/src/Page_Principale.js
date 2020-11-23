import React from 'react';
import './App.css';
import Widget_Courbes from './Courbes';
import Widget_Arraignée from './Arraignée'
import Widget_Histogramme from './Histogramme'
import Nbres_de_pas from './Nbres_de_pas'
import Camembert from './Camembert'
import Vertical_Sticks from './Sticks'


// Page Widgets 
function Page_Principale() {
    return(
        <div className="main">
            <div className="row">   {/* Row */}
            
                <div className="col-lg-4">
                         <Widget_Courbes/>
                </div>

                <div className="col-lg-3">                    
                        <Nbres_de_pas/>
                </div>

                <div className="col-lg-1">
                        <Camembert/>
                </div>
            </div>  {/*  Row */}

            <div className="row"> {/* Row Widget Chart/Radar/4 */}
                <div className="col-lg-4">
                        <Widget_Histogramme/>
                </div>
                <div className="col-lg-2">
                         <Widget_Arraignée/>       
                </div>
                <div className="col-lg-6">
                        <Vertical_Sticks/>
                </div>

            </div>   {/*  Row */}

        <footer>
            <div className="le-footer">
                Made by Gilles Liso & Alexandre Guenot
            </div>
        </footer>


        </div>
        
    );
}
export default Page_Principale;