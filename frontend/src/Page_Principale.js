import React, { useCallback } from 'react';
import './App.css';
import Widget_Chart from './Chart'
import Widget_Radar from './Radar'
import Widget_1 from './Widget-1'
import Widget_2 from './Widget-2'
import Widget_3 from './Widget-3'
import Widget_4 from './Widget-4'

// Page Widgets 
function Page_Principale() {
    return(
        <div className="main">
            <div className="row">   {/* Row Widget 1/2/3 */}
            
                <div className="col-sm-4">
                        <Widget_1/> 
                </div>

                <div className="col-sm-3">                    
                        <Widget_2/>
                </div>

                <div className="col-sm-1">
                        <Widget_3/>
                </div>
            </div>

            <div className="row"> {/* Row Widget Chart/Radar/4 */}
                <div className="col-sm-4">
                    <div className="widget-Chart">
                         <Widget_Chart/>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="widget-Radar">
                         <Widget_Radar/>
                    </div>
                </div>
                        <Widget_4/>                
                </div>

        <footer>
            <div className="le-footer">
                Made by Gilles Liso & Alexandre Guenot
            </div>
        </footer>


        </div>
        
    );
}
export default Page_Principale;