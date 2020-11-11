import React, { Component } from 'react';
import './App.css';
import { FaFacebook} from 'react-icons/fa';
import { FiTwitter} from 'react-icons/fi';
import {GrInstagram} from 'react-icons/gr'
// Widget Réseaux_Sociaux
class Widget_4 extends Component{
    render(){
        return(
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
      );
    }



}
export default Widget_4;