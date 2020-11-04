import React from 'react';
import './App.css';
import Widget_Chart from './Chart'
import Widget_Radar from './Radar'
// Page Widgets 
function Page_Principale() {
    return(
        <div className="main">
            <div className="row">

                <div className="col-sm-4">
                    <div className="Widget-1">Widget 1</div>
                </div>

                <div className="col-sm-3">
                    <div className="Widget-2">Widget 2</div>
                </div>
                <div className="col-sm-1">
                    <div className="Widget-3">Widget 3</div>
                </div>
            </div>

            <div className="row">
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
                </div>


        </div>
        
    );
}
export default Page_Principale;