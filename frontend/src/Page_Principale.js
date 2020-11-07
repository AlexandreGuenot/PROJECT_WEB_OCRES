import React, { useCallback } from 'react';
import './App.css';
import Widget_Chart from './Chart'
import Widget_Radar from './Radar'
import { FaFacebook} from 'react-icons/fa';
import { FiTwitter} from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr'
// Page Widgets 
function Page_Principale() {
    return(
        <div className="main">
            <div className="row">   {/* Row Widget 1/2/3 */}
            
                <div className="col-sm-4">
                    <div className="Widget-1">
                        <h3>Widget 1 : Most Visited...</h3>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="Widget-2">
                        <h3>Widget 2 : Latest...</h3>
                    </div>
                </div>
                <div className="col-sm-1">
                    <div className="Widget-3">
                        <h3>Widget 3 : Total Views...</h3>
                    </div>
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
                <div className="Widget-4">
                    <h3>Widget 4 : Followers per Network</h3>
                    <table>
                        <thead>
                        <tr>
                        <th><FaFacebook></FaFacebook>Number of Followers</th>
                        <th><GrInstagram></GrInstagram>Number of Followers</th>
                        <th><FiTwitter></FiTwitter>Number of Followers</th>
                        </tr>
                        </thead>
                    </table>
                </div>
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